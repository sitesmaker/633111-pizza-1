<template>
  <ul class="ingredients__list">
    <li
      class="ingredients__item"
      v-for="(item, index) in IngredientsAll"
      :key="index"
    >
      <AppDrag
        class="filling"
        :class="setClass(item.id, fillingClass)"
        :transfer-data="item"
        :draggable="item.count < 3 ? true : false"
      >
        {{ item.name }}
      </AppDrag>
      <ItemCounter
        :count="item.count"
        @update:count="$emit('updateCount', { id: item.id, count: $event })"
      />
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

import ItemCounter from "@/common/components/ItemCounter.vue";
import AppDrag from "@/common/components/AppDrag.vue";

export default {
  name: "BuilderIngredientsSelector",
  props: {
    fillingClass: {
      type: Array,
      required: true,
    },
  },
  components: {
    ItemCounter,
    AppDrag,
  },
  methods: {
    setClass(elemId, arr) {
      this.class = null;
      arr.forEach((el) => {
        if (el.id === elemId) {
          this.class = el.class;
          return false;
        }
      });
      return this.class;
    },
  },
  computed: mapGetters(["IngredientsAll"]),
};
</script>

<style>
.filling {
  cursor: pointer;
}
.filling::selection {
  user-select: none;
}
</style>

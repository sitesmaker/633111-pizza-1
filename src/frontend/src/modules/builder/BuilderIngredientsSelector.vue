<template>
  <ul class="ingredients__list">
    <li
      class="ingredients__item"
      v-for="(item, index) in this.ingredients"
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
        @update:count="updateCount(index, item, $event)"
      />
    </li>
  </ul>
</template>

<script>
import ItemCounter from "@/common/components/ItemCounter.vue";
import AppDrag from "@/common/components/AppDrag.vue";

export default {
  name: "BuilderIngredientsSelector",
  data() {
    return {
      ingredients: this.pizzaIngredients,
    };
  },
  props: {
    pizzaIngredients: {
      type: Array,
      required: true,
    },
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
    updateCount(index, item, $event) {
      item.count = $event;
      this.$set(this.ingredients, index, item);
    },
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

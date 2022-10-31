<template>
  <div class="sheet__content dough">
    <label
      class="dough__input"
      v-for="(item, index) in doughAll"
      :key="index"
      :class="item.class"
    >
      <input
        type="radio"
        name="dought"
        class="visually-hidden"
        :value="item.price"
        @change="UPDATE_DOUGH(item)"
        :checked="item.id === 1"
      />
      <b>
        {{ item.name }}
      </b>
      <span>{{ item.description }}</span>
    </label>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import { UPDATE_DOUGH } from "@/store/mutation-types.js";

export default {
  name: "BuilderDoughSelector",
  methods: {
    ...mapMutations("Builder", [UPDATE_DOUGH]),
  },
  computed: mapGetters("Builder", ["doughAll"]),
};
</script>
<style></style>

<template>
  <div class="sheet__content diameter">
    <label
      class="diameter__input"
      v-for="(item, index) in sizesAll"
      :key="index"
      :class="setClass(item.id, sizesClass)"
    >
      <input
        type="radio"
        name="diameter"
        class="visually-hidden"
        :value="item.multiplier"
        :checked="item.id === 1"
        @change="UPDATE_MULTIPLIER(item.multiplier)"
      />
      <span>{{ item.name }}</span>
    </label>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import { UPDATE_MULTIPLIER } from "@/store/mutation-types.js";

export default {
  name: "BuilderSizeSelector",
  methods: {
    ...mapMutations("Builder", [UPDATE_MULTIPLIER]),
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
  computed: {
    ...mapGetters("Builder", ["sizesAll"]),
    ...mapState("Builder", ["sizesClass"]),
  },
};
</script>

<style></style>

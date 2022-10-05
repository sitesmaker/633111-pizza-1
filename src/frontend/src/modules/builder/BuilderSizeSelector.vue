<template>
  <div class="sheet__content diameter">
    <label
      class="diameter__input"
      v-for="(item, index) in sizes"
      :key="index"
      :class="setClass(item.id, sizesClass)"
    >
      <input
        type="radio"
        name="diameter"
        class="visually-hidden"
        :value="item.multiplier"
        v-model="multiplier"
        @change="$emit('multiplier', Number($event.target.value))"
      />
      <span>{{ item.name }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "BuilderSizeSelector",
  data() {
    return {
      multiplier: 1,
    };
  },
  props: {
    sizes: {
      type: Array,
      required: true,
    },
    sizesClass: {
      type: Array,
      required: true,
    },
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
};
</script>

<style></style>

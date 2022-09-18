<template>
  <div class="content__constructor">
    <div class="pizza" :class="doughClass + '-' + sauceClass">
      <AppDrop class="pizza__wrapper" @drop="$emit('updateCount', $event)">
        <div
          class="pizza__filling"
          v-for="(item, index) in ingredientsClass"
          :key="index"
          :class="['pizza__' + item, otherClass(item)]"
        ></div>
      </AppDrop>
    </div>
  </div>
</template>
<script>
import AppDrop from "./AppDrop.vue";
export default {
  name: "SelectorItem",
  data() {
    return {
      ingredientsClass: [],
      secondClass: "pizza__filling--second",
      thirdClass: "pizza__filling--third",
    };
  },
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
    doughClass: {
      type: String,
    },
    sauceClass: {
      type: String,
    },
  },
  components: { AppDrop },
  watch: {
    ingredients() {
      this.ingredients.forEach((item) => {
        let ingredientsClassIndex = this.ingredientsClass.indexOf(item.class);
        if (ingredientsClassIndex !== -1) {
          this.ingredientsClass.splice(ingredientsClassIndex, 1);
        }
        if (!this.ingredientsClass.includes(item.class) && item.count > 0) {
          this.ingredientsClass.push(item.class);
        }
      });
    },
  },
  methods: {
    otherClass(itemClass) {
      let classVal = "";
      this.ingredients.forEach((item) => {
        if (itemClass === item.class && item.count < 2) {
          classVal = "";
        }
        if (itemClass === item.class && item.count === 2) {
          classVal = this.secondClass;
        }
        if (itemClass === item.class && item.count === 3) {
          classVal = this.thirdClass;
        }
      });
      return classVal;
    },
  },
};
</script>

<style></style>

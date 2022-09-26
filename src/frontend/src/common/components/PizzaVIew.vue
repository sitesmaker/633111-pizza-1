<template>
  <div class="content__constructor">
    <div class="pizza" :class="doughClass + '-' + sauceClass">
      <AppDrop class="pizza__wrapper" @drop="$emit('addCount', $event)">
        <div
          class="pizza__filling"
          v-for="(item, index) in UpdateIngredients"
          :key="index"
          :class="['pizza__' + item, otherClass(item)]"
        ></div>
      </AppDrop>
    </div>
  </div>
</template>
<script>
import AppDrop from "@/common/components/AppDrop.vue";
export default {
  name: "PizzaVIew",
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
      required: true,
    },
    sauceClass: {
      type: String,
      required: true,
    },
  },
  components: { AppDrop },
  computed: {
    UpdateIngredients() {
      let ingredientsClass = this.ingredientsClass;
      this.ingredients.forEach((item) => {
        let ingredientsClassIndex = ingredientsClass.indexOf(item.class);
        if (ingredientsClassIndex !== -1) {
          ingredientsClass.splice(ingredientsClassIndex, 1);
        }
        if (!ingredientsClass.includes(item.class) && item.count > 0) {
          ingredientsClass.push(item.class);
        }
      });
      return ingredientsClass;
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

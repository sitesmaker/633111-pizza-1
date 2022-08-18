<template>
  <ul class="ingredients__list">
    <li
      class="ingredients__item"
      v-for="(item, index) in pizzaIngredients"
      :key="index"
    >
      <span
        class="filling"
        :class="setClass(item.id, fillingClass)"
        draggable
        @dragstart="drag($event, item, fillingClass)"
      >
        {{ item.name }}
      </span>
      <ItemCounter
        :itemPrice="item.price"
        :itemId="item.id"
        @getCount="getCount"
      />
    </li>
  </ul>
</template>

<script>
import ItemCounter from "@/common/components/ItemCounter.vue";

export default {
  name: "BuilderIngredientsSelector",
  data() {
    return {
      counterData: null,
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
    setClass: {
      type: Function,
      required: true,
    },
  },
  components: {
    ItemCounter,
  },
  methods: {
    getCount(data) {
      let ingredientClass = [];
      this.fillingClass.forEach((el) => {
        if (el.id === data.itemId) {
          ingredientClass.push(el.class);
        }
      });
      this.$emit("getCount", {
        price: data.price,
        count: data.count,
        oldCount: data.oldCount,
        class: ingredientClass,
      });
    },
    drag(event, item, fillingClass) {
      let elementClass;

      fillingClass.forEach((el) => {
        if (item.id === el.id) {
          elementClass = el.class;
        }
      });

      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("elementClass", elementClass);
      event.dataTransfer.setData("elementId", item.id);
      event.dataTransfer.setData("elementPrice", item.price);
    },
  },
  created() {
    this.$emit("getCount", {
      price: 0,
      count: 0,
      oldCount: 0,
    });
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

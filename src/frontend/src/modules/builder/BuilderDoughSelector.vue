<template>
  <div class="sheet__content dough">
    <label
      class="dough__input"
      v-for="(item, index) in dough"
      :key="index"
      :class="doughClass[index]"
    >
      <input
        type="radio"
        name="dought"
        class="visually-hidden"
        :value="item.price"
        @change="getDoughPrice($event, item.id)"
      />
      <b>
        {{ item.name }}
      </b>
      <span>{{ item.description }}</span>
    </label>
  </div>
</template>
<script>
export default {
  name: "BuilderDoughSelector",
  data() {
    return {
      foundationDought: [
        {
          id: 1,
          class: "pizza--foundation--small",
        },
        {
          id: 2,
          class: "pizza--foundation--big",
        },
      ],
    };
  },
  props: {
    dough: {
      type: Array,
      required: true,
    },
    doughClass: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getDoughPrice(event, id) {
      let elemClass = this.foundationDought[0].class,
        price = Number(event.target.value);

      this.foundationDought.forEach((el) => {
        if (id === el.id) {
          elemClass = el.class;
        }
      });
      this.$emit("onUpdateDough", { price: price, elemClass: elemClass });
    },
  },
  created() {
    let elemClass = this.foundationDought[0].class;
    this.$emit("onUpdateDough", { price: 0, elemClass: elemClass });
  },
};
</script>
<style></style>

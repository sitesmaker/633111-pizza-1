<template>
  <div>
    <label
      class="radio ingredients__input"
      v-for="(item, index) in saucesArr"
      :key="index"
    >
      <input
        type="radio"
        name="sauce"
        value="tomato"
        @change="sauceChange($event, item.price, item.id)"
      />
      <span>{{ item.name }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  data() {
    return {
      sauceArrClass: [
        {
          id: 1,
          class: "tomato",
        },
        {
          id: 2,
          class: "creamy",
        },
      ],
    };
  },
  props: {
    saucesArr: {
      type: Array,
      required: true,
    },
  },
  methods: {
    sauceChange(event, price, id) {
      let sauceClass = this.sauceArrClass[0].class;
      this.sauceArrClass.forEach((el) => {
        if (id === el.id) {
          sauceClass = el.class;
        }
      });
      this.$emit("sausePrice", { price: price, sauceClass: sauceClass });
    },
  },
  created() {
    let sauceClass = this.sauceArrClass[0].class;
    this.$emit("sausePrice", { price: 0, sauceClass: sauceClass });
  },
};
</script>

<style></style>

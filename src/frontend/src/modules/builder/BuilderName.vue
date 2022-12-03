<template>
  <label class="input">
    <span class="visually-hidden">Название пиццы</span>
    <AppInput
      :value="text"
      :name="name"
      :errorText="errorText"
      :placeholder="placeholder"
      @input="inputChange"
    />
  </label>
</template>

<script>
import AppInput from "@/common/components/AppInput.vue";
import { mapGetters, mapMutations } from "vuex";
import { CHANGE_PIZZA_NAME } from "@/store/mutation-types.js";

export default {
  name: "BuilderName",
  data() {
    return {
      name: "",
      text: "",
      errorText: "",
      placeholder: "Укажите название пиццы",
    };
  },
  components: { AppInput },
  methods: {
    ...mapMutations("Builder", [CHANGE_PIZZA_NAME]),
    inputChange(text) {
      this.text = text;
      let maxLength = 3;
      if (this.text.length === 0) {
        this.errorText = "Поле не может быть пустым!";
      } else if (this.text.length < maxLength) {
        this.errorText = `Поле должно содержать не меньше ${maxLength} символов`;
      } else {
        this.errorText = "";
      }

      if (this.text.length >= maxLength) {
        this.CHANGE_PIZZA_NAME(this.text);
      } else {
        this.CHANGE_PIZZA_NAME("");
      }

      this.getAllNamesPizza.forEach((el) => {
        if (el === text) {
          this.errorText = "Пицца с таким названием уже создана";
          this.CHANGE_PIZZA_NAME("");
        }
      });
    },
  },
  computed: {
    ...mapGetters("Cart", ["getAllNamesPizza"]),
  },
};
</script>

<style></style>

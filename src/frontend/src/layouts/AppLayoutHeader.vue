<template v-slot:header>
  <header class="header">
    <div class="header__logo">
      <router-link to="/" class="logo">
        <img
          src="/public/img/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </router-link>
    </div>
    <div class="header__cart">
      <router-link to="/cart" class="logo">{{ getTotalPrice }} ₽</router-link>
    </div>
    <div class="header__user">
      <router-link to="/login" class="header__login">
        <span>Войти</span>
      </router-link>
    </div>
  </header>
</template>

<script>
import { GET_STORAGE } from "@/store/mutation-types.js";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "AppLayoutHeader",
  methods: {
    ...mapMutations("Cart", [GET_STORAGE]),
  },
  computed: {
    ...mapGetters("Cart", ["getTotalPrice"]),
  },
  mounted() {
    if (localStorage.getItem("pizzes")) {
      this.GET_STORAGE(JSON.parse(localStorage.getItem("pizzes")));
    }
  },
};
</script>

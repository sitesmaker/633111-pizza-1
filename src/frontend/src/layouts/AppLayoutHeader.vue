<template v-slot:header>
  <header class="header">
    <div class="header__logo">
      <router-link to="/" class="logo">
        <img
          src="public/img/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </router-link>
    </div>
    <div class="header__cart">
      <router-link to="/cart" class="logo">0 ₽</router-link>
    </div>
    <div class="header__user">
      <router-link to="/login" class="header__login">
        <span>Войти</span>
      </router-link>
    </div>
  </header>
</template>

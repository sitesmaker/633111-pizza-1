<template>
  <div>
    <header class="header">
      <div class="header__logo">
        <a href="index.html" class="logo">
          <img
            src="public/img/logo.svg"
            alt="V!U!E! Pizza logo"
            width="90"
            height="40"
          />
        </a>
      </div>
      <div class="header__cart">
        <a href="cart.html">0 ₽</a>
      </div>
      <div class="header__user">
        <a href="#" class="header__login"><span>Войти</span></a>
      </div>
    </header>
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>
          <div class="content__dough">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите тесто</h2>
              <div class="sheet__content dough">
                <label
                  class="dough__input"
                  v-for="(item, index) in pizza.dough"
                  :key="index"
                  :class="setClass(item.id, doughClass)"
                >
                  <input
                    type="radio"
                    name="dought"
                    value="light"
                    class="visually-hidden"
                    checked
                  />
                  <b>
                    {{ item.name }}
                  </b>
                  <span>{{ item.description }}</span>
                </label>
              </div>
            </div>
          </div>
          <div class="content__diameter">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите размер</h2>
              <div class="sheet__content diameter">
                <label
                  class="diameter__input"
                  :class="{
                    'diameter__input--small': item.id === 1,
                    'diameter__input--normal': item.id === 2,
                    'diameter__input--big': item.id === 3,
                  }"
                  v-for="(item, index) in pizza.sizes"
                  :key="index"
                >
                  <input
                    type="radio"
                    name="diameter"
                    value="small"
                    class="visually-hidden"
                  />
                  <span>{{ item.name }}</span>
                </label>
              </div>
            </div>
          </div>
          <div class="content__ingredients">
            <div class="sheet">
              <h2 class="title title--small sheet__title">
                Выберите ингредиенты
              </h2>
              <div class="sheet__content ingredients">
                <div class="ingredients__sauce">
                  <p>Основной соус:</p>

                  <label
                    class="radio ingredients__input"
                    v-for="(item, index) in pizza.sauces"
                    :key="index"
                  >
                    <input type="radio" name="sauce" value="tomato" checked />
                    <span>{{ item.name }}</span>
                  </label>
                </div>
                <div class="ingredients__filling">
                  <p>Начинка:</p>

                  <ul class="ingredients__list">
                    <li
                      class="ingredients__item"
                      v-for="(item, index) in pizza.ingredients"
                      :key="index"
                    >
                      <span
                        class="filling"
                        :class="setClass(item.id, fillingClass)"
                      >
                        {{ item.name }}
                      </span>

                      <div class="counter counter--orange ingredients__counter">
                        <button
                          type="button"
                          class="counter__button counter__button--minus"
                          disabled
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="content__pizza">
            <label class="input">
              <span class="visually-hidden">Название пиццы</span>
              <input
                type="text"
                name="pizza_name"
                placeholder="Введите название пиццы"
              />
            </label>

            <div class="content__constructor">
              <div class="pizza pizza--foundation--big-tomato">
                <div class="pizza__wrapper">
                  <div class="pizza__filling pizza__filling--ananas"></div>
                  <div class="pizza__filling pizza__filling--bacon"></div>
                  <div class="pizza__filling pizza__filling--cheddar"></div>
                </div>
              </div>
            </div>

            <div class="content__result">
              <p>Итого: 0 ₽</p>
              <button type="button" class="button" disabled>Готовьте!</button>
            </div>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import misc from "@/static/misc.json";
import pizza from "@/static/pizza.json";
import user from "@/static/user.json";

export default {
  name: "IndexHome",
  data() {
    return {
      misc,
      pizza,
      user,
      doughClass: [
        {
          id: 1,
          class: "dough__input--light",
        },
        {
          id: 2,
          class: "dough__input--large",
        },
      ],
      fillingClass: [
        {
          id: 1,
          class: "filling--mushrooms",
        },
        {
          id: 2,
          class: "filling--cheddar",
        },
        {
          id: 3,
          class: "filling--salami",
        },
        {
          id: 4,
          class: "filling--ham",
        },
        {
          id: 5,
          class: "filling--ananas",
        },
        {
          id: 6,
          class: "filling--bacon",
        },
        {
          id: 7,
          class: "filling--onion",
        },
        {
          id: 8,
          class: "filling--chile",
        },
        {
          id: 9,
          class: "filling--jalapeno",
        },
        {
          id: 10,
          class: "filling--olives",
        },
        {
          id: 11,
          class: "filling--tomatoes",
        },
        {
          id: 12,
          class: "filling--salmon",
        },
        {
          id: 13,
          class: "filling--mozzarella",
        },
        {
          id: 14,
          class: "filling--parmesan",
        },
        {
          id: 15,
          class: "filling--blue_cheese",
        },
      ],
    };
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

<template>
  <form action="test.html" method="post" class="layout-form">
    <main class="content cart">
      <div class="container">
        <div class="cart__title">
          <h1 class="title title--big">Корзина</h1>
        </div>

        <div class="sheet cart__empty" v-if="!getPizzes.length">
          <p>В корзине нет ни одного товара</p>
        </div>

        <ul class="cart-list sheet">
          <li
            class="cart-list__item"
            v-for="(item, index) in getPizzes"
            :key="index"
          >
            <div class="product cart-list__product">
              <img
                src="public/img/product.svg"
                class="product__img"
                width="56"
                height="56"
                alt="Капричоза"
              />
              <div class="product__text">
                <h2>{{ item.name }}</h2>
                <ul>
                  <li>{{ item.size }}, {{ item.dough }} тесто</li>
                  <li>Соус: {{ item.sauce }}</li>
                  <li>Начинка: {{ item.ingredients.join(",") }}</li>
                </ul>
              </div>
            </div>

            <div class="counter cart-list__counter">
              <ItemCounter
                :count="item.count"
                :maxCount="3"
                classText="counter__button--orange"
                @update:count="UPDATE_COUNT({ id: item.id, count: $event })"
              />
            </div>

            <div class="cart-list__price">
              <b>{{ item.totalPrice }}</b>
            </div>

            <div class="cart-list__button">
              <button type="button" class="cart-list__edit" @click="redirect">
                Изменить
              </button>
            </div>
          </li>
        </ul>
        <div class="cart__additional">
          <ul class="additional-list">
            <li
              class="additional-list__item sheet"
              v-for="(item, index) in misc"
              :key="index"
            >
              <p class="additional-list__description">
                <img
                  :src="item.image"
                  width="39"
                  height="60"
                  :alt="item.name"
                />
                <span>{{ item.name }}</span>
              </p>

              <div class="additional-list__wrapper">
                <div class="counter additional-list__counter">
                  <!-- <ItemCounter
                    :count="item.count"
                    :maxCount="3"
                    classText="counter__button--orange"
                    @update:count="UPDATE_COUNT({ id: item.id, count: $event })"
                  /> -->
                </div>

                <div class="additional-list__price">
                  <b>× {{ item.price }} ₽</b>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="cart__form">
          <div class="cart-form">
            <label class="cart-form__select">
              <span class="cart-form__label">Получение заказа:</span>

              <select name="test" class="select">
                <option value="1">Заберу сам</option>
                <option value="2">Новый адрес</option>
                <option value="3">Дом</option>
              </select>
            </label>

            <label class="input input--big-label">
              <span>Контактный телефон:</span>
              <input type="text" name="tel" placeholder="+7 999-999-99-99" />
            </label>

            <div class="cart-form__address">
              <span class="cart-form__label">Новый адрес:</span>

              <div class="cart-form__input">
                <label class="input">
                  <span>Улица*</span>
                  <input type="text" name="street" />
                </label>
              </div>

              <div class="cart-form__input cart-form__input--small">
                <label class="input">
                  <span>Дом*</span>
                  <input type="text" name="house" />
                </label>
              </div>

              <div class="cart-form__input cart-form__input--small">
                <label class="input">
                  <span>Квартира</span>
                  <input type="text" name="apartment" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <section class="footer">
      <div class="footer__more">
        <a href="#" class="button button--border button--arrow">
          Хочу еще одну
        </a>
      </div>
      <p class="footer__text">
        Перейти к конструктору<br />чтоб собрать ещё одну пиццу
      </p>
      <div class="footer__price">
        <b>Итого: {{ getTotalPrice }} ₽</b>
      </div>

      <div class="footer__submit">
        <button type="submit" class="button">Оформить заказ</button>
      </div>
    </section>
  </form>
</template>

<script>
import {
  UPDATE_COUNT,
  UPDATE_PRICE,
  GET_STORAGE,
} from "@/store/mutation-types.js";
import { mapState, mapGetters, mapMutations } from "vuex";

import ItemCounter from "@/common/components/ItemCounter.vue";

export default {
  name: "Cart",
  components: {
    ItemCounter,
  },
  methods: {
    ...mapMutations("Cart", [UPDATE_COUNT, UPDATE_PRICE, GET_STORAGE]),
    redirect() {
      this.$router.push("/");
    },
  },
  computed: {
    ...mapState("Cart", ["pizzes", "misc"]),
    ...mapGetters("Cart", ["getPizzes", "getTotalPrice"]),
  },
  mounted() {
    if (localStorage.getItem("pizzes")) {
      this.GET_STORAGE(JSON.parse(localStorage.getItem("pizzes")));
    }
  },
};
</script>

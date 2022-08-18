<template>
  <div>
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>
          <div class="content__dough">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите тесто</h2>
              <BuilderDoughSelector
                :dough="pizza.dough"
                :doughClass="doughClass"
                @getDoughPrice="getDough"
              />
            </div>
          </div>
          <div class="content__diameter">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите размер</h2>
              <BuilderSizeSelector
                :sizes="pizza.sizes"
                :sizesClass="sizesClass"
                :setClass="setClass"
                @multiplier="getMultiplier"
              />
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
                  <RadioButton
                    :saucesArr="pizza.sauces"
                    @sausePrice="getSauce"
                  />
                </div>
                <div class="ingredients__filling">
                  <p>Начинка:</p>
                  <BuilderIngredientsSelector
                    :pizzaIngredients="pizza.ingredients"
                    :fillingClass="fillingClass"
                    :setClass="setClass"
                    @getCount="getIngredients"
                  />
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
            <SelectorItem
              :doughClass="dough.elemClass"
              :sauceClass="sauce.sauceClass"
              :ingredientClass="ingredients.class"
            />
            <BuilderPriceCounter
              :doughPrice="dough.price"
              :price="ingredients.price"
              :multiplier="multiplier"
              :sauce="sauce.price"
            />
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

import RadioButton from "@/common/components/RadioButton.vue";
import SelectorItem from "../common/components/SelectorItem.vue";

import BuilderDoughSelector from "../modules/builder/BuilderDoughSelector.vue";
import BuilderSizeSelector from "../modules/builder/BuilderSizeSelector.vue";
import BuilderPriceCounter from "../modules/builder/BuilderPriceCounter.vue";
import BuilderIngredientsSelector from "../modules/builder/BuilderIngredientsSelector.vue";

export default {
  name: "IndexHome",
  data() {
    return {
      price: 0,
      ingredients: {
        price: 0,
        ingredientClass: null,
      },
      dough: {
        price: 0,
        elemClass: null,
      },
      multiplier: 1,
      sauce: {
        price: 0,
        sauceClass: null,
      },
      misc,
      pizza,
      user,
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
      doughClass: ["dough__input--light", "dough__input--large"],
      sizesClass: [
        {
          id: 1,
          class: "diameter__input--small",
        },
        {
          id: 2,
          class: "diameter__input--normal",
        },
        {
          id: 3,
          class: "diameter__input--big",
        },
      ],
    };
  },
  components: {
    RadioButton,
    SelectorItem,
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderPriceCounter,
    BuilderIngredientsSelector,
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
    getDough(data) {
      this.dough.price = data.price;
      this.dough.elemClass = data.elemClass;
    },
    getSauce(data) {
      this.sauce.price = data.price;
      this.sauce.sauceClass = data.sauceClass;
    },
    getIngredients(data) {
      let price = data.price,
        count = data.count,
        oldCount = data.oldCount;
      this.ingredients.price -= price * oldCount;
      this.ingredients.price += price * count;

      this.ingredients.class = data.class;
    },
    getMultiplier(data) {
      this.multiplier = data;
    },
  },
};
</script>

<style></style>

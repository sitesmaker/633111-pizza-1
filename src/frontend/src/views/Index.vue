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
                @onUpdateDough="changeDough"
              />
            </div>
          </div>
          <div class="content__diameter">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите размер</h2>
              <BuilderSizeSelector
                :sizes="pizza.sizes"
                :sizesClass="sizesClass"
                @multiplier="updateMultiplier"
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
                    @sauceChange="sauceChange"
                  />
                </div>
                <div class="ingredients__filling">
                  <p>Начинка:</p>
                  <BuilderIngredientsSelector
                    :pizzaIngredients="pizza.ingredients"
                    :fillingClass="fillingClass"
                    @updateCount="updateCount"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="content__pizza">
            <PizzaVIew
              :doughClass="dough.elemClass"
              :sauceClass="sauce.sauceClass"
              :ingredients="pizza.ingredients"
              @addCount="addCount"
            />
            <BuilderPriceCounter
              :doughPrice="Number(dough.price)"
              :ingredients="pizza.ingredients"
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
import PizzaVIew from "@/common/components/PizzaVIew.vue";

import BuilderDoughSelector from "@/modules/builder/BuilderDoughSelector.vue";
import BuilderSizeSelector from "@/modules/builder/BuilderSizeSelector.vue";
import BuilderPriceCounter from "@/modules/builder/BuilderPriceCounter.vue";
import BuilderIngredientsSelector from "@/modules/builder/BuilderIngredientsSelector.vue";

export default {
  name: "IndexHome",
  data() {
    return {
      price: 0,
      dough: {
        price: 0,
        elemClass: "pizza--foundation--small",
      },
      multiplier: 1,
      sauce: {
        price: 0,
        sauceClass: "tomato",
      },
      misc,
      pizza,
      user,
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
    PizzaVIew,
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderPriceCounter,
    BuilderIngredientsSelector,
  },
  methods: {
    changeDough(data) {
      let elemClass = this.foundationDought[0].class,
        price = data.price;

      this.foundationDought.forEach((el) => {
        if (data.id === el.id) {
          elemClass = el.class;
        }
      });
      this.dough.price = price;
      this.dough.elemClass = elemClass;
    },
    sauceChange(data) {
      let sauceClass = this.sauceArrClass[0].class,
        id = data.id,
        price = data.price;
      this.sauceArrClass.forEach((el) => {
        if (id === el.id) {
          sauceClass = el.class;
        }
      });
      this.sauce.price = price;
      this.sauce.sauceClass = sauceClass;
    },
    updateCount(data) {
      let id = data.id,
        count = data.count;
      this.pizza.ingredients.forEach((item, index) => {
        if (item.id === id) {
          item.count = count;
          this.$set(this.pizza.ingredients, index, item);
        }
      });
    },
    addCount($event) {
      if ($event.count < 3) {
        $event.count += 1;
      }
      this.pizza.ingredients.forEach((item, index) => {
        if (item.id === $event.id) {
          this.$set(this.pizza.ingredients, index, $event);
        }
      });
    },
    updateMultiplier(data) {
      this.multiplier = data;
    },
  },
  created() {
    // Создаёт каждому ингредиенту счётчик
    this.pizza.ingredients.forEach((item) => {
      item.count = 0;

      this.fillingClass.forEach((elem) => {
        if (elem.id == item.id) {
          item.class = elem.class;
        }
      });
    });
  },
};
</script>

<style></style>

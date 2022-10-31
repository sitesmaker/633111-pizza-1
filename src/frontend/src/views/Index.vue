<template>
  <div>
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>
          <div class="content__dough">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите тесто</h2>
              <BuilderDoughSelector />
            </div>
          </div>
          <div class="content__diameter">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите размер</h2>
              <BuilderSizeSelector />
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
                  <RadioButton />
                </div>
                <div class="ingredients__filling">
                  <p>Начинка:</p>
                  <BuilderIngredientsSelector @updateCount="updateCount" />
                </div>
              </div>
            </div>
          </div>
          <div class="content__pizza">
            <PizzaVIew :ingredients="IngredientsAll" @addCount="addCount" />
            <BuilderPriceCounter />
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { UPDATE_COUNT, ADD_COUNT, INIT } from "@/store/mutation-types.js";

import RadioButton from "@/common/components/RadioButton.vue";
import PizzaVIew from "@/common/components/PizzaVIew.vue";

import BuilderDoughSelector from "@/modules/builder/BuilderDoughSelector.vue";
import BuilderSizeSelector from "@/modules/builder/BuilderSizeSelector.vue";
import BuilderPriceCounter from "@/modules/builder/BuilderPriceCounter.vue";
import BuilderIngredientsSelector from "@/modules/builder/BuilderIngredientsSelector.vue";

export default {
  name: "IndexHome",
  components: {
    RadioButton,
    PizzaVIew,
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderPriceCounter,
    BuilderIngredientsSelector,
  },
  methods: {
    ...mapMutations("Builder", [UPDATE_COUNT, ADD_COUNT, INIT]),
    updateCount(payload) {
      this.UPDATE_COUNT(payload);
    },
    // changeDough(data) {
    //   let elemClass = this.foundationDought[0].class,
    //     price = data.price;

    //   this.foundationDought.forEach((el) => {
    //     if (data.id === el.id) {
    //       elemClass = el.class;
    //     }
    //   });
    //   this.dough.price = price;
    //   this.dough.elemClass = elemClass;
    // },
    // sauceChange(data) {
    //   let sauceClass = this.sauceArrClass[0].class,
    //     id = data.id,
    //     price = data.price;
    //   this.sauceArrClass.forEach((el) => {
    //     if (id === el.id) {
    //       sauceClass = el.class;
    //     }
    //   });
    //   this.sauce.price = price;
    //   this.sauce.sauceClass = sauceClass;
    // },
    addCount($event) {
      if ($event.count < 3) {
        $event.count += 1;
      }
      this.ADD_COUNT($event);
    },
  },
  computed: {
    ...mapGetters("Builder", [
      "IngredientsAll",
      "saucesAll",
      "doughAll",
      "getFillingClass",
    ]),
  },
  created() {
    this.INIT();
    // Создаёт каждому ингредиенту счётчик
    this.IngredientsAll.forEach((item) => {
      item.count = 0;
      this.getFillingClass.forEach((elem) => {
        if (elem.id == item.id) {
          item.class = elem.class;
        }
      });
    });
  },
};
</script>

<style></style>

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
            <BuilderName />
            <PizzaVIew @addCount="addCount" />
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
import BuilderName from "@/modules/builder/BuilderName.vue";

export default {
  name: "IndexHome",
  components: {
    RadioButton,
    PizzaVIew,
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderPriceCounter,
    BuilderIngredientsSelector,
    BuilderName,
  },
  methods: {
    ...mapMutations("Builder", [UPDATE_COUNT, ADD_COUNT, INIT]),
    updateCount(payload) {
      this.UPDATE_COUNT(payload);
    },
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

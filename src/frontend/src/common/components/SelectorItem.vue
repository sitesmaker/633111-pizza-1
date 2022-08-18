<template>
  <div class="content__constructor">
    <div class="pizza" :class="doughClass + '-' + sauceClass">
      <div
        class="pizza__wrapper"
        @drop.prevent="drop($event)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div
          class="pizza__filling"
          v-for="(item, index) in classArray"
          :key="index"
          :class="'pizza__' + item"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SelectorItem",
  data() {
    return {
      classArray: [],
    };
  },
  props: {
    doughClass: {
      type: String,
    },
    sauceClass: {
      type: String,
    },
  },
  methods: {
    drop(event) {
      let elementClass = event.dataTransfer.getData("elementClass"),
        elementId = event.dataTransfer.getData("elementId"),
        elementPrice = event.dataTransfer.getData("elementPrice");

      if (!this.classArray.includes(elementClass)) {
        this.classArray.push(elementClass);
      }
      console.log(elementClass, elementId, elementPrice);
    },
  },
};
</script>

<style></style>

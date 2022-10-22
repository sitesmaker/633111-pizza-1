<template>
  <div class="sheet__content dough">
    <label
      class="dough__input"
      v-for="(item, index) in doughAll"
      :key="index"
      :class="doughClass[index]"
    >
      <input
        type="radio"
        name="dought"
        class="visually-hidden"
        :value="item.id"
        v-model="isChecked"
        @change="
          $emit('onUpdateDough', {
            price: item.price,
            id: item.id,
          })
        "
      />
      <b>
        {{ item.name }}
      </b>
      <span>{{ item.description }}</span>
    </label>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "BuilderDoughSelector",
  data() {
    return {
      isChecked: 1,
    };
  },
  props: {
    doughClass: {
      type: Array,
      required: true,
    },
  },
  computed: mapGetters(["doughAll"]),
};
</script>
<style></style>

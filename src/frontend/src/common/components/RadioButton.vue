<template>
  <div>
    <label
      class="radio ingredients__input"
      v-for="(item, index) in saucesAll"
      :key="index"
    >
      <input
        type="radio"
        name="sauce"
        :value="item.price"
        @change="UPDATE_SAUCE(item)"
        :checked="item.id === 1"
      />
      <span>{{ item.name }}</span>
    </label>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { UPDATE_SAUCE } from "@/store/mutation-types.js";

export default {
  name: "RadioButton",
  methods: {
    ...mapMutations("Builder", [UPDATE_SAUCE]),
  },
  computed: {
    ...mapGetters("Builder", ["saucesAll"]),
  },
};
</script>

<style></style>

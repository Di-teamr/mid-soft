<template>
  <div>
    <!-- <ul></ul> -->
    <Transition name="tlapp">
      <h2 v-show="brshow">45454545</h2>
    </Transition>
    <Transition name="cotapp">
      <div v-show="brshow">
        <li>123121</li>
        <li>123121</li>
        <li>113232</li>
        <li>121232</li>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts" name="texteff">
import { ref, onMounted } from "vue";
let brshow = ref(false);
onMounted(() => {
  brshow.value = true;
});
</script>

<style scoped>
li {
  list-style: none;
  font-size: 3rem;
  font-family: "MyFont";
}
h2 {
  font-size: 4rem;
  font-family: "MyFont";
}
.tlapp-enter-active {
  transition: opacity 0.5s;
  transition-delay: 0.5s;
}
.cotapp-enter-active {
  transition: opacity 0.5s;
  transition-delay: 1.2s;
}
.tlapp-enter-from,
.cotapp-enter-from {
  opacity: 0;
}
</style>

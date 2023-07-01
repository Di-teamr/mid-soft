<template>
  <div>
    <!-- <ul></ul> -->
    <Transition name="tlapp">
      <h2 v-show="brshow">欢迎使用</h2>
    </Transition>
    <Transition name="cotapp">
      <div v-show="brshow">
        <li>便利</li>
        <li>清晰</li>
        <li>简约</li>
        <span>开始使用</span>
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
  line-height: 4.5rem;
  list-style: none;
  font-size: 3rem;
  font-family: "MyFont";
  text-shadow: 0.25rem 0.25rem 0.5rem rgb(255, 255, 255);
}
span {
  line-height: 5rem;
  font-size: 1.5rem;
  font-family: "MyFont";
  text-shadow: 0.25rem 0.25rem 0.5rem rgb(255, 255, 255);
}
h2 {
  font-size: 4rem;
  font-family: "MyFont";
  text-shadow: 0.25rem 0.25rem 0.5rem rgb(255, 255, 255);
  margin-bottom: 3rem;
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

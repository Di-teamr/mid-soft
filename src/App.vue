<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import customIn from "./components/customInfo/index.vue";
import headTab from "./components/headTab/index.vue";
import welcome from "./layout/compoents/welcome/index.vue";
import upload from "./layout/compoents/upload/index.vue";
document.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});
</script>

<template>
  <headTab />
  <customIn value="123"></customIn>
  <welcome />
  <upload />
</template>

<style scoped></style>

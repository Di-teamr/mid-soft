<template>
  <div
    class="bg-[url('@/assets/img/mainbg.jpg')] bg-cover w-full h-screen relative"
  >
    <Transition name="fade">
      <div
        v-show="isshow"
        class="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <svg
          width="90.140380859375"
          height="47.759765625"
          viewBox="0 0 90.140380859375 47.759765625"
          fill="none"
        >
          <path
            id="多边形 5"
            fill-rule="evenodd"
            style="fill: #2e635d"
            opacity="1"
            d="M45.0702 26.8047L2.07019 2.61475L45.0702 43.6147L88.0702 2.61475L45.0702 26.8047Z"
          ></path>
          <path
            id="多边形 5"
            style="fill: #ffffff; opacity: 0.7"
            d="M43.5993,29.4194l-43.00001,-24.18999l1.4709,-2.61466l2.07023,-2.17122l42.99998,40.99997l-2.0702,2.1712l-2.0702,-2.1712l43,-40.99997l2.0702,2.17122l1.4709,2.61466l-44.4709,25.01749zM46.5411,24.1901l-1.4709,2.6146l-1.4709,-2.6146l43,-24.19002l3.5411,4.78588l-45.0702,42.97394l-45.07024,-42.97394l3.54113,-4.78588z"
          ></path>
        </svg>
      </div>
    </Transition>
    <texteff class="absolute top-32 left-1/2 translate-x-1/2"></texteff>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import texteff from "@/components/texteff/index.vue";
// xmlns="http://www.w3.org/2000/svg"
// xmlns:xlink="http://www.w3.org/1999/xlink"
document.documentElement.style.setProperty("--ht", `${window.innerHeight}px`);
document.documentElement.style.setProperty("--wh", `${window.innerWidth}px`);
let isshow = ref(false);
onMounted(() => {
  isshow.value = true;
});
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 1s;
  transition-delay: 2s;
}
.fade-enter-from {
  opacity: 0;
}
</style>

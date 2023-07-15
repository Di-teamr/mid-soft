<template>
  <div
    v-if="0"
    class="w-96 h-96 box-content bg-ceramic rounded-bl-[4.2rem] rounded-tl-[2.4rem] rounded-br-[2.4rem] border-[0.25rem] border-darkGreen absolute z-20"
  >
    <div
      class="w-[22.6rem] bg-[url('@/assets/img/bglog.png')] bg-cover h-[22.6rem] rounded-bl-[3.75rem] rounded-tl-[1.8rem] rounded-br-[1.8rem] m-[0.7rem] flex flex-col pt-16 pb-11 absolute"
    >
      <div
        class="w-64 h-9 m-auto bg-ceramic rounded-br-2xl text-[1.2rem] pl-2 leading-9 text-darkGreen"
      >
        账户:
        <input
          type="text"
          placeholder="手机号/账户名"
          class="w-44 h-9 bg-ceramic z-10 outline-0 inline-block text-sm align-top"
        />
      </div>
      <div
        class="w-64 h-9 m-auto bg-ceramic rounded-bl-2xl text-[1.2rem] pl-2 leading-9 text-darkGreen"
      >
        密码:
        <input
          type="password"
          class="w-44 h-9 z-10 outline-0 bg-ceramic inline-block"
        />
      </div>
      <div
        class="w-64 h-9 bg-ceramic m-auto z-10 rounded-br-2xl leading-9 text-darkGreen text-[1.2rem] text-center"
      >
        登录
      </div>
    </div>
    <!--以下都是斜线 左 中 右 ,偏右相反-->
    <div
      class="w-[0.125rem] h-[7.2rem] bg-ceramic absolute rotate-[-30deg] left-[2.2rem] top-[1.7rem]"
    ></div>
    <div
      class="w-[0.125rem] h-28 bg-ceramic absolute rotate-[-30deg] left-[2.5rem] top-1"
    ></div>
    <div
      class="w-[0.125rem] h-28 bg-ceramic absolute rotate-[-30deg] left-[18.14rem] top-[-0.25rem]"
    ></div>
    <div
      class="w-[0.125rem] h-32 bg-ceramic absolute rotate-[-30deg] left-8 top-[11.54rem]"
    ></div>
    <div
      class="w-[0.125rem] h-36 bg-ceramic absolute rotate-[-30deg] left-10 top-[9.8rem]"
    ></div>
    <div
      class="w-[0.125rem] h-[4.5rem] bg-ceramic absolute rotate-[-30deg] left-[18.75rem] top-[12.6rem]"
    ></div>
    <div
      class="w-[0.125rem] h-32 bg-ceramic absolute rotate-[30deg] left-[21.9rem] top-[6.25rem]"
    ></div>
    <div
      class="w-[0.125rem] h-32 bg-ceramic absolute rotate-[30deg] left-[21.9rem] top-[4.1rem]"
    ></div>
    <div
      class="w-[0.125rem] h-[4.5rem] bg-ceramic absolute rotate-[30deg] left-[5.11rem] top-[7.35rem]"
    ></div>
  </div>
</template>

<script setup lang="ts" name="customInfo">
// import {ref} from "vue";
// const props = defineProps<{
//   value: string;
// }>();
// console.log(props.value);
</script>

<style scoped lang="less"></style>

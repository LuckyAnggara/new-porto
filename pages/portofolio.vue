<template>
  <div class="min-h-full min-w-full">
    <div class="flex flex-col items-center p-6">
      <span class="tracking-normal font-bold text-3xl text-gray-700"
        >PORTOFOLIO</span
      >
      <div class="flex flex-row justify-center w-52 mt-1">
        <div class="border-t-4 basis-1/3"></div>
        <div class="border-t-4 border-gray-700 basis-1/3"></div>
        <div class="border-t-4 basis-1/3"></div>
      </div>
    </div>
    <div class="grid grid-rows-3 grid-flow-col gap-4 bg-blue-500 h-screen">
      <div class="row-start-2 row-span-2">01</div>
      <div class="row-end-3 row-span-2">02</div>
      <div class="row-start-1 row-end-4">03</div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'master',
  setup() {},
}
</script>

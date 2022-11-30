<template>
  <div class="min-h-full min-w-full place-self-start">
    <div class="flex flex-col items-center">
      <div>
        <span class="tracking-normal font-bold text-3xl text-gray-700"
          >Featured Works</span
        >
        <div class="flex flex-row justify-center p-6">
          <div class="border-t-4 basis-1/3"></div>
          <div class="border-t-4 border-gray-700 basis-1/3"></div>
          <div class="border-t-4 basis-1/3"></div>
        </div>
      </div>
    </div>
    <div
      class="grid gap-x-10 gap-y-8 grid-flow-dense auto-cols-min grid-cols-4 p-6 justify-center"
    >
      <div v-for="n in 3" :key="n.id" class="flex-none justify-start">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img
              class="rounded-t-lg"
              src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
              alt=""
            />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{{ n }}</h5>
            <p class="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              type="button"
              class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Button
            </button>
          </div>
        </div>
      </div>
      <div class="flex-none col-span-2">
        <div
          class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg"
        >
          <img
            class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
            alt=""
          />
          <div class="p-6 flex flex-col col-span-2">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
            <p class="text-gray-700 text-base mb-4">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
      <div v-for="n in 3" :key="n.id" class="flex-none justify-start">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img
              class="rounded-t-lg"
              src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
              alt=""
            />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{{ n }}</h5>
            <p class="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              type="button"
              class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'master',
  setup() {},
}
</script>

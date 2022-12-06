<template>
  <div id="aboutme" class="min-h-screen min-w-full place-self-start p-16">
    <div class="flex flex-col items-center">
      <div>
        <span class="tracking-normal font-bold text-3xl text-gray-700"
          >Me, Myself, and I ❤️</span
        >
        <div class="flex flex-row p-6">
          <div class="border-t-4 basis-1/3"></div>
          <div class="border-t-4 border-gray-700 basis-1/3"></div>
          <div class="border-t-4 basis-1/3"></div>
        </div>
      </div>
    </div>
    <div class="flex flex-row mt-20 mb-2">
      <div class="w-1/12"></div>

      <div class="text-center w-4/12">
        <div
          class="relative rounded-xl border-indigo-200 mx-auto border border-spacing-1 w-44"
        >
          <img
            src="avatar.png"
            class="z-40 bottom-0 rounded-xl p-4"
            alt="Avatar"
          />
        </div>

        <h5 class="text-xl font-medium leading-tight mt-4 text-gray-700">
          Lucky Anggara
        </h5>
        <p class="text-gray-700 font-bold">Programmer</p>
      </div>
      <div class="w-4/12 flex flex-col space-y-4">
        <p
          class="text-gray-700 antialiased tracking-wide leading-relaxed text-justify"
        >
          Hello! My name is
          <a class="text-bold text-indigo-700 font-bold">Lucky Anggara</a> and I
          enjoy build things from Code and usefull for other who needs.
        </p>
        <p
          class="text-gray-700 antialiased tracking-wide leading-relaxed text-justify"
        >
          Back in 2018 I was banker who turn out become
          <a class="text-bold text-indigo-700 font-bold">Full Programmer</a>,
          because its very Joyfull to work with. Fast forward Today it's been 4
          years journey, i've work with a number of project.
        </p>
        <p
          class="text-gray-700 antialiased tracking-wide leading-relaxed text-justify"
        >
          My main focus these days is building
          <a class="text-bold text-indigo-700 font-bold">Quran App</a> that can
          be use for anyone. Here are a few tech stack i've been using recently
        </p>
        <div>
          <p
            class="text-gray-700 antialiased tracking-wide leading-relaxed text-justify"
          >
            Here are a few tech stack i've been using recently
          </p>
          <ul
            class="list-none text-gray-700 antialiased tracking-wide leading-relaxed text-justify"
          >
            <li v-for="stack in stacks" :key="stack.id">
              <font-awesome-icon icon="fa-solid fa-caret-right" /> {{ stack }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const stacks = ['Javascript', 'VUe Js', 'Laravel', 'Flutter']

    return {
      stacks,
    }
  },
}
</script>

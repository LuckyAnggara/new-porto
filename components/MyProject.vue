<template>
  <div id="myproject" class="min-w-full min-h-screen flex flex-col p-16">
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
    <div class="flex justify-center">
      <div
        class="w-8/12 grid gap-x-2 gap-y-6 grid-flow-dense auto-cols-min grid-cols-3 p-6"
      >
        <div
          v-for="project in projects"
          :key="project.id"
          class="flex-none justify-start hover:-translate-y-4 transition ease-in-out duration-700"
        >
          <div class="rounded-sm shadow-lg bg-gray-700 max-w-sm h-72">
            <div class="p-6">
              <div class="flex flex-row justify-end mb-8">
                <a :href="project.link">
                  <font-awesome-icon
                    icon="fa-solid fa-up-right-from-square"
                    class="text-white/60"
                  />
                </a>
              </div>
              <h5 class="text-white/90 text-2xl font-bold mb-2 text-justify">
                {{ project.name }}
              </h5>
              <p class="text-white/60 font-light text-sm mb-2">
                {{ project.desc }}
              </p>
              <p class="text-gray-700 text-base mb-2">
                {{ project.desc }}
              </p>
              <!-- <button
                type="button"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const projects = [
      {
        name: 'POS Account Solution',
        desc: 'Currently my Project Apps',
        git: 'https://github.com/LuckyAnggara',
        stacks: ['Laravel', 'Vue Js', 'Flutter'],
      },
      {
        name: 'Siap Baper',
        desc: 'Invetory Management Apps',
        git: 'https://github.com/LuckyAnggara',
        link: 'https://youtu.be/f3QAYlGAwXc?si=Nm9JGbrldQj3OHLk',
        stacks: ['Laravel', 'Vue Js', 'Flutter'],
      },
      {
        name: 'Enterprise Solution',
        desc: 'One App with Rich Feature, from Inventory Management, Invoice Maker, and Reporting',
        git: 'https://github.com/LuckyAnggara',
        link: 'https://drive.google.com/drive/folders/1MKvfVAHr6TGlsZVPkrEOJl49RB9umX6S?usp=sharing',
        stacks: ['Codeigniter'],
      },
      {
        name: 'BBM Manufacturing',
        desc: '',
        git: 'https://github.com/LuckyAnggara',
        link: 'https://drive.google.com/drive/folders/1iDflG4O7NQu2u6sFWWboL7FOSYoXF9dp?usp=sharing',
        stacks: ['Laravel', 'Vue Js', 'Flutter'],
      },

      {
        name: 'Laporan Kinerja',
        desc: 'Goverment Enterprise Resource Management to Generete Monthly Report with Easy',
        git: 'https://github.com/LuckyAnggara',
        link: 'https://drive.google.com/file/d/1UQY6aTkgod8wpwG7w_NJj-F8bjEnKKo7/view?usp=sharing',
        stacks: ['Laravel', 'Vue Js', 'Flutter'],
      },
    ]

    return {
      projects,
    }
  },
}
</script>

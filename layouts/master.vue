<template>
  <div
    class="relative bg-fixed bg-center bg-cover bg-no-repeat font-lato min-h-screen"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="flex flex-col justify-between">
      <div>
        <div class="fixed flex flex-col space-y-4 w-fit z-10 top-80 p-8">
          <a
            v-smooth-scroll
            href="#homesweethome"
            class="bg-gray-700 text-white px-3 py-2 rounded-xl text-sm font-medium flex w-14 outline-none transition-all duration-700 ease-in-out hover:w-28 justify-start group/item"
          >
            <svg
              class="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span
              class="absolute opacity-0 group-hover/item:opacity-100 self-center transition-opacity duration-100 delay-200 ease-in-out ml-10"
              >Home</span
            >
          </a>

          <a
            v-smooth-scroll
            href="#aboutme"
            class="bg-gray-700 text-white px-3 py-2 rounded-xl text-sm font-medium flex w-14 outline-none transition-all duration-700 ease-in-out hover:w-28 justify-start group/item"
          >
            <svg
              class="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <span
              class="absolute opacity-0 group-hover/item:opacity-100 self-center transition-opacity duration-100 delay-200 ease-in-out ml-10"
              >About</span
            >
          </a>

          <a
            v-smooth-scroll
            href="#myproject"
            class="bg-gray-700 text-white px-3 py-2 rounded-xl text-sm font-medium flex w-14 outline-none transition-all duration-700 ease-in-out hover:w-32 justify-start group/item"
          >
            <svg
              class="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
              />
            </svg>
            <span
              class="absolute opacity-0 group-hover/item:opacity-100 self-center transition-opacity duration-200 delay-100 ease-in-out ml-10"
              >Portofolio</span
            >
          </a>

          <a
            v-smooth-scroll
            href="#callme"
            class="bg-gray-700 text-white px-3 py-2 rounded-xl text-sm font-medium flex w-14 outline-none transition-all duration-700 ease-in-out hover:w-30 justify-start group/item"
          >
            <svg
              class="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <span
              class="absolute opacity-0 group-hover/item:opacity-100 self-center transition-opacity duration-100 delay-200 ease-in-out ml-10"
              >Contact</span
            >
          </a>
        </div>
        <div class="flex place-items-end bg-white/90">
          <div class="h-full w-full flex px-16">
            <Nuxt />
          </div>
        </div>
      </div>
      <div class="grow">
        <div class="bg-white/90 w-full p-6">
          <div class="">
            <span class="px-3 mt-3 space-x-4 text-gray-700 flex justify-center">
              <div v-for="call in calls" :key="call.id">
                <a :href="call.link">
                  <font-awesome-icon :icon="call.icon" :size="call.size" />
                </a>
              </div>
            </span>
            <p
              class="mt-3 leading-2 text-center text-gray-500 font-solway text-sm"
            >
              The website is Built by Lucky Anggara using Nuxt Js.
            </p>
            <p
              class="mb-2 leading-2 text-center text-gray-500 font-solway text-sm"
            >
              Thanks for visiting ❤️ nice day
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackgroundImage from '@/static/img/backgrounds.jpg'
export default {
  setup() {
    const image = BackgroundImage
    const calls = [
      {
        link: 'https://github.com/LuckyAnggara',
        icon: 'fa-brands fa-tiktok',
        size: 'lg',
      },
      {
        link: 'https://github.com/LuckyAnggara',
        icon: 'fa-brands fa-github',
        size: 'lg',
      },
      {
        link: 'https://github.com/LuckyAnggara',
        icon: 'fa-brands fa-instagram',
        size: 'lg',
      },
    ]
    // don't forget to expose the function as well.
    return {
      calls,
      image,
    }
  },
}
</script>

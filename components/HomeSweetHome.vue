<template>
  <div class="min-h-screen min-w-full flex items-center p-16">
    <div class="flex-col flex ml-24">
      <span class="tracking-wide font-bold text-6xl px-3 text-gray-700"
        >Lucky Anggara</span
      >
      <span class="tracking-normal text-2xl px-3 text-gray-700">
        Hi, I'm a
        <span class="text-yellow-500 font-bold">{{ typeValue }}</span>
        <span class="blinking-cursor text-yellow-500">|</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </span>
      <span class="px-3 mt-3 space-x-4 text-gray-700">
        <font-awesome-icon icon="fa-brands fa-tiktok " size="lg" />
        <font-awesome-icon icon="fa-brands fa-github" size="lg" />
        <font-awesome-icon icon="fa-brands fa-instagram" size="lg" />
      </span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  setup() {
    const typeValue = ref('')
    const typeStatus = ref(false)
    const displayTextArray = ['Developer', 'Freelancer', 'Lovely Father']
    const typingSpeed = 100
    const erasingSpeed = 100
    const newTextDelay = 2000
    let displayTextArrayIndex = 0
    let charIndex = 0

    function typeText() {
      if (charIndex < displayTextArray[displayTextArrayIndex].length) {
        if (!typeStatus.value) typeStatus.value = true
        typeValue.value +=
          displayTextArray[displayTextArrayIndex].charAt(charIndex)
        charIndex += 1
        setTimeout(typeText, typingSpeed)
      } else {
        typeStatus.value = false
        setTimeout(eraseText, newTextDelay)
      }
    }

    function eraseText() {
      if (charIndex > 0) {
        if (!typeStatus.value) typeStatus.value = true
        typeValue.value = displayTextArray[displayTextArrayIndex].substring(
          0,
          charIndex - 1
        )
        charIndex -= 1
        setTimeout(eraseText, erasingSpeed)
      } else {
        typeStatus.value = false
        displayTextArrayIndex += 1
        if (displayTextArrayIndex >= displayTextArray.length)
          displayTextArrayIndex = 0
        setTimeout(typeText, typingSpeed + 1000)
      }
    }

    onMounted(() => {
      setTimeout(typeText, newTextDelay + 200)
    })

    // don't forget to expose the function as well.
    return {
      typeStatus,
      typeValue,
    }
  },
}
</script>

<style scoped>
.blinking-cursor {
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
</style>

<template>
  <div class="flex flex-col w-full">
    <HomeSweetHome />
    <AboutMe />
    <MyProject />
    <CallMe />
  </div>
</template>

<script>
import HomeSweetHome from '~/components/HomeSweetHome.vue'
import AboutMe from '~/components/AboutMe.vue'
import MyProject from '~/components/MyProject.vue'
import CallMe from '~/components/CallMe.vue'

export default {
  name: 'IndexPage',
  components: { HomeSweetHome, AboutMe, MyProject, CallMe },
  layout: 'master',
  scrollToTop: true,
}
</script>

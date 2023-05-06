<template>
    <the-header />
    <div class="main">
      <the-menu />
      <the-content />
    </div>
</template>

<script>
import TheHeader from './layout/TheHeader.vue'
import TheMenu from './layout/TheMenu.vue'
import TheContent from './layout/TheContent.vue'

export default {
  name: 'App',
  components: {
    TheHeader, TheMenu, TheContent,
  },
  data() {
    return {
      nameButton: "Thêm mới",
    }
  },
}
</script>

<style>
@import url(./css/main.css);
</style>

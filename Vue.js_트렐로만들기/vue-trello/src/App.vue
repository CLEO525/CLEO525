<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/NavbarPage.vue"

export default {
  name: 'app',
  components: { Navbar },
  data(){
    return {

    }
  }
}
</script>

<style>

</style>

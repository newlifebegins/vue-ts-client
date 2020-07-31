<template>
    <div id="app">
        <!-- <router-view /> -->
        <Home></Home>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "@/views/Home.vue";
@Component({
    components: {
        Home
    }
})
export default class App extends Vue {}
</script>
<style lang="scss">
@import "@/assets/style/reset.scss";
#app {
    width: 100%;
    height: 100%;
}
</style>

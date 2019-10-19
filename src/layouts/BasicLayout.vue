<template>
    <div id="basicLayout" class="basic-layout-wrapper">
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
@Component({
    components: {}
})
export default class BasicLayout extends Vue {}
</script>

<style lang="scss" scoped>
.basic-layout-wrapper {
    height: 100%;
    .container {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
    }
}
</style>

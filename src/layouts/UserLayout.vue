<template>
    <div id="userLayout" class="user-layout-wrapper">
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
export default class UserLayout extends Vue {}
</script>

<style lang="scss" scoped>
.user-layout-wrapper {
    height: 100%;
    .container {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
    }
}
</style>

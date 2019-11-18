<template>
    <div class="login">
        登录
        <!-- <UserLayout>
            <el-form slot="formContainer">
                <h1 class="title">登录</h1>
            </el-form>
        </UserLayout>-->
    </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue, Provide } from "vue-property-decorator";
// import UserLayout from "../../../layouts/UserLayout.vue";
@Component({
    components: {}
})
export default class Login extends Vue {
    @Provide() form: {
        username: String;
        password: String;
        autoLogin: boolean;
    } = {
        username: "",
        password: "",
        autoLogin: true // 是否自动登录
    };
}
</script>
<style lang="scss" scoped>
.login {
    background: #ff4081;
}
</style>

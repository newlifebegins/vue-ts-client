<template>
    <div class="login">
        <el-form
            slot="form-container"
            :model="form"
            :rules="rules"
            ref="ruleForm"
            status-icon
            class="rule-form"
        >
            <h1 class="title">登录</h1>
            <el-form-item label="用户名" prop="username">
                <el-input type="text" v-model="form.username" autocomplete="off" placeholder="用户名">
                    <i slot="prefix" class="el-icon-s-custom"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input
                    type="password"
                    v-model="form.password"
                    autocomplete="off"
                    placeholder="密码"
                >
                    <i slot="prefix" class="el-icon-view"></i>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button
                    type="primary"
                    @click.native.prevent="submitForm()"
                    @keyup.enter="submitForm()"
                >登录</el-button>
            </el-form-item>
            <el-form-item>
                <el-checkbox v-model="form.autoLogin" :checked="form.autoLogin">7天内自动登录</el-checkbox>
                <el-button
                    type="text"
                    class="forget"
                    @click="$router.push({name: 'forgetpassword'})"
                >忘记密码？</el-button>
            </el-form-item>
            <el-form-item>
                <p>
                    没有账号
                    <router-link to="register">点击注册</router-link>
                </p>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue, Provide } from "vue-property-decorator";
import Layout from "./Index.vue";
@Component({
    components: { Layout }
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

    @Provide() rules = {
        username: [
            { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
    };

    submitForm(): void {
        (this.$refs["ruleForm"] as any).validate((valid: boolean) => {
            if(valid) {
                console.log('验证通过')
            }
        });
    }
}
</script>
<style lang="scss" scoped>
.login {
    height: 100%;
    .title {
        font-size: 24px;
        font-weight: 600;
        color: #fff;
        text-align: center;
        padding: 10px 0;
        letter-spacing: 3px;
        margin-bottom: 20px;
    }
    .rule-form {
        width: 300px;
        margin: 0 auto;
        position: relative;
        top: 50vh;
        transform: translateY(-50%);
        .el-button {
            width: 100%;
        }
        .forget {
            width: auto;
            float: right;
        }
    }
}
</style>

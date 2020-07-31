<template>
    <div class="home">
        <UIButton
            @click="onClick"
            :xsmall="xsmall"
            :small="small"
            :large="large"
            :xlarge="xlarge"
            :tile="tile"
            :rounded="rounded"
            :circle="circle"
            :disabled="disabled"
            color="red"
        >点我呀</UIButton>
        <div class="btn-group">
            <UIButton class="btn" @click="resize('xsmall')">xsmall</UIButton>
            <UIButton class="btn" @click="resize('small')">small</UIButton>
            <UIButton class="btn" @click="resize('normal')">normal</UIButton>
            <UIButton class="btn" @click="resize('large')">large</UIButton>
            <UIButton class="btn" @click="resize('xlarge')">xlarge</UIButton>
        </div>
        <div class="btn-group">
            <UIButton class="btn" @click="changeRadius('tile')">tile</UIButton>
            <UIButton class="btn" @click="changeRadius('normal')">normal</UIButton>
            <UIButton class="btn" @click="changeRadius('rounded')">rounded</UIButton>
            <UIButton class="btn" @click="changeRadius('circle')">circle</UIButton>
        </div>
        <div class="btn-group">
            <UIButton class="btn" @click="changeDisabled">disabled</UIButton>
        </div>
    </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import UIButton from "@/components/UIKit/UIButton.vue";
@Component({
    components: {
        UIButton
    }
})
export default class Home extends Vue {
    private xsmall: boolean = false;
    private small: boolean = false;
    private large: boolean = false;
    private xlarge: boolean = false;
    private tile: boolean = false;
    private rounded: boolean = false;
    private circle: boolean = false;
    private disabled: boolean = false;

    private onClick(event: MouseEvent) {
        console.log(event);
    }

    private resize(name: string) {
        switch (name) {
            case "xsmall":
                this.xsmall = true;
                this.small = false;
                this.large = false;
                this.xlarge = false;
                break;
            case "small":
                this.xsmall = false;
                this.small = true;
                this.large = false;
                this.xlarge = false;
                break;
            case "large":
                this.xsmall = false;
                this.small = false;
                this.large = true;
                this.xlarge = false;
                break;
            case "xlarge":
                this.xsmall = false;
                this.small = false;
                this.large = false;
                this.xlarge = true;
                break;
            case "normal":
                this.xsmall = false;
                this.small = false;
                this.large = false;
                this.xlarge = false;
                break;
            default:
                this.xsmall = false;
                this.small = false;
                this.large = false;
                this.xlarge = false;
                break;
        }
    }

    private changeRadius(name: string) {
        switch (name) {
            case "tile":
                this.tile = true;
                this.rounded = false;
                this.circle = false;
                break;
            case "normal":
                this.tile = false;
                this.rounded = false;
                this.circle = false;
                break;
            case "rounded":
                this.tile = false;
                this.rounded = true;
                this.circle = false;
                break;
            case "circle":
                this.tile = false;
                this.rounded = false;
                this.circle = true;
                break;
            default:
                this.tile = false;
                this.rounded = false;
                this.circle = false;
                break;
        }
    }

    private changeDisabled() {
        this.disabled = !this.disabled;
    }
}
</script>
<style lang="scss" scoped>
.home {
    text-align: center;
    padding: 40px;
    .btn-group {
        padding: 20px;
        .btn {
            margin: 0 10px;
        }
    }
}
</style>

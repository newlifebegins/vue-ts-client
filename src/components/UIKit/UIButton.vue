<template>
    <!-- <button class="ui-btn" v-on="$listeners">Button</button> -->
    <button
        class="ui-btn"
        @click="onClickBtn"
        :class="{'ui-btn-xsmall':xsmall,'ui-btn-small':small,'ui-btn-large':large,'ui-btn-xlarge':xlarge,'ui-btn-tile':tile,'ui-btn-rounded':rounded,'ui-btn-circle':circle,'ui-btn-disabled':disabled}"
        :style="`--color-tint: ${TintColor}`"
    >
        <slot>Button</slot>
    </button>
</template>


<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";

@Component
export default class UIButton extends Vue {
    @Prop(Boolean)
    private xsmall: boolean | undefined;

    @Prop(Boolean)
    private small: boolean | undefined;

    @Prop(Boolean)
    private large: boolean | undefined;

    @Prop(Boolean)
    private xlarge: boolean | undefined;

    @Prop(Boolean)
    private tile: boolean | undefined;

    @Prop(Boolean)
    private rounded: boolean | undefined;

    @Prop(Boolean)
    private circle: boolean | undefined;

    @Prop(Boolean)
    private disabled: boolean | undefined;

    @Prop(String)
    private color: string | undefined;

    @Emit("click")
    private emitClickEvent(event: MouseEvent) {}

    private get TintColor() {
        if (this.color) {
            return this.color;
        } else {
            return "#2d8cf0";
        }
    }

    private onClickBtn(event: MouseEvent) {
        if (!this.disabled) {
            this.emitClickEvent(event);
        }
    }
}
</script>


<style lang="scss" scoped>
@mixin resize($minWidth, $height, $paddingLR, $fontSize) {
    min-width: $minWidth;
    height: $height;
    padding: 0 $paddingLR;
    font-size: $fontSize;
    &.ui-btn-rounded,
    &.ui-btn-circle {
        border-radius: $height;
    }
    &.ui-btn-circle {
        width: $height;
        min-width: 0;
        padding: 0;
    }
}
.ui-btn {
    border: none;
    border-radius: 4px;
    outline: none;
    font-weight: 500;
    letter-spacing: 0.09em;
    background-color: var(--color-tint);
    color: #17233d;
    cursor: pointer;
    user-select: none;
    @include resize(64px, 36px, 16px, 0.875rem);
    &:hover {
        filter: brightness(120%);
    }
    &:active {
        filter: brightness(80%);
    }
    &.ui-btn-xsmall {
        @include resize(36px, 20px, 9px, 0.625rem);
    }
    &.ui-btn-small {
        @include resize(50px, 28px, 12px, 0.75rem);
    }
    &.ui-btn-large {
        @include resize(78px, 44px, 19px, 0.875rem);
    }
    &.ui-btn-xlarge {
        @include resize(92px, 52px, 23px, 1rem);
    }
    &.ui-btn-tile {
        border-radius: 0;
    }
    &.ui-btn-disabled {
        background-color: #f5f5f5;
        color: #c5c8ce;
        cursor: not-allowed;
    }
}
</style>
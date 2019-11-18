<template>
    <div class="layout">
        <slot name="form-container"></slot>
    </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
@Component({
    components: {}
})
export default class Layout extends Vue {}
</script>
<style lang="scss" scoped>
.layout {
    height: 100%;
}
</style>

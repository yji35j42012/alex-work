<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <button type="button" class="btn btn-primary">Primary</button>
    {{ name }}
</template>

<script>
export default {
    data() {
        return {
            name: process.env.VUE_APP_NAME,
        };
    },
};
</script>

<style lang="scss">
@import "bootstrap";
</style>

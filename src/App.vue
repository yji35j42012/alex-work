<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
    <router-view />
	<button type="button" class="btn btn-primary">Primary</button>
</template>

<style lang="scss">
@import 'bootstrap';
</style>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about"
                            >About</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link"
                            :to="{ name: '新增頁面' }"
                        >
                            新增頁面
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="conteiner">
        <router-view></router-view>
    </div>
    <router-link to="/newPage/routerNav">/newPage/routerNav</router-link>
    {{name}}
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
body{
    padding-top: 80px;
}
.navbar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 55px;
    z-index: 10;
}
.conteiner{
    position: relative;
    height: 1000px;
}
</style>

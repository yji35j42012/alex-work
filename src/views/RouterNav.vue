<template>
    <button type="button" @click="getRoute">getRoute</button>
    <button type="button" @click="push">Push</button>
    <button type="button" @click="replace">Replace</button>
    <button type="button" @click="go">Go</button>
    <hr />
    <button type="button" @click="addRoute">新增路由</button>
</template>


<script>
export default {
    methods: {
        push() {
            // push 有包含歷史紀錄
            // this.$router.push('/newpage/dynamicRouter/9077b580080780ae')
            this.$router.push({
                name: "About",
            });
        },
        replace() {
            // replace 沒有包含歷史紀錄
            this.$router.replace({
                name: "About",
            });
        },
        go() {
            // go 操作歷史紀錄，可帶正數或負數，正數往下一頁，負數往上一頁
            this.$router.go(-1);
        },
        getRoute() {
            // 取得路由資訊
            // console.log(this.$route);
            // 呼叫路由方法
            // console.log(this.$router);
        },
        addRoute() {
            this.$router.addRoute({
                path: "/newabout",
                name: "newAbout",
                component: () =>
                    import(
                        "./About.vue"
                    ),
            });
        },
    },
};
</script>
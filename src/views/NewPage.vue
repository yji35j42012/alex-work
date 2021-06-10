<template>
    <div class="row">
        <div class="col-4">
            <div class="list-group">
                <router-link
                    class="list-group-item list-group-item-action"
                    to="/newpage/a"
                >
                    元件A
                </router-link>
                <router-link
                    class="list-group-item list-group-item-action"
                    to="/newpage/b"
                >
                    元件B
                </router-link>
                <router-link
                    class="list-group-item list-group-item-action"
                    to="/newpage/namedView/c2a"
                >
                    命名路由 c2a
                </router-link>
                <router-link
                    class="list-group-item list-group-item-action"
                    to="/newpage/namedView/a2b"
                >
                    命名路由 a2b
                </router-link>
                <router-link
                    class="list-group-item list-group-item-action"
                    to="/newpage/dynamicRouter/9077b580080780ae"
                >
                    動態路由($route)
                </router-link>
                <router-link
                    class="list-group-item list-group-item-action"
                    to="/newpage/dynamicRouterByProps/9077b580080780ae"
                >
                    動態路由($props)
                </router-link>
                <router-link
                    class="list-group-item list-group-item-action"
                    to="/newpage/RouterNav"
                >
                    路由導覽
                </router-link>
            </div>
        </div>
        <div class="col-8">
            <router-view></router-view>
        </div>
    </div>
</template>
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/newpage",
        name: "新增頁面",
        component: () => import("../views/NewPage.vue"),
        children: [
            {
                path: "a",
                component: () => import("../views/ComponentA.vue"),
            },
            {
                path: "b",
                component: () => import("../views/ComponentB.vue"),
            },
            {
                path: "dynamicRouter/:id",
                component: () => import("../views/DynamicRouter"),
            },
            {
                path: "dynamicRouterByProps/:id",
                component: () => import("../views/DynamicRouterByProps"),
                props: (route) => {
                    console.log("route", route);
                    return {
                        id: route.params.id,
                    };
                },
            },
            {
                path: "routerNav",
                component: () => import("../views/RouterNav"),
                props: (route) => {
                    console.log("route", route);
                    return {
                        id: route.params.id,
                    };
                },
            },
            {
                path: "namedView",
                component: () => import("../views/NamedView.vue"),
                children: [
                    {
                        path: "c2a",
                        components: {
                            left: () => import("../views/ComponentC.vue"),
                            right: () => import("../views/ComponentA.vue"),
                        },
                    },
                    {
                        path: "a2b",
                        components: {
                            left: () => import("../views/ComponentA.vue"),
                            right: () => import("../views/ComponentB.vue"),
                        },
                    },
                ],
            },
        ],
    },
    // 404頁面
    {
        path: "/:pathMatch(.*)*",
        component: () => import("../views/NotFound.vue"),
    },
    // 重新導向
    {
        path: "/newPage/:pathMatch(.*)*",
        redirect: {
            name: "Home",
        },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: "active",
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition);
        if (to.fullPath.match("newPage")) {
            return {
                top: 0,
            };
        }
    },
});

export default router;

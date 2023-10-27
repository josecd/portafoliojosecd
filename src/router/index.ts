import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // linkActiveClass: "active",
    routes: [
        {
            path: "/",
            name: "inicio",
            component: () => import("../components/ProjectSkeleton.vue"),
        },
        {
            path: "/detalleProfucto/:id",
            name: "detalleProfucto",
            component: () => import("../components/DetailProject.vue"),
        },

        // {
        //     path: "/:pathMatch(.*)*",
        //     name: "NotFound",
        //     component: () => import("../views/NotFoundView.vue"),
        // },
    ],
});

export default router;

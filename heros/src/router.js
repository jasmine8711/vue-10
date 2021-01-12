import { createWebHistory, createRouter } from "vue-router";
import Heros from "./components/Heros.vue";
import Calendar from "./components/Calendar.vue";
import Home from "./components/Home.vue";
import MarkDown from "./components/MarkDown.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/markdown",
        name: "markDown",
        component: MarkDown
    },
    {
        path: "/heros",
        name: "heros",
        component: Heros,
    },
    {
        path: "/calendar",
        name: "calendar",
        component: Calendar,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

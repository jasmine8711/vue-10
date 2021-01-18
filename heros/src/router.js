import { createWebHistory, createRouter } from "vue-router";
import Heros from "./components/Heros.vue";
import Calendar from "./components/Calendar.vue";
import Home from "./components/Home.vue";
import MarkDown from "./components/MarkDown.vue";
import Slider from "./components/Slider.vue";
import Calculator from "./components/Calculator.vue";
import ReuseableModal from "./components/ReuseableModal.vue";
import Chat from "./components/Chat.vue";

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
    {
        path: "/slider",
        name: "slider",
        component: Slider,
    },
    {
        path: "/calculator",
        name: "calculator",
        component: Calculator,
    },
    {
        path: "/resuseable-modal",
        name: "resuseable-modal",
        component: ReuseableModal,
    },
    {
        path: "/chat",
        name: "chat",
        component: Chat,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

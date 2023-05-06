import { createRouter, createWebHistory} from "vue-router"

import Dashboard from "../views/Dashboard.vue"

import EmulationTitle from "../views/category/EmulationTitle.vue"
import EmulationDetail from "../views/category/EmulationDetail.vue"
import ReportHome from "../views/report/ReportHome.vue"

import MovementHome from "../views/movement/MovementHome.vue"
import RewardHome from "../views/reward/RewardHome.vue"
import DecisionHome  from "../views/decision/DecisionHome.vue"
import ProfileHome from "../views/profile/ProfileHome.vue"
import SearchHome from "../views/search/SearchHome.vue"

import NotFound from "../views/404Page.vue"

const routes = [
    {
        path: "/",
        name: "EmulationTitleRouter",
        component: EmulationTitle,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/movement",
        name: "MovementHome",
        component: MovementHome,
    },
    {
        path: "/reward",
        name: "RewardHome",
        component: RewardHome,
    },
    {
        path: "/decision",
        name: "DecisionHome",
        component: DecisionHome,
    },
    {
        path: "/profile",
        name: "ProfileHome",
        component: ProfileHome,
    },
    {
        path: "/search-home",
        name: "SearchHome",
        component: SearchHome,
    },
    {
        path: "/emulation-title",
        name: "EmulationTitleRouter",
        component: EmulationTitle,
        children: [
            { path: ":id",
              name: "EmulationDetailRouter",
              components: {default: EmulationTitle, EmulationRouterView: EmulationDetail},
              props: true,
            },
            { path: "create",
              name: "EmulationCreateRouter",
              components: {default: EmulationTitle, EmulationRouterView: EmulationDetail}
            }
        ]
    },
    {
        path: "/report",
        name: "ReportHomeRouter",
        component: ReportHome,
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFound,
    },
    
];

//Khởi tạo router
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})


export default router;

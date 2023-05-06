<template>
    <div class="navbar">
        <div class="container">
            <div class="content">
                <div class="menu">
                    <!-- <li v-for="menuItem in menuItems" :key="menuItem.id" class="item menu-item-admin" :class="menuItem.class" :to="menuItem.toLink" >
                        <span>
                            {{ menuItem.name }}
                            <div v-if="menuItem.submenu" class="arrow-right"></div>
                        </span>
                    </li> -->
                    <router-link v-for="menuItem in menuItems" :key="menuItem.id" class="item menu-item-admin"
                        :class="menuItem.class" :to="menuItem.toLink" exact active-class="active"
                        exact-active-class="active">
                        <span>
                            {{ menuItem.name }}
                            <div v-if="menuItem.submenu" class="arrow-right"></div>
                        </span>
                    </router-link>
                </div>
                <div class="m-setting">
                    <router-link class="item menu-item-admin category" to="/emulation-title" exact active-class="active"
                        exact-active-class="active" @click="reloadData">
                        <span>
                            Danh mục
                            <div class="arrow-right"></div>
                        </span>
                    </router-link>
                    <router-link class="item menu-item-admin setting" to="/">
                        <span>
                            Thiết lập
                            <div class="arrow-right"></div>
                        </span>
                    </router-link>
                </div>
                <div class="m-hd">
                    <li class="item menu-item-admin guide">
                        <span>
                            Hướng dẫn
                            <div class="arrow-right"></div>
                        </span>
                    </li>
                </div>
            </div>

            <div class="toggle-button">
                <span class="toggle-title">Thu gọn</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheMenu",
    data() {
        return {
            menuItems: [
                {
                    id: 1,
                    name: "Tổng quan",
                    class: "dashboard",
                    toLink: "/",
                },
                {
                    id: 2,
                    name: "Thi đua",
                    class: "movement",
                    submenu: true,
                    toLink: "/movement",
                },
                {
                    id: 3,
                    name: "Khen thưởng",
                    class: "reward",
                    submenu: true,
                    toLink: "/reward",
                },
                {
                    id: 4,
                    name: "Quyết định",
                    class: "decision",
                    submenu: true,
                    toLink: "/decision",
                },
                {
                    id: 5,
                    name: "Hồ sơ",
                    class: "profile",
                    submenu: true,
                    toLink: "/profile",
                },
                {
                    id: 6,
                    name: "Tra cứu",
                    class: "search",
                    submenu: true,
                    toLink: "/search-home",
                },
                {
                    id: 7,
                    name: "Báo cáo",
                    class: "report",
                    toLink: "/report",
                },
            ],
        }
    },
    methods: {
        reloadData() {
            console.log(this.loadData());
            this.loadData();
        },
        loadData() {
            // // lấy dữ liệu
            // this.$ngocaxios.get("http://localhost:3000/emulationTitles")
            //     .then((res) => {
            //         this.emulationList = res.data;
            //     })
            //     .catch((res) => {
            //         console.log(res);
            //     });
        }
    },
}
</script>

<style scoped>
@import url(../css/layouts/navbar.css);
@import url(../css/components/contextmenu.css);
</style>
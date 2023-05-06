<template>
    <div class="m-page-header">
        <div class="m-page-tittle">Danh hiệu thi đua</div>
    </div>
    <div class="m-page-toolbar">
        <div class="left-toolbar">
            <m-input-search />
            <emulation-filter />
        </div>
        <div class="right-toolbar">
            <m-button :text="nameButton" @click="btnAddOnClick"/>
            <!-- <button class="btn-reload">
                <img src="../../assets/icon/refresh.png" alt="">
            </button> -->
            <!-- <emulation-detail v-if="showDetailForm" @onClose="onCloseDetail" :emulationItem="emulationSelected"></emulation-detail> -->
            <router-view name="EmulationRouterView"></router-view>
        </div>
    </div>
    <div class="m-page-grid">
        <!-- <emulation-list @onSelectedEmulation="onSelectedEmulation" /> -->
        <emulation-list ></emulation-list>
    </div>
</template>

<script>
import MButton from '@/components/MButton.vue';
import MInputSearch from '@/components/MInputSearch.vue';
import EmulationFilter from './EmulationFilter.vue';
// import EmulationDetail from './EmulationDetail.vue';
import EmulationList from './EmulationList.vue';

export default {
    name: "EmulationTitle",
    components: {
        MButton, MInputSearch, EmulationFilter, EmulationList,
    },
    created() {
        this.$ngocemitter.on("onSelectedEmulationEmitter", this.onSelectedEmulation);
    },
    beforeUnmount() {
        this.$ngocemitter.off("onSelectedEmulationEmitter"); //off đi khi đã dùng xong
    },
    data() {
        return {
            nameButton: "Thêm danh hiệu",
            showDetailForm: false,
            emulationSelected: {},
        }
    },
    
    methods: {
        /**
         * hiển thị form thêm danh hiệu khi ấn nút Add
         * Author: NXNgoc
         */
        btnAddOnClick() {
            // this.showDetailForm = true;
            this.$router.push("/emulation-title/create");
            this.emulationSelected = {};
        },
         /**
         * đóng form thêm danh hiệu khi ấn nút Hủy/icon close
         * Author: NXNgoc
         */
        onCloseDetail() {
            this.showDetailForm = false;
        },
        onSelectedEmulation(emulation) {
            //hiển thị form thêm danh hiệu/ form detail
            this.showDetailForm = true;
            //truyền data cho form chi tiết
            this.emulationSelected = emulation;
        },
    },
}
</script>

<style>
@import url(../../css/page/emulationTitle.css);
@import url(../../css/components/filterbox.css);
.right-toolbar {
    display: flex;
    align-items: center;
}
.btn-reload {
    margin-left: 8px;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>
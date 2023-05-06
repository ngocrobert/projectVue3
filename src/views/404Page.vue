<template>
    <div class="page-404">
        <div 
            class="items-center">
            <img src="https://cegovapp.misacdn.net/cegov/img/bg_Error404.8c4e87ee.svg"
                class="">
            <h1  class="page-404--title"> OPP! Không tìm thấy trang. </h1>
            <p  class="text-inverse"> Đường dẫn đang truy cập đã bị thay đổi hoặc không tồn
                tại </p>
            <button class="m-btn-404" @click="goHome"><!---->
                <div  class="text"> Quay lại trang chủ </div><!---->
            </button>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Page404",
    methods: {
        gohome() {
           this.$router.push('/emulation-title');
        }
    },
}
</script>

<style>
.page-404 {
    height: 100vh;
    display: flex;
    background: #fff;
}

.page-404 .items-center {
    height: 50vh;
    width: 50%;
    margin: auto;
    text-align: center;
}

.page-404--title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
}

.page-404 .text-inverse {
    margin-bottom: 30px;
}
.m-btn-404 {
    padding: 0;
    outline: none;
    color: #fff;
    background: #2979ff;
    min-width: 80px;
    margin-left: 10px;
    margin-right: 10px!important;
    min-height: 36px;
    border: none;
    box-shadow: none;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    white-space: nowrap;
    align-items: center;
    justify-items: center;
    justify-content: center;
}

.m-btn-404:hover {
    background: #1a73e8;
}

.m-btn-404:active {
    background: #0062cc;
}

.m-btn-404 .text {
    padding-right: 16px;
    display: inline-block;
    white-space: nowrap;
    padding: 0 16px;
    font-weight: 400;
    font-size: 14px;
}
</style>
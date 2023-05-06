<template>
    <div class="header">
        <div class="header-left">
            <div class="sibar"></div>
            <div class="logo">
                <a href="#" class="nav-logo"></a>
                <a href="#" class="logo-title">MISA CeGov</a>
            </div>
        </div>
        <div class="header-right">
            <div class="right-action notify margin-header-right"></div>
            <div class="right-action help margin-header-right"></div>
            <div class="right-action document-help margin-header-right"></div>
            <div class="right-action setting margin-header-right"></div>
            <div class="user-avatar">
                <img src="../assets/icon/avatar-default.png" alt="" class="avatar">
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "TheHeader",
}
</script>

<style scoped>
@import url(../css/layouts/header.css);
</style>
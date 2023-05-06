<template>
    <div class="m-input">
        <!-- <div class="border m-error"> -->
        <!-- <input type="text" name="input" class="border m-error" placeholder="Nhap gi do"> -->
        <input type="text" name="input" class="m-input-edit" placeholder="Nhập tên danh hiệu thi đua" id="nameCompetition"
            tabindex="1">
        <!-- </div> -->
        <div class="error-text" style="display: none;">
            Tên danh hiệu thi đua không được để trống.
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url(../css/components/input.css);
</style>
<template>
    <div class="row-input">
        <label for="">
            <div class="input-icon">
                <input type="text" name="input" class="m-input" placeholder="Nhập mã, hoặc tên danh hiệu...">
                <div class="icon24 input-search"></div>
                <!-- <i class="input-search fas fa-search" style="color: #666666;"></i> -->
            </div>
        </label>
    </div>
</template>

<script>
export default {
    name: "MInputSearch",

}
</script>

<style>
@import url(../css/components/input.css);
.icon24.input-search {
    height: 24px;
    width: 24px;
    position: absolute;
}

.input-search {
    margin-right: 6px;
    margin-top: 6px;
    cursor: pointer;
    background-position: -289px -24px;
}

.icon24::before {
    content: "";
    position: absolute;
    background: transparent url(../assets/icon/sprites.06b14dc5.svg) no-repeat;
    height: 24px;
    width: 24px;
    left: 0;
    top: 0;
    
}
</style>
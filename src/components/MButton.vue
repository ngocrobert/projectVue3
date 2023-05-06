<template>
    <!-- <div class="row">
        <label for="">1. Nut Chinh</label>
        <button class="button">
            <div class="button__text">Them</div>
        </button>
    </div> -->
    <div class="row">
        <button class="button">
            <div class="button__icon"><i class="fas fa-plus"></i></div>
            <div class="button__text">{{ text }}</div>
        </button>
    </div>
</template>

<script>
export default {
    name: "MButton",
    props: ["text"],
}
</script>

<style>
.button {
    display: flex;
    /* height: var(--height-primary); */
    border-radius: var(--border-radius);
    padding: 8px 20px;
    align-items: center;
    justify-content: center;
    /* column-gap: 4px; */
    /* line-height: 36px; */
    min-width: 80px;
    height: 36px;
    box-sizing: border-box;
    background: var(--color-primary);
    border: 1px solid var(--border-color);
    margin: 8px 0;
}

.button:hover {
    background-color: var(--border-color-hover);
    cursor: pointer;
}

.button:active {
    background-color: var(--color-active);
    cursor: pointer;
}

.button__icon {
    display: flex;
    width: 20px;
    height: 20px;
    color: #fff;
    align-items: center;
    box-sizing: border-box;
    padding-left: 12px;
    /* background-color: black; */
}

.button__text {
    /* padding: 8px 19px; */
    font-size: 14px;
    color: #fff;
    padding-left: 8px;
    padding-right: 16px;
    /* line-height: 36px; */
}

.combo-button {
    width: 134px;
    box-sizing: border-box;
}

.button__combo {
    display: flex;
    height: 36px;
    border-left: 2px solid #fff;
    color: #fff;
    align-items: center;
    background: #50B83C;
    box-sizing: border-box;
}

.button__combo:hover {
    background-color: #57C841;
    cursor: pointer;
}

/* .button .combo-icon {
    background-image: url(../../assets/icon/arrow-down.svg);
    background-repeat: no-repeat;
    background-position: center center;
    color: #fff;
} */

.button__combo .combo-icon {
    width: 16px;
    height: 16px;
    padding: 0 10px 0 12px;
    /* color: #fff; */
}

.button--red {
    background-color: red;
}

/* fix combo button 3.1 */
.row-combo {
    display: flex;
    width: 134px;
    height: 36px;
    align-items: center;
    box-sizing: border-box;
}

/* .row-combo:hover {
    background-color: #57C841;
    cursor:pointer;
} */

.row-combo .button {
    width: calc(100% - 40px);
    padding: 8px 12px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right-color: #fff;
    width: 94px;
}

.row-combo .button .button__text {
    /* padding-left: 4px; */
    padding-right: 16px;
}

.row-combo .button__combo {
    display: flex;
    width: 100%;
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    /* box-sizing: border-box; */
    background: #50B83C;
    border: 1px solid var(--border-color);
    border-left-color: #fff;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
}

.row-combo .button__combo i {
    width: 16px;
    height: 16px;

}

.row-combo .button:hover,
.button__combo:hover {
    background-color: #57C841;
    cursor: pointer;
}

.row-combo .button:active,
.button__combo:active {
    background-color: #067933;
    cursor: pointer;
}

/* update button */
.btn-normal {
    border: 1px solid #e0e0e0;
    color: #000;
    background: #fff;
}

.btn-normal .button__text {
    color: #000;
}

.btn-normal:hover {
    background: #f4f5f8;
}
</style>
<template>
   <div class="m-check-container">
        <input type="checkbox" :id="inputId" :tabindex="tab">
        <label :for="inputId" class="m-checkbox--text">{{ textCheckBox }}</label> 
    </div>
</template>

<script>
export default {
    name: "MCheckbox",
    props: {
        textCheckBox: {
            type: String,
        }, 
        inputId: {
            type: String,
            required: true,
        },
        tab: {
            type: Number,
            required: true,
        }
    },
}
</script>

<style scoped>
@import url(../css/components/checkbox.css);
</style>
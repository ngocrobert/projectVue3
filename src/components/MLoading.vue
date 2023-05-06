<template>
  <div class="loading">
    <div class="loading-wrapper">
        <div class="loading__icon"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.loading {
    position: fixed;
    display: grid;
    place-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f4f5f8;
    z-index: 12;
}

.loading-wrapper {
    width: 40px;
    height: 40px;
    /* background-color: #000; */
    border-radius: 50%;
    border: 4px solid transparent;
    border-top: 2px solid var(--color-primary);
    animation: spin .5s linear infinite;
    
}

@keyframes spin {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
}
</style>
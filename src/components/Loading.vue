<script setup>
    import LoadingIcon from './LoadingIcon.vue'
</script>

<template>
    <div class="loading-screen">
        <h2>Loading data...</h2>
        <LoadingIcon class="loading"/>
        
    </div>
</template>
<style scoped>
.loading-screen {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 10;
    background-color: var(--background);
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.loading{
    width: 200px;
    height: 100px;
}
</style>
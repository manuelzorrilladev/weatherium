<script setup>

import SmallCard from './SmallCard.vue'
import BigCard from './BigCard.vue'

import {cities} from '../utils/globalState'



const emit = defineEmits(["changeDay"])



const emitChangeDay = (day) => {
    emit("changeDay", day)
}




</script>

<template>
    <main>
        <SmallCard  />
        <div class="content">
            <BigCard />
        </div>
        <footer>
            <p>Made by <a href="https://github.com/manuelzorrilladev/">Manuel Zorrilla</a></p>
        </footer>
    </main>
</template>

<style scoped>
main {
    border: 1px solid black;
    width: 100%;
    background-color: var(--container);
    color: var(--text);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
}

footer {
    text-align: center;
    margin-top: 5px;
}
</style>    
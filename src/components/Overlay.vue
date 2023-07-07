<script setup>
import { ref, watch } from 'vue';
import getCitySearch from '../data/search'
import {cities} from '../utils/globalState'


const validator = ref(0)

const citySearch = ref('')
const searchBox = ref('')


watch(searchBox, async () => {
    if (searchBox.value.length >= 2) {
        citySearch.value = await getCitySearch(searchBox.value)
        validator.value = 1
    } else {
        validator.value = 0

    }
})

function deleteInput() {
    searchBox.value = ''
}

</script>



<template>
    <div class="overlay">
        <div class="content">
            <img src="../assets/svg/clear-day.svg" alt="">

            <header>

                <h1 class="title">Welcome to Weatherium</h1>
                <h3 class="header">Search for your current city</h3>
                <h3 class="header">Or search for a specific city around the world!!</h3>

            </header>

            <div class="form">

                <input v-model.trim="searchBox" type="text" class="main-input" placeholder="Search City...">

                <button>
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                    Search
                </button>
            </div>

            <div class="results-box">
                <div v-if="validator == 1 && citySearch.length == 0" class="no-results">

                    <h1>No city found :(</h1>
                    <button @click="deleteInput()">Search again</button>

                </div>
                <div 
                    v-else 
                    v-for="(item, index) in citySearch" 
                    :key="index" 
                    class="result-item"
                     @click="cities.value.push(`${item.name}, ${item.country} `)"
                >
                    <h3>{{ item.name }}, {{ item.country }}</h3>
                    <font-awesome-icon :icon="['fas', 'play']" />

                </div>
            </div>

        </div>
        <div class="search-box">

        </div>
    </div>
</template>


<style scoped>
.overlay {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 8;
    background-color: var(--background);
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
}

header {
    text-align: center;
    color: var(--text);
}

img {
    width: 100px;
}

input[type=text] {
    height: 35px;
    padding: 10px;
    width: 28vw;
    background-color: var(--secondary-background);
    color: var(--text);
    border: none;

}

input[type=text]::placeholder {
    color: var(--text);
}

button {
    background-color: var(--primary-button);
    color: var(--text);
    cursor: pointer;
    height: 55px;
    padding: 0 10px;
    border: none;
    transition: 0.3s;
}

button:hover {
    background-color: var(--secondary-button);

}

.results-box {
    width: 40%;
    color: var(--text);
    transition: 0.3s;

}

.result-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    transition: 0.3s;
    cursor: pointer;
}

.result-item:hover {
    background-color: var(--secondary-background);
}

.no-results {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
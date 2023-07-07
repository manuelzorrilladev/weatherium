<script setup>
import { ref, watch } from 'vue';
import MainBar from './MainBar.vue'

import { cities, getCity,loadingStatus } from '../utils/globalState'
import getCitySearch from '../data/search'


let active = ref('hide')
const searchBox = ref("")
const validator = ref(0)
const citySearch = ref('')



function deleteInput() {
    searchBox.value = ''
}
const toggleNavbar = () => {
    if (active.value == 'hide') {
        active.value = 'show'
    } else {
        active.value = 'hide'
    }
}


watch(searchBox, async () => {
    if (searchBox.value.length >= 2) {
        citySearch.value = await getCitySearch(searchBox.value)
        validator.value = 1
    } else {
        validator.value = 0

    }
})

function changeCity(index) {
    if(getCity.value != index){
        getCity.value = index
        loadingStatus.value =0
    }
}

function addCity(item){
    cities.value.push(item.name)

    getCity.value=cities.value.length-1
    
    loadingStatus.value =0
    deleteInput()
    toggleNavbar()
}






</script>


<template>
    <nav>
        <div class="search" :class="active">

            <font-awesome-icon :icon="['fas', 'close']" class="close" @click="toggleNavbar" />

            <div class="container">
                <div class="search-form">
                    <input v-model.trim="searchBox" type="text" placeholder="Search city">
                    <button class="search-button">
                        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                        Search
                    </button>
                </div>

                <div v-if="validator == 1" class="search-menu">
                    <div 
                        v-for="(item, index) in citySearch" 
                        :key="index" 
                        class="search-item" 
                        @click="addCity(item)"
                        
                        
                    >
                        <p>{{ item.name }}, {{ item.country }}</p>
                        <font-awesome-icon :icon="['fas', 'play']" />
                    </div>

                </div>

                <div class="search-box ">
                    <div 
                        v-for="(item, index) in cities.value" 
                        :key="index" 
                        class="search-item"
                        @click="changeCity(index)">
                        <h2>{{ item }}</h2>
                        <font-awesome-icon :icon="['fas', 'play']" />
                    </div>
                    
                </div>

                
            </div>
        </div>
        <MainBar :toggle="active" @toggle-navbar="toggleNavbar" />

    </nav>
</template>

<style scoped>
.none {
    display: none !important;
}

nav {
    width: 25vw;
    height: 100vh;
    background-color: var(--background);
    color: var(--text);
}

.search {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: end;
    z-index: 5;
    width: 25vw;
    height: 100vh;
    background-color: var(--background);
    transition: 0.4s;
}

.close {
    margin: 15px;
    cursor: pointer;
    height: 35px;
    transition: 0.2s;

}

.close:hover {
    color: #b3b3b3;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.search-form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    height: 40px;
}

input[type=text] {
    height: 35px;
    padding: 5px;
    width: 15vw;
    background-color: var(--secondary-background);
    color: var(--text);
    border: none;

}

input[type=text]::placeholder {
    color: var(--text);
}

.search-button {
    background-color: var(--primary-button);
    color: var(--text);
    cursor: pointer;
    height: 45px;
    padding: 0 10px;
    border: none;
    transition: 0.3s;
}

.search-button:hover {
    background-color: var(--secondary-button);
}

.search-box {
    margin-top: 50px;
    overflow: hidden;
    position: absolute;
    transform: translateY(50px);
    z-index: 0;
}

.search-item {
    padding: 7px 15px 7px 7px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 275px;
    transition: 0.2s;
    margin: 1px 0px;
    cursor: pointer;
}

.search-item:hover {
    border-top: 1px inset #ffffff;
    border-bottom: 1px inset #ffffff;
}

.hide {
    transform: translateX(-26vw);
}

.search-menu {
    z-index: 3;
    background-color: var(--secondary-background);
    width: 22vw;
}


@media (max-width:800px) {
    nav{
        max-width: 100vw;
        width: 100vw;
        
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        min-height: 100vh;
    }
    .hide {
        transform: translateX(-540px);
    }
    .search{
        width: 100vw;
    }
    input[type=text]{
        width: 50vw;
    }
   
    
}



</style>    
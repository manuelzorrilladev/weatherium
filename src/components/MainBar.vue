<script setup>
// Imports
import { computed, watch} from 'vue';

import {day,cities,getCity} from '../utils/globalState'

import getDataForecast from '../data/forecast';
import dataIcons from '../data/icons.json'

// Defines
const { toggle } = defineProps(['toggle'])
const emit = defineEmits(["toggleNavbar"])

// Emit

const emitToggleNavbar = (toggle) => {
    emit("toggleNavbar", toggle)
}
// Data fetching

const actualHour = new Date().getHours()
let results = await getDataForecast(cities.value[getCity.value])


watch(getCity,async ()=>{
    results = await getDataForecast(cities.value[getCity.value])
})



let parsedResults = computed(()=>{
    return results.forecast.forecastday[day.value].hour[actualHour]
})

</script>


<template>
    <div class="main-bar">
       
        <button 
            class="toggle-navbar" 
            @click="emitToggleNavbar(toggle)"
            >

            Search for places
        </button>

        <img 
            :src="`./src/assets/svg/${dataIcons[parsedResults.condition.text]}`" 
            :alt="parsedResults.condition.text"
            >
        <div class="nav-info">
            <h1> {{ parsedResults.temp_c }}°</h1>
            <h2>{{ parsedResults.condition.text }}</h2>
            <div>

                <h4 class="date">
                    {{ results.forecast.forecastday[day.value].date }}
                </h4>
                <p class="city">
                    <font-awesome-icon :icon="['fas', 'location-dot']" />
                    {{ cities.value[getCity.value]  }}
                    
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.toggle-navbar {
    background-color: var(--primary-button);
    color: var(--text);
    padding: 5px 15px;
    margin: 15px;
    transition: 0.3s;
}
img{
    width: 200px;
    height: 200px;
}
.toggle-navbar:hover {
    background-color: var(--secondary-button);
}

.main-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25vw;

}


.nav-info {
    text-align: center;
}

.nav-info h1 {
    margin-top: 50px;
    font-size: 55px;
    margin-bottom: 20px;
}

.nav-info div {
    margin-top: 130px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

@media (max-width:800px){
    .nav-info div{
        height: 70px;
    }
    .toggle-navbar {
        width: 50vw;
        font-size: 20px;
    }
}
</style>
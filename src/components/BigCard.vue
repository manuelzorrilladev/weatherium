<script setup>
import {computed,watch} from 'vue'

import getDataForecast from '../data/forecast';
import {day,cities,getCity} from '../utils/globalState'




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
    <h2>{{cities.value[getCity.value]}}</h2>
    <h3>{{ results.forecast.forecastday[day.value].date }} highlights</h3>
    <div class="highlights">
        <div class="big-card">

            <!-- Wind Direction -->
            <h3 class="title">Wind Status</h3>
            <h1>
                {{parsedResults.wind_mph}}
                <span>mph</span>
            </h1>
            <font-awesome-icon :icon="['fas', 'location-arrow']" class="round" :class="parsedResults.wind_dir" />

        </div>
        <div class="big-card">

            <!-- Humidity -->
            <h3 class="title">Humidity Percentage</h3>
            <h1>
                {{parsedResults.humidity}}
                <span>%</span>
            </h1>
            <div class="progresion-bar">
                <div class="indicators">
                    <p>0%</p>
                    <p>50%</p>
                    <p>100%</p>
                </div>
                <span class="bar">
                    <span class="progress" :style="{width:parsedResults.humidity+'%'}"></span>
                </span>
            </div>

        </div>
        <div class="big-card">

            <!-- visibility indicator -->
            <h3 class="title">Visibility indicator</h3>
            <h1>
                {{parsedResults.vis_miles}}
                <span>miles</span>
            </h1>


        </div>
        <div class="big-card">

            <!-- Air Pressure -->
            <h3 class="title">Air Pressure</h3>
            <h1>
                {{parsedResults.pressure_mb}}
                <span>mb</span>
            </h1>


        </div>
    </div>
</template>

<style scoped>
.highlights {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    place-items: center;
}

.big-card {
    background-color: var(--background);
    height: 100px;
    width: 250px;
    margin: 5px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    transition: 0.2s;
}
.big-card:hover{
    box-shadow: 2px 1px 25px 0px rgba(175, 175, 175, 0.75);
}
.round{
    background-color: var(--secondary-background);
    padding: 7px;
    border-radius: 50%;
    transform: rotate(317deg);
}
.indicators{
    display: flex;
    justify-content: space-between;
    gap: 60px ;
}
.bar{
    width: 100%;
    height: 15px;
    margin-top: 5px;
    border-radius: 10px;
    display: block;
    background-color: #fff;
}
.progress{
    height: 15px;
    margin-top: 5px;
    border-radius: 10px;
    display: block;
    background-color:gold;
    transition: 0.4s;
}
.NNE{
    transform: rotate(0deg) !important;
    
}
.E{
    transform: rotate(45deg) !important;
}
.SE{
    transform: rotate(90deg) !important;

}
.S{
    transform: rotate(135deg) !important;

}
.SSW {
    transform: rotate(175deg) !important;

}
.W{
    transform: rotate(225deg) !important;

}
.NNW{
    transform: rotate(270deg) !important;

}


@media (max-width:800px){
    .highlights{
        display: flex !important;
        flex-direction: column;
    }
}
</style>
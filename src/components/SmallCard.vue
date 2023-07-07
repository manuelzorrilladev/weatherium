<script setup>
import { ref, watch } from 'vue';

import getDataForecast from '../data/forecast'
import dataIcons from '../data/icons.json'
import {day, cities,getCity} from '../utils/globalState'




let results = await getDataForecast(cities.value[getCity.value])
watch(getCity,async ()=>{
    results = await getDataForecast(cities.value[getCity.value])
})


</script>


<template>
    <div class="days-container">
        <div 
            v-for="(item, index) in results.forecast.forecastday" :key="index" class="small-card" @click="day.changeDay(index)"
            
            >
            <p class="title">{{item.date}}</p>
            
            <img :src="`./src/assets/svg/${dataIcons[item.day.condition.text]}`" alt="" class="frame">
            <div class="temperature">
                <p>{{item.day.mintemp_c}}°c</p>
                <p>{{item.day.maxtemp_c}}°c</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .days-container{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    .days-container div{
        cursor: pointer;
    }
    .small-card{
        width: 150px;
        height: 175px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px;
        background-color: var(--background);
        transition: 0.4s;

    }
    .small-card:hover{
        box-shadow: 2px 1px 25px 0px rgba(175, 175, 175, 0.75);
        cursor: pointer;
    }
    .small-card .frame{
        width: 125px;
    }
    .small-card .temperature{
        display: flex;
        justify-content: space-between;
        width: 75%;
    }

    @media (max-width:800px){
        .days-container{
            flex-wrap: wrap;
            padding-top: 20px;
        }


    }

</style>
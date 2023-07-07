import {reactive} from 'vue'

export const day = reactive({
    value:0,
    changeDay(value){
        day.value = value
      }
})
export const loadingStatus = reactive({
    value:0
})

export const cities = reactive({
    value:[],
    
})
export const getCity = reactive({
    value:0
})

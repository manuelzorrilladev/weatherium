// vue imports

import { createApp } from 'vue'

// FontAwesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faMagnifyingGlass, faClose,faPlay,faLocationDot,faLocationArrow} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

// project imports
import './style.css'
import App from './App.vue'

// ***************
library.add(
    faGithub,
    faMagnifyingGlass,
    faClose,
    faPlay,
    faLocationDot,
    faLocationArrow
)

// createApp(App).mount('#app')
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
<script setup>
// Component imports
import Navbar from './components/Navbar.vue'
import MainContent from './components/MainContent.vue'
import Loading from './components/Loading.vue'
import Overlay from './components/Overlay.vue'
import { cities, getCity, loadingStatus } from './utils/globalState'
import { ref, watch } from 'vue';


// *****
const cityValidator = ref(0)

watch(cities.value, () => {
  cityValidator.value = 1
})








</script>
<template>
  <Overlay v-if="cityValidator == 0" />
  <Loading v-if="cityValidator == 1 && loadingStatus.value < 3" />
  <div v-if="cityValidator == 1" class="main-container">
    <Suspense>
      <Navbar />
    </Suspense>
    <Suspense>
      <MainContent />
    </Suspense>

  </div>
</template>

<style scoped>
.main-container {
  max-height: 100vh;
  display: flex;
  width: 100vw;
}

.content {
  position: absolute;
}

@media (max-width:800px) {
  .main-container {
    flex-direction: column;
    max-height: 150vh;
   

  }
}
</style>
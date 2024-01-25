<template>
  <div id="app">
      <Countdown :date="170615000000"></Countdown>
  </div>
</template>

<script>
import Countdown from './components/count-down.vue';

export default {
    components: { Countdown },
}
</script>

<style>
#app{
    align-items: center;
    bottom: 0;
    background-color: #34495e;
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top:0;
}
</style>

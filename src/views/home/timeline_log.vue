<template>
  <v-timeline side="end">
    <v-timeline-item v-for="item in items" :key="item.id" :dot-color="item.color" size="small">
      <v-alert :color="item.color" :icon="item.icon" :value="true">
        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire
        principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
      </v-alert>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import 'animate.css';
import { projectLog } from '@/log_text/index';

const items = ref([
  {
    id: 1,
    color: 'info',
    icon: 'mdi-information',
  },
  {
    id: 2,
    color: 'error',
    icon: 'mdi-alert-circle',
  },
]);
</script>

<style lang="scss" scoped>
.timeline-container {
  background-color: red;
  height: 20000px;

  padding: 40px 0;

  .timeline-item {
    width: 100vw;
    padding: 0 10vw;
    height: 100px;
    position: relative;

    .circle {
      position: absolute;
      width: 15px;
      height: 15px;
      border: white 3px solid;
      border-radius: 50%;
    }
    .horizontal-line {
      position: absolute;
      background-color: white;
      width: 130px;
      height: 3px;
      top: 9px;
      left: calc(10vw + 21px);
    }

    .vertical-line {
      position: absolute;
      background-color: white;
      width: 3px;
      height: calc(100% - 19px);
      top: 19px;
      left: calc(10vw + 9px);
    }

    .date {
      color: rgba($color: #000, $alpha: 0.3);
      position: absolute;
      width: 200px;
      height: calc(100% - 19px);
      top: 19px;
      left: calc(10vw + 80px);
    }
  }
}
</style>

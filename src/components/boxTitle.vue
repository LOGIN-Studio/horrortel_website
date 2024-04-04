<template>
    <div class="box-title ta-l pl-1 mb-7">
      <span class="title ml-3">{{props.title}}</span>
    </div>
  </template>
  
  <script lang="ts" setup>
  import {defineProps} from "vue";
  
  let props = defineProps({
    title: {}
  })
  </script>
  
  <style lang="scss">
  .box-title {
    font-size: 28px;
    color: #afb2b6;
  
    .title {
      position: relative;
  
      &::after, &::before {
        height: 2px;
        content: ' ';
        position: absolute;
        bottom: -5px;
        width: 100%;
        right: 0;
        background: #afb2b6;
      }
  
      &::before {
        bottom: -10px;
        right: 5px;
        width: 60%;
      }
  
    }
  }
  </style>
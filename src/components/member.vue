<template>
  <div class="member">
    <img class="cover" :src="require('@/assets/image/team/' + props.memberInfo.cover)" alt="" />
    <div class="info">
      <div class="name">{{ props.memberInfo.name }}</div>
      <v-btn
        rounded="lg"
        size="x-small"
        variant="plain"
        icon="mdi mdi-email-outline"
        class="email-btn"
        @click="openNewWindow(props.memberInfo.email)"
      ></v-btn>
    </div>
  </div>
</template>
    
<script lang="ts" setup>
import { computed, defineProps, ref } from "vue";
import { MemberType } from "@/assets/constant/member_type";

const props = defineProps<{
  memberInfo: {
    type: MemberType;
    required: true;
  };
}>();

const openNewWindow = (email: string) => {
  window.open("mailto:" + email, "_blank");
};
</script>
    
<style lang="scss">
.member {
  position: relative;
  width: 300px;
  height: 140px;

  .cover {
    position: absolute;
    left: 0;
    top: 0;
    width: 84px;
    height: 84px;
    border-radius: 50%;
    border: 5px solid #857575;
    z-index: 1;
  }

  .info {
    left: 35px;
    top: 35px;
    position: absolute;
    width: 270px;
    height: 80px;
    background-color: rgb(68, 63, 64);
    display: inline-block;
    text-align: left;
    border-radius: 5px;

    .name {
      width: 150px;
      height: 30px;
      margin-top: 25px;
      background-color: #afb2b6;
      margin-left: 60px;
      text-align: left;
      display: inline-block;
      line-height: 30px;
      color: black;
      padding-left: 15px;
    }

    .email-btn {
      position: absolute;
      right: 10px;
      top: calc(50% - 16px);
      background-color: aliceblue;
    }
  }
}
</style>
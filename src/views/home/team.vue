<template>
  <div class="members">
    <box-title title="Members"></box-title>
    <div class="member-area div flex flex-row flex-wrap flex-evenly-center">
      <member-page
        :key="i"
        :member-info="member"
        v-for="(member, i) in projectMember"
      ></member-page>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MemberPage from "@/components/member.vue";
import { projectMember } from "@/assets/constant/member";
import BoxTitle from "@/components/boxTitle.vue";
</script>

<style lang="scss" scoped>
.members {
  padding: 40px 00 20px;
  background-color: #534c46;

  .member-area {
    margin: 0 80px;
  }
}
</style>
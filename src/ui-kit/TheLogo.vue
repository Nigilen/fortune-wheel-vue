<script setup lang="ts">
import zmLogo from './../assets/logo.svg';
</script>

<template>
  <img :src="zmLogo" alt="Логотип ZM" width="140" height="42" />
</template>

<style lang="scss">
  @media (width < 768px) {
    .logo {
      inline-size: 120px;
      block-size: 37px;
    }
  }
</style>
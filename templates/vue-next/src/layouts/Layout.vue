<template>
<div className="wrapper w-screen h-screen">
  <site-header />
  <site-nav />
  <router-view v-slot="{Component}" />
  <site-footer />
</div>
</template>

<script setup lang="ts">
import SiteHeader from '../components/Header.vue';
import SiteNav from '../components/Navigation.vue';
import SiteFooter from '../components/Footer.vue';
</script>

<style scoped lang="css"></style>

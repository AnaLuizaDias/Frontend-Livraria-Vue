<script setup>
import CabecarioComp from "@/components/CabecarioComp.vue";
import RodapeComp from "@/components/RodapeComp.vue";
</script>
<template>
  <CabecarioComp />
  <main>
    <RouterView />
  </main>
  <RodapeComp />
</template>

<style>
@import "@/assets/base.css";
@import "@/assets/style.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  height: 100vh;
  font-weight: normal;
}
header,
footer {
  background-color: rgb(126, 73, 126);
  color: white;
  height: 15%;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  padding-left: 2rem;
}
/*main {
  height: 140%;
}*/
</style>

<script setup>
import MenuComp from "@/components/MenuComp.vue";
</script>
<template>
  <header class="menu-superior">
    <div class="menu-esquerdo">
      <span class="principal">Magicbookstore</span>
    </div>
    <div class="menu-direito">
      <MenuComp />
    </div>
  </header>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Secular+One&display=swap");
a {
  color: white;
  font-family: "Secular One", sans-serif;
}
header span {
  padding: 0 20px;
  font-family: "Secular One", sans-serif;
}
.menu-superior {
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10%;
}
</style>

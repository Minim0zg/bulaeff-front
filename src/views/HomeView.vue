<script setup lang="ts">
import MainPageImage from '@/components/home-page/MainPageImage.vue'
import ProductListMainPage from '@/components/home-page/ProductListMainPage.vue'
import mainImage from '@/assets/images/main-page-image.png'
import mainImage02 from '@/assets/images/main-page-image02.png'
import { newProducts } from '@/test-db/data'
</script>
<template>
    <div class="page">
        <MainPageImage :image="mainImage" />
        <ProductListMainPage title="Новинки" :products="newProducts" />
        <ProductListMainPage title="Сумки" :products="newProducts" />
        <MainPageImage :image="mainImage02" margin="4vw" />
        <ProductListMainPage title="Одежда" :products="newProducts" />
        <ProductListMainPage title="Обувь" :products="newProducts" />
    </div>
</template>
<style scoped>
.page {
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
    overflow: hidden;
}
</style>

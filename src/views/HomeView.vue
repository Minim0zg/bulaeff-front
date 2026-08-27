<script setup lang="ts">
import MainPageImage from '@/components/home-page/MainPageImage.vue'
import ProductListMainPage from '@/components/home-page/ProductListMainPage.vue'
import itemImage from '@/assets/images/product-id01.png'
import mainImage from '@/assets/images/main-page-image.png'
import mainImage02 from '@/assets/images/main-page-image02.png'
const newProducts = [
    {
        id: 1,
        brand: 'Stone Island',
        name: 'Мужская куртка',
        price: 400,
        image: itemImage,
    },
    {
        id: 2,
        brand: 'Gucci',
        name: 'Женский топ',
        price: 600,
        image: itemImage,
    },
    {
        id: 3,
        brand: 'Prada',
        name: 'Сумка',
        price: 1200,
        image: itemImage,
    },
    {
        id: 4,
        brand: 'Bottega Veneta',
        name: 'Кожаная сумка',
        price: 1500,
        image: itemImage,
    },
]
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

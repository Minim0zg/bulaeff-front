<script setup lang="ts">
import Header from '../components/Header.vue';
import MainPageImage from '../components/MainPageImage.vue';
import ProductListMainPage from '../components/ProductListMainPage.vue';

const newProducts = [
    {
        id: 1,
        brand: 'Stone Island',
        name: 'Мужская куртка',
        price: 400,
        image: '/src/assets/images/product-id01.png'
    },
    {
        id: 2,
        brand: 'Gucci',
        name: 'Женский топ',
        price: 600,
        image: '/src/assets/images/product-id01.png'
    },
    {
        id: 3,
        brand: 'Prada',
        name: 'Сумка',
        price: 1200,
        image: '/src/assets/images/product-id01.png'
    },
    {
        id: 4,
        brand: 'Bottega Veneta',
        name: 'Кожаная сумка',
        price: 1500,
        image: '/src/assets/images/product-id01.png'
    }
]

</script>
<template>
    <div class="page">
        <Header />
        <MainPageImage imageSource="/src/assets/images/main-page-image.png" />
        <ProductListMainPage 
        title="Новинки"
        :products="newProducts" />
        <ProductListMainPage 
        title="Сумки" 
        :products="newProducts" />
        <MainPageImage imageSource="/src/assets/images/main-page-image02.png" margin="4vw" />
        <ProductListMainPage 
        title="Одежда"
        :products="newProducts" />
        <ProductListMainPage 
        title="Обувь" 
        :products="newProducts" />
    </div>

</template>
<style scoped>

.page {
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
    overflow: hidden;
}

</style>
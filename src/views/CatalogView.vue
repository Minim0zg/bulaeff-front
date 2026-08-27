<script setup lang="ts">
import Header from '../components/common/Header.vue'
import ProductCard from '../components/common/ProductCard.vue'
import SortMenu from '../components/catalog-page/SortMenu.vue'
import productImage from '../assets/images/product-id01.png'

const products = [
    {
        id: 1,
        brand: 'Stone Island',
        name: 'Мужская куртка',
        price: 400,
        image: productImage,
    },
    {
        id: 2,
        brand: 'Gucci',
        name: 'Женский топ',
        price: 600,
        image: productImage,
    },
    {
        id: 3,
        brand: 'Prada',
        name: 'Сумка',
        price: 1200,
        image: productImage,
    },
    {
        id: 4,
        brand: 'Bottega Veneta',
        name: 'Кожаная сумка',
        price: 1500,
        image: productImage,
    },
    {
        id: 5,
        brand: 'Stone Island',
        name: 'Мужская куртка',
        price: 400,
        image: productImage,
    },
    {
        id: 6,
        brand: 'Gucci',
        name: 'Женский топ',
        price: 600,
        image: productImage,
    },
    {
        id: 7,
        brand: 'Prada',
        name: 'Сумка',
        price: 1000,
        image: productImage,
    },
    {
        id: 8,
        brand: 'Bottega Veneta',
        name: 'Кожаная сумка',
        price: 1500,
        image: productImage,
    },
]
</script>

<template>
    <Header />
    <main class="catalog">
        <div class="catalog-head">
            <h2 class="catalog-title">Новинки</h2>
            <SortMenu />
        </div>
        <div class="product-grid">
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
    </main>
</template>

<style>
.catalog {
    width: 98vw;
    margin: 0 auto;
}
.catalog-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.catalog-title {
    margin-bottom: 2vw;
    font-size: 2rem;
    font-weight: 300;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1vw;
}
</style>

<script setup lang="ts">
import Header from '../components/Header.vue';
import ProductCard from '../components/ProductCard.vue';

const products = [
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
    },
]
</script>
<template>
    <Header />
    <main class="catalog">
        <h2>
            Новинки
        </h2>
        <div class="product-grid">
            <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            />
        </div>

    </main>
</template>
<style>
.catalog {
    width: 90vw;
    margin: 0 auto;
}

h2 {
    margin-bottom: 1vw;
    font-size: 1.5rem;
    font-weight: 300;
}



.product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2vw
}
</style>
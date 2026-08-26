<script setup lang="ts">
import Header from '../components/Header.vue';
import ProductCard from '../components/ProductCard.vue';
import SortMenu from '../components/SortMenu.vue';

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
    {
        id: 5,
        brand: 'Stone Island',
        name: 'Мужская куртка',
        price: 400,
        image: '/src/assets/images/product-id01.png'
    },
    {
        id: 6,
        brand: 'Gucci',
        name: 'Женский топ',
        price: 600,
        image: '/src/assets/images/product-id01.png'
    },
    {
        id: 7,
        brand: 'Prada',
        name: 'Сумка',
        price: 1000,
        image: '/src/assets/images/product-id01.png'
    },
    {
        id: 8,
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
        <div class="catalog-head">
            <h2 class="catalog-title">
                Новинки
            </h2>
            <SortMenu/>
        </div>
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
    gap: 1vw
}
</style>
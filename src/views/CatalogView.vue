<script setup lang="ts">
import ProductCard from '@/components/common/ProductCard.vue'
import SortMenu from '@/components/catalog-page/SortMenu.vue'
import { products } from '@/test-db/data'
</script>

<template>
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

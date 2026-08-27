<script setup lang="ts">
import ProductCard from '../common/ProductCard.vue'

import type { Product } from '../../types/product.ts'

defineProps<{
    title: string
    products: Product[]
}>()
</script>

<template>
    <div class="product-list-main">
        <h2 class="title">{{ title }}</h2>
        <div class="products">
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
        <div class="show-more">
            <RouterLink to="/catalog">
                <u>Показать больше</u>
            </RouterLink>
        </div>
    </div>
</template>
<style scoped>
.title {
    margin-left: 5vw;
    margin-bottom: 2vw;
    font-size: 2.5rem;
    font-weight: 300;
}

.product-list-main {
    margin-top: 2vw;
    margin-bottom: 2vw;
}
.products {
    display: flex;
    width: 90vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1vw;
}
.show-more {
    font-size: 1rem;
    margin-top: 1vw;
    display: flex;
    width: 95vw;
    justify-content: end;
}
</style>

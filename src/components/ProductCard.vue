<script setup lang="ts">
import type { Product } from "../types/product"




defineProps<{
    product: Product
}>()

</script>

<template>
    <RouterLink :to="`/product`">
        <div class="product-main">
            <div class="product-image">
                <img class="product-image"
                    src="../assets/images/product-id01.png"
                    alt="Фото товара"
                >
            </div>
            <div class="product-description">
                    <div>
                        <div class="brand-name">
                            {{ product.brand }}
                        </div>
                        <div class="name">
                            {{ product.name }}
                        </div>
                    </div>
                    <div class="price">
                        {{ product.price }}$
                    </div>
            </div>
        </div>
    <div class="product-main">
        <div class="product-image">
            <img class="product-image"
                src="../assets/images/product-id01.png"
                alt="Фото товара"
            >
        </div>
        <div class="product-description">
                <div>
                    <div class="brand-name">
                        {{ product.brand }}
                    </div>
                    <div class="name">
                        {{ product.name }}
                    </div>
                </div>
                <div class="price">
                    {{ product.price }}$
                </div>
        </div>
    </div>
    </RouterLink>
</template>

<style scoped>
.product-main {
    display: flex;
    flex-direction: column;
    gap: 0.5vw;
}
.product-image {
    width: 100%;
    aspect-ratio: 3 / 4;
}
.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.product-description {
    display: flex;
    flex-direction: column;
}

.brand-name {
    font-weight: 600;
}
.name {
    font-weight: 400;
    font-size: 0.875rem;
}
.price {
    margin-top: 0.5vw;
    font-weight: 400;
    margin-bottom: 1vw;
}
</style>
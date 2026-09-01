<script setup lang="ts">
import type { Product } from '../../types/product'

defineProps<{
    product: Product
}>()
</script>

<template>
    <div class="main">
        <div class="img-discription">
            <img class="image" :src="product.image" />
            <div class="discription">
                <div class="brandname">{{ product.brand }}</div>
                <div>{{ product.name }}</div>
                <button class="remove-button" type="button"><u>Убрать из корзины</u></button>
            </div>
        </div>
        <div class="price">{{ product.price }} $</div>
    </div>
</template>

<style>
.main {
    display: flex;
    width: 60vw;
    height: auto;
    margin-block: 2vw;
    justify-content: space-between;
}
.image {
    width: 15vw;
}
.discription {
    display: flex;
    flex-direction: column;
    gap: 0.3vw;
    font-weight: 200;
    margin-left: 2vw;
    align-items: start;
}
.discription .brandname {
    font-size: 1.5rem;
    font-weight: 500;
}
.img-discription {
    display: flex;
}

.price {
    margin-top: 0.5rem;
    margin-right: 10vw;
}

.remove-button {
    padding-inline: 0vw;
    border: none;
    color: #6f6f6f;
    margin-left: 0;
}
</style>

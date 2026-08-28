<script setup lang="ts">
import { productInfo } from '@/test-db/data.ts'
import { isTypeQueryNode } from 'typescript'
import { ref } from 'vue'
const addedToBag = ref(false)
const addToBag = () => {
    addedToBag.value = true
}
</script>
<template>
    <div class="product-view">
        <div class="product-images">
            <img
                v-for="image in productInfo.images"
                :key="image"
                :src="image"
                :alt="productInfo.name"
            />
        </div>

        <div class="product-info">
            <div class="head-discription">
                <div style="font-weight: 200">{{ productInfo.condition }}</div>
                <div style="font-size: 2rem; font-weight: 500">{{ productInfo.brand }}</div>
                <div>{{ productInfo.name }}</div>
                <div>Размер: {{ productInfo.size }}</div>
            </div>
            <div class="product-description">
                <div style="font-weight: 500">{{ productInfo.price }}$</div>
                <button type="button" @click="addToBag()">Добавить в корзину</button>
                <div v-if="addedToBag === true">Добавлено в корзину</div>
            </div>
        </div>
    </div>
</template>

<style>
button {
    background-color: black;
    color: aliceblue;
    width: 15rem;
    height: 3rem;
}
.product-view {
    display: flex;
    gap: 8vw;
}

.product-images {
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 40vw;
}

.product-info {
    margin-top: 6vw;
    display: flex;
    flex-direction: column;
    gap: 2vw;
}

.head-discription {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}
.product-description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>

<script setup lang="ts">
import Header from '../components/common/Header.vue'
</script>

<template>
    <Header />

    <div class="product-view">
        <div class="product-images">
            <img src="../assets/images/product-id01.png" alt="product" class="product-image" />
            <img src="../assets/images/product-id01.png" alt="product" class="product-image" />
            <img src="../assets/images/product-id01.png" alt="product" class="product-image" />
        </div>
        <div class="product-info1">
            <div class="product-info">
                <h1>Мужская куртка</h1>
                <p>Stone Island</p>
                <p>Цена: 400$</p>
                <button>Добавить в корзину</button>
            </div>
        </div>
    </div>
</template>

<style>
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
    margin-top: 5vw;
    display: flex;
    flex-direction: column;
}
.product-info1 {
    display: flex;
    justify-content: center;
}
</style>

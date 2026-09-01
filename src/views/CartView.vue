<script setup lang="ts">
import CartProduct from '@/components/cart/CartProduct.vue'
import { products } from '@/test-db/data'
</script>
<template>
    <main class="main">
        <div class="products">
            <h1 class="title">ВЫ ОПЛАЧИВАЕТЕ:</h1>
            <div><hr class="divider" /></div>
            <div v-for="product in products" :key="product.id">
                <CartProduct :product="product" />
            </div>
        </div>
        <div class="contacts">
            <h2 class="class-title">КОНТАКТНАЯ ИНФОРМАЦИЯ</h2>
            <div>Email</div>
            <input />
            <div>Номер телефона</div>
            <input />
            <div>ФИО</div>
            <input />
            <div>Адрес</div>
            <input />
        </div>
    </main>
</template>

<style scoped>
.main {
    display: flex;
    width: 60vw;
}
.products {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 1vw;
    margin-left: 1vw;
}
.title {
    font-size: 2rem;
    font-weight: 400;
}
.contacts {
    margin-top: 5.5vw;
    width: 34vw;
    margin-left: 5vw;
    margin-right: 1vw;
}
.class-title {
    min-width: 26rem;
    font-size: 1.5rem;
    font-weight: 400;
}
.divider {
    width: 60vw;
    border: none;
    height: 0.05vw;
    background-color: #d0d0d0;
}
.contacts {
    display: flex;
    flex-direction: column;
    gap: 1.5vw;
}
.contacts input {
    width: 32vw;
    height: 2rem;
    margin-top: -1vw;
    border: 0.1rem solid #d0d0d0;
    border-radius: 0;
}
</style>

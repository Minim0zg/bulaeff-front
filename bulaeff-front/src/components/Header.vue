<script setup lang="ts">
import { RouterLink } from 'vue-router';


</script>
<template>
    <header>
        <div class="logo">
            <RouterLink to="/"> BULAEFF </RouterLink> 
        </div>
        <nav class="nav">
            <RouterLink to="/catalog">Новинки</RouterLink>
            <RouterLink to="/catalog">Бренды</RouterLink>
            <RouterLink to="/catalog">Сумки</RouterLink>
            <RouterLink to="/catalog">Одежда</RouterLink>
            <RouterLink to="/catalog">Обувь</RouterLink>
            <RouterLink to="/catalog">Аксессуары</RouterLink>
        </nav>
        <div class="search-bag">
            <RouterLink to="/">
                <img src="../assets/svg/search-icon.svg" alt="Search Icon" />
            </RouterLink>
            <RouterLink to="/">
                <img src="../assets/svg/bag-icon.svg" alt="Bag Icon" />
            </RouterLink>
        </div>
    </header>
</template>
<style scoped>

header {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    padding: 1.2rem 0px;
    width: 90vw;
    margin: 0 auto;
}


.logo {
    font-size: 1.875rem;
    font-weight: 600;
    display: flex;



}
.nav {
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    gap: 2rem;
}
.search-bag {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
}
</style>
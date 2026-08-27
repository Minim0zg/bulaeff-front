<script setup lang="ts"></script>

<template>
  <div class="sort">
    <div>
      <button type="button">Сначала дороже</button>
    </div>
    <div>
      <button type="button">Сначала дешевле</button>
    </div>
  </div>
</template>

<style>
button {
  background: none;
  color: #000;
  border: 1px solid #000;
  height: 2.2rem;
  padding-inline: 1vw;
}
.sort {
  display: flex;

  font-size: 1rem;
  gap: 1vw;
}
</style>

<script setup lang="ts">
import MainPageImage from '../assets/images/main-page-image.png';
interface Props {
    imageSource: string;
    margin?: string;
}
const props = defineProps<Props>();
</script>
<template>
<img :src="props.imageSource" :style="`margin-top: ${props.margin}; margin-bottom: ${props.margin}`" alt="Main Page Image" />
</template>
<style scoped>

</style>
<script setup lang="ts">
interface Props {
    image: string
    margin?: string
}

const props = defineProps<Props>()
</script>

<template>
    <img
        :src="props.image"
        :style="`margin-top: ${props.margin}; margin-bottom: ${props.margin}`"
        alt="Main Page Image"
    />
</template>

<style scoped></style>

<script setup>
const images = import.meta.glob('/src/assets/*.png', { eager: true, import: 'default' })
const categories = [
    { name: 'BEDDING', image: images['/src/assets/bedding.png'] },
    { name: 'FRAGRANCE', image: images['/src/assets/fragrance.png'] },
    { name: 'LIGHTING', image: images['/src/assets/lighting.png'] },
    { name: 'CURTAINS', image: images['/src/assets/curtain.png'] },
    { name: 'PLANTS', image: images['/src/assets/plants.png'] },
    { name: 'DINING', image: images['/src/assets/dining.png'] },
]
</script>

<template>
    <section>
        <h1 class="m-4 p-4 text-center text-xl font-bold">Shop By Catagory</h1>
        <div class="m-4 grid grid-cols-2 md:grid-cols-6 gap-4">
            <div v-for="category in categories" :key="category.name" class="text-center hover:scale-105 transition">
                <img :src="category.image" class="rounded-sm mb-2">
                <p class="">{{ category.name }}</p>
            </div>
        </div>
    </section>
</template>
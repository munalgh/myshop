<script setup>
import Header from '/src/components/Header.vue'
import Footer from '/src/components/Footer.vue'
const images = import.meta.glob('/src/assets/*.png', { eager: true, import: 'default' })
const stores = [
    {city: 'SEATTLE', area: 'University Village', image: images['/src/assets/s1.png']},
    {city: 'SAN FRANCISCO', area: 'Valencia Street, San Francisco', image: images['/src/assets/s2.png']},
    {city: 'PALO ALTO', area: 'Stanford', image: images['/src/assets/s3.png']},
    {city: 'LOS ANGELES', area: 'Abbot Kinney', image: images['/src/assets/s4.png']},
    {city: 'BOSTON', area: 'Seaport', image: images['/src/assets/s5.png']},
    {city: 'NEW YORK', area: 'Prince Street, New York', image: images['/src/assets/s6.png']},
    {city: 'BROOKLYN', area: 'Williamsburg', image: images['/src/assets/s7.png']},
    {city: 'KING OF PRUSSIA', area: 'King of Prussia', image: images['/src/assets/s8.png']},
    {city: 'GEORGETOWN', area: 'Georgetown', image: images['/src/assets/s9.png']}
]
</script>

<template>
    <Header />
    <br>
    <div class="text-center">
        <h1 class="text-[32px] mb-5">Stores</h1>
        <p class="text-[16px]">Find one of our 11 stores nearest you.</p>
    </div>
    <section>
        <div class="m-7 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="store in stores" :key="store.i" class="py-6 hover:scale-101 transition block">
                <img :src="store.image" class="mb-3">
                <p class="text-[11px] text-gray-500">{{ store.city }}</p>
                <p class="text-[16px]">{{ store.area }}</p>
            </div>
        </div>
    </section>
    <br>
    <Footer />
</template>

<style>

</style>
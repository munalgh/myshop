<script setup>
const images = import.meta.glob('/src/assets/*.png', { eager: true, import: 'default' })

const shippingInfo = [
    {title: 'Complimentary Shipping', content: 'Enjoy free shipping on U.S. orders over $100.', image: images['/src/assets/box.png']},
    {title: 'Consciously Crafted', content: 'Designed with you and the planet in mind.', image: images['/src/assets/hanger.png']},
    {title: 'Come Say Hi', content: 'We have 11 stores across the U.S.', image: images['/src/assets/location.png']}
]
</script>

<template>
    <section>
        <div class="m-15 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div v-for="index in shippingInfo" :key="index.title" class="flex flex-col items-center text-center">
            <img :src="index.image" class="w-[78px] h-[78px] mb-2">
            <p class="font-bold">{{ index.title }}</p>
            <p>{{ index.content }}</p>
            </div>
        </div>
    </section>
</template>
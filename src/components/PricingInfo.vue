<script setup>
const images = import.meta.glob('/src/assets/*.png', { eager: true, import: 'default' })

const pricingInfo = [
  {category: 'Materials', price: 47.96, image: images['/src/assets/materials.png']},
  {category: 'Hardware', price: 5.74, image: images['/src/assets/hardware.png']},
  {category: 'Labor', price: 13.75, image: images['/src/assets/labor.png']},
  {category: 'Duties', price: 8.09, image: images['/src/assets/duties.png']},
  {category: 'Transport', price: 1.53, image: images['/src/assets/transport.png']}
]
</script>

<template>
    <section class="mx-70 my-20">
        <div class="text-center">
            <h1 class="text-2xl font-bold">Transparent Pricing</h1>
            <p class="mt-5">We publish what it costs us to make every one of our products. There are a lot of costs we can't neatly account for - like design, fittings, wear testing, rent on office and retail space - but we believe you deserve to know what goes into making the products you love.</p>
        </div>

        <div class="mt-10 flex justify-between gap-1 text-center">
            <div v-for="pricing in pricingInfo" :key="pricing.category">
                <img :src="pricing.image" class="w-[65px] h-[65px]" />
                <p class="mt-7 font-semibold">{{ pricing.category }}</p>
                <p class="text-sm">${{ pricing.price }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import Header from '/src/components/Header.vue'
import Footer from '/src/components/Footer.vue'
import InfoSection from '/src/components/InfoSection.vue'

const infoImages = import.meta.glob('/src/assets/info/*.png', { eager: true, import: 'default' })
const images = import.meta.glob('/src/assets/*.png', { eager: true, import: 'default' })

const exploreItems = [
    {title: 'Our Products', image: images['/src/assets/products1.png']},
    {title: 'Our Stores', image: images['/src/assets/stores1.png']},
    {title: 'Careers', image: images['/src/assets/careers1.png']}
]
</script>

<template>
    <div>
    <Header />

    <div class="relative">
        <img src="/src/assets/linen.png" class="w-screen" />

        <section class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h2 class="text-[77px]">We believe <br /> we can all <br /> make <br /> a difference.</h2>
            <p class="mt-2">Our way: Exceptional quality. Ethical factories. Radical Transparency.</p>
        </section>
    </div>

    <div>
        <p class="text-[38px] text-center m-6 p-6">At Everlane, we want the right choice to be as easy <br> as putting on a great T-shirt. That’s why we partner <br> with the best, ethical factories around the world. <br> Source only the finest materials. And share those <br> stories with you—down to the true cost of every <br> product we make. It’s a new way of doing things. <br> We call it Radical Transparency.</p>
    </div>

    <InfoSection 
        subtitle="OUR FACTORIES"
        title="Our ethical approach."
        description="We spend months finding the best factories around the world—the same ones that produce your favorite designer labels. We visit them often and build strong personal relationships with the owners. Each factory is given a compliance audit to evaluate factors like fair wages, reasonable hours, and environment. Our goal? A score of 90 or above for every factory."
        image="infoImages['/src/assets/cotton1.png']"
        bgColor="bg-[#f0ebdf]"/>

    <div>
        <img src="/src/assets/feather.png" class="w-screen h-[690px]">
    </div>

    <InfoSection 
        subtitle="OUR QUALITY"
        title="Designed to last."
        description="At Everlane, we’re not big on trends. We want you to wear our pieces for years, even decades, to come. That’s why we source the finest materials and factories for our timeless products— like our Grade-A cashmere sweaters, Italian shoes, and Peruvian Pima tees."
        image="infoImages['/src/assets/sewing1.png']"
        bgColor="bg-[#a0ab99]"
        imagePosition="right"/>

    <div>
        <img src="/src/assets/workspace.png" class="w-screen">
    </div>
    <br><br>
    <InfoSection 
        subtitle="OUR PRICES"
        title="Radically Transparent."
        description="We believe our customers have a right to know how much their clothes cost to make. We reveal the true costs behind all of our products—from materials to labor to transportation—then offer them to you, minus the traditional retail markup.."
        image="infoImages['/src/assets/graph.png']"/>

    <section class="m-5 p-5">
        <h1 class="text-center text-3xl font-bold mb-10">More to Explore</h1>
        <div class="flex justify-center space-x-10">
            <div v-for="(item, i) in exploreItems" :key="i" class="flex flex-col items-center text-center">
                <img :src="item.image" class="w-[290px] h-[200px] mb-2 shadow-md" />
                <p class="text-sm font-medium">{{ item.title }}</p>
            </div>
        </div>
    </section>
    <Footer />
    </div>
</template>
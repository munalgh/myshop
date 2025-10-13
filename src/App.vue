<script setup>
  import Header from './components/Header.vue'
  import CategoryGrid from './components/CategoryGrid.vue'
  import ArrowButtonRight from './components/ArrowButtonRight.vue'
  import ArrowButtonLeft from './components/ArrowButtonLeft.vue'
  import StarIcon from './components/StarIcon.vue'
  import Footer from './components/Footer.vue'
  const images = import.meta.glob('./assets/*.png', { eager: true, import: 'default' })

  const items = [
    {name: 'Hello Kitty Bedding', price: 40, image: images['./assets/hellokitty.png']},
    {name: 'Room Lamp', price: 25, image: images['./assets/lamp.png']},
    {name: 'Wood Bed Frame', price: 220, image: images['./assets/bed.png']},
    {name: 'Flowers Bed Sheets', price: 30, image: images['./assets/sheets.png']},
    {name: 'Throw Blanket', price: 45, image: images['./assets/blanket.png']}
  ]

  const reviews = [
    {image: images['./assets/1.png']},
    {image: images['./assets/2.png']},
    {image: images['./assets/3.png']},
    {image: images['./assets/4.png']},
    {image: images['./assets/5.png']}
  ]
</script>

<template>
  <div class="font-[Candara]">
    
    <Header></Header>

    <div class="relative">
      <img src="./assets/14.png" class="w-screen" />
      <section class="absolute top-1/3 right-16 bg-[#e2ab52]/50 text-black p-6 max-w-sm backdrop-blur-sm shadow-md rounded">
        <h2 class="text-lg font-semibold">Your Cozy Era</h2>
        <p class="mt-2 text-sm">Make your home comfy with our new items</p>
        <button class="mt-4 underline font-medium">SHOP NOW</button>
      </section>
      </div>

      <CategoryGrid />

      <div class="m-4 p-10 grid grid-cols-1 md:grid-cols-3 gap-7">
        <section class="relative">
          <img src="./assets/new.png" class="rounded-lg mb-2" />
          <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h2 class="text-xl md:text-4xl font-semibold mb-4">New Arrivals</h2>
            <button class="bg-white text-black px-6 py-3 text-sm hover:bg-gray-200 transition">SHOP THE LATEST</button>
          </div>
        </section>

        <section class="relative">
          <img src="./assets/best.png" class="rounded-lg mb-2" />
          <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h2 class="text-xl md:text-4xl font-semibold mb-4">Best-Sellers</h2>
            <button class="bg-white text-black px-6 py-3 text-sm hover:bg-gray-200 transition">SHOP YOUR FAVORITES</button>
          </div>
        </section>

        <section class="relative">
          <img src="./assets/holiday.png" class="rounded-lg mb-2" />
          <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h2 class="text-xl md:text-4xl font-semibold mb-4">The Holiday Season</h2>
            <button class="bg-white text-black px-6 py-3 text-sm hover:bg-gray-200 transition">SHOP OCCASION</button>
          </div>
        </section>
      </div>

      <section class="relative flex items-center justify-center">
        <img class="mb-4 w-[1350px] h-[377px] opacity-80 shadow-xl/30" src="./assets/trees1.png" />
        <div class="absolute items-center justify-center text-white/70 text-center">
          <h2 class="text-4xl text-shadow-lg font-bold mb-2">We're on a Mission To Clean Up the Industry</h2>
          <p class="mb-4 font-bold text-shadow-lg">Read about our progress in our latest Impact Report.</p>
          <button class="bg-green-950 text-white px-6 py-2 rounded">LEARN MORE</button>
        </div>
      </section>

      <section class="text-center py-8">
        <h2 class="text-2xl font-semibold mb-2 mt-4 text-center">Everlane Favorites</h2>
        <p class="text-sm text-center">Beautifully Functional, Purposefully Designed, Consciously Crafted</p>

        <div class="mt-8 flex overflow-x-auto space-x-6 px-6 justify-center">
           <div v-for="item in items" :key="item.name" class="mb-5 mt-4 flex-shrink-0 snap-center bg-[#f0ede9] shadow-md w-64 p-4 text-left hover:scale-110 transition">
            <img :src="item.image" class="w-full h-66 object-cover" />
            <p class="mt-4 font-semibold text-lg">{{ item.name }}</p>
            <p class="test-gray-600">${{ item.price }}</p>
        </div>
        </div>
        <div class="flex justify-center mt-8 sopace-x-3">
          <div class="w-2 h-2 mr-1 rounded-full bg-black"></div>
          <div class="w-2 h-2 mr-1 ml-1 rounded-full bg-gray-400"></div>
          <div class="w-2 h-2 mr-1 ml-1 rounded-full bg-gray-400"></div>
          <div class="w-2 h-2 mr-1 ml-1 rounded-full bg-gray-400"></div>
        </div>
      </section>

      <section class="relative flex flex-col items-center text-center">
        <div class="relative w-full flex items-center justify-center mb-7">
          <button class="absolute left-2 z-10 bg-white shadow rounded-full m-4 p-2 hover:bg-gray-100 transition">
            <ArrowButtonLeft />
          </button>

        <div class="m-20 grid grid-cols-2 md:grid-cols-2">
          <div class="m-5 flex justify-center flex-col text-left">
            <h2 class="font-bold mb-3">People Are Talking</h2>
            <StarIcon />
            <blockquote  class="mt-5 text-2xl">“Love their new collection! Fits perfectly in my room and the quality is amazing.”</blockquote >
            <p class="mt-5">-- Hello Kitty, <span class="underline">Figurative Pile Cushion.</span></p>
          </div>
          <div class="flex flex-col items-center">
            <img src="./assets/6.png" class="w-[530px] h-[695px] rounded-lg shadow-2xl hover:scale-103 transition">
          </div>
        </div>

          <button class="absolute right-2 z-10 bg-white shadow rounded-full m-4 p-2 hover:bg-gray-100 transition">
            <ArrowButtonRight />
          </button>
        </div>
        <div class="flex justify-center mb-8 sopace-x-3">
          <div class="w-2 h-2 mr-1 rounded-full bg-black"></div>
          <div class="w-2 h-2 mr-1 ml-1 rounded-full bg-gray-400"></div>
          <div class="w-2 h-2 mr-1 ml-1 rounded-full bg-gray-400"></div>
          <div class="w-2 h-2 mr-1 ml-1 rounded-full bg-gray-400"></div>
        </div>
      </section>

      <br>
      <hr>
      <br>
      <section>
        <div class="m-4 grid grid-cols-2 md:grid-cols-2">
          <div class="flex flex-col items-center text-center">
            <h2 class="font-bold text-xl mb-3">Our Gift Picks</h2>
            <img src="./assets/bunny.png" class="w-[505px] h-[626px] rounded-lg shadow-2xl hover:scale-103 transition">
            <p class="mt-5">The best presents for everyone on your list.</p>
            <a href="" class="mt-2 text-sm underline text-gray-500">Read More</a>
          </div>
          <div class="flex flex-col items-center text-center">
            <h2 class="font-bold text-xl mb-3">Cleaner Lifestyle</h2>
            <img src="./assets/robe.png" class="w-[505px] h-[626px] rounded-lg shadow-2xl hover:scale-103 transition">
            <p class="mt-5">See the sustainability efforts behind each of our products.</p>
            <a href="" class="mt-2 text-sm underline text-gray-500">Read More</a>
          </div>
        </div>
      </section>
      <br>
      <hr>
      <br>
      <section class="relative flex flex-col items-center text-center">
        <h1 class="text-3xl font-bold m-5">Everlane On You</h1>
        <p class="text-sm">Share your latest interior with 
        <span class="font-bold text-blue-300 underline">#EverlaneWithYou</span> for a chance to be featured.</p>
        <a href="#" class="mb-5 text-sm underline text-gray-500">Add Your Photo</a>

        <div class="relative w-full flex items-center justify-center mb-7">
          <button class="absolute left-2 z-10 bg-white shadow rounded-full m-4 p-2 hover:bg-gray-100 transition">
            <ArrowButtonLeft />
          </button>

          <div class="flex gap-5 overflow-hidden">
            <div v-for="review in reviews" :key="review.i" class="flex-shrink-0">
              <img :src="review.image" class="w-[225px] h-[225px] object-cover rounded-sm" />
            </div>
          </div>

          <button class="absolute right-2 z-10 bg-white shadow rounded-full m-4 p-2 hover:bg-gray-100 transition">
            <ArrowButtonRight />
          </button>
        </div>
      </section>

      <section>
        <div class="m-5 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div class="flex flex-col items-center text-center">
            <img src="./assets/box.png" class="w-[78px] h-[78px] mb-2">
            <p class="font-bold">Complimentary Shipping</p>
            <p>Enjoy free shipping on U.S. orders over $100.</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="./assets/hanger.png" class="w-[78px] h-[78px] mb-2">
            <p class="font-bold">Consciously Crafted</p>
            <p>Designed with you and the planet in mind.</p>
          </div>
          <div class="flex flex-col items-center text-center">
            <img src="./assets/location.png" class="w-[78px] h-[78px] mb-2">
            <p class="font-bold">Come Say Hi</p>
            <p>We have 11 stores across the U.S.</p>
          </div>
        </div>
      </section>

      <Footer></Footer>
  </div>
</template>

<style scoped>

</style>

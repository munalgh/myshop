<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import SearchIcon from './Icons/SearchIcon.vue'
import AccountIcon from './Icons/AccountIcon.vue'
import CartIcon from './Icons/CartIcon.vue'
import MenuCard from '/src/components/MenuCard.vue'

const showSearch = ref(false)
const searchQuery = ref('')
const activeDropdown = ref(null)
let hideTimeout

const showDropdown = (menu) => {
  clearTimeout(hideTimeout)
  activeDropdown.value = menu
}
const hideDropdown = () => {
  hideTimeout = setTimeout(() => {
    activeDropdown.value = null
  }, 200)
}

const toggleSearch = () => {
  showSearch.value = !showSearch.value
}

const dropdowns = {
  listing: {
    highlights: ['Shop All New Arrivals', 'The Gift Guide', 'New Bottoms', 'New Tops', 'T-Shirt Bundles', 'Under $100'],
    featured: ['The Holiday Outfit Edit', 'Giftable Sweaters', 'Uniform & Capsule', 'The Performance Chino Shop', 'Top Rated Men’s Clothing'],
    images: [
      {src: '/src/assets/listing/w1.png', title: 'The Holiday Outfit Edit'},
      {src: '/src/assets/listing/w2.png', title: 'Giftable Sweaters'}
    ]
  }
}
</script>

<template>
  <section class="relative z-60">
      <nav class="bg-[#181818] px-6 py-3 flex items-center justify-between">
        <p class="text-[13px] text-white font-medium leading-relaxed text-center w-full">Get early access on launches and offers.
        <a href="#" class="ml-1 underline">Sign Up for Free!
          <svg class="w-4 h-4 inline-block ml-1" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
          </svg>
        </a></p>
        <div class="flex items-center space-x-2">
          <img src="https://flagcdn.com/us.svg" class="w-6 h-4" />
          <span class="text-white text-sm">USD</span>
        </div>
      </nav>

      <div class="relative m-4 mx-0 py-2 flex items-center justify-between">
        <ul class="flex text-sm font-medium">
          <li @mouseenter="showDropdown('listing')" @mouseleave="hideDropdown"><RouterLink to="/productlist" class="px-2 uppercase">Women</RouterLink>
          <MenuCard v-if="activeDropdown === 'listing'" 
          :highlights="dropdowns.listing.highlights"
          :featured="dropdowns.listing.featured"
          :images="dropdowns.listing.images"/></li>

          <li><RouterLink to="" class="px-2 uppercase">Men</RouterLink></li>
          <li><RouterLink to="/" class="px-2 uppercase">Home</RouterLink></li>
          <li><RouterLink to="/about" class="px-2 uppercase">About</RouterLink></li>
          <li><RouterLink to="/blog" class="px-2 uppercase">Everworld Stories</RouterLink></li>
        </ul>

        <h1 class="text-3xl font-bold text-lime-950 absolute left-1/2 -translate-x-1/2">EVERLANE</h1>
        
        <button @click="toggleSearch" class="absolute top-1 right-22 w-7 h-7 flex items-center justify-center"><SearchIcon /></button>
        <button class="absolute top-1 right-12"><AccountIcon /></button>
        <button class="absolute top-1 right-2"><CartIcon /></button>
      </div>

      <hr />
      
      <div class="flex justify-center gap-4 my-3 text-sm text-gray-500">
        <ul>
            <RouterLink to="/about" class="p-2">About</RouterLink> 
            <RouterLink to="/stores" class="p-2">Stores</RouterLink> 
            <RouterLink to="" class="p-2">Factories</RouterLink> 
            <RouterLink to="" class="p-2">Environmental Initiatives</RouterLink> 
            <RouterLink to="" class="p-2">Our Carbon Commitment</RouterLink>
            <RouterLink to="" class="p-2">Annual Impact Report</RouterLink> 
            <RouterLink to="" class="p-2">Cleaner Fashion</RouterLink>
        </ul>
      </div>

      <transition name="fade">
        <div v-if="showSearch" class="absolute mt-3 py-2 top-full left-0 w-full bg-white border-t shadow-lg z-50">
          <div class="flex items-center justify-between px-6 py-3">
            <input v-model="searchQuery" type="text" placeholder="Search" class="flex-1 bg-[#F5F4F4] rounded-md px-4 py-2" />
            <button @click="toggleSearch" class="ml-3 text-sm text-gray-500 hover:underline">Cancel</button>
          </div>
        </div>
      </transition>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
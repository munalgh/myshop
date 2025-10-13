<template>
  <div class="font-[Candara]">
    <nav class="bg-lime-950 px-6 py-3 flex items-center justify-between">
      <p class="text-[13px] text-white font-medium leading-relaxed text-center w-full">Get early access on launches and offers.
      <a href="#" class="ml-1 underline">Sign Up for Free!
        <svg class="w-4 h-4 inline-block ml-1" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
        </svg>
      </a></p>
      <div class="flex items-center space-x-2">
        <img src="https://flagcdn.com/us.svg" alt="US flag" class="w-6 h-4" />
        <span class="text-white text-sm">USD</span>
      </div>
    </nav>

    <div class="relative m-4">
      <ul class="absolute text-sm mt-3 font-medium">
        <a class="p-2">WOMEN</a>
        <a class="p-2">MEN</a>
        <a class="p-2">HOME</a>
        <a class="p-2">ABOUT</a>
        <a class="p-2">EVERWORLD STORIES</a>
      </ul>

      <h1 class="text-3xl text-center font-bold text-lime-950">EVERLANE</h1>

      <button class="absolute top-0 right-20"><SearchIcon /></button>
      <button class="absolute top-0 right-10"><AccountIcon /></button>
      <button class="absolute top-0 right-0"><CartIcon /></button>
    </div>
    
    <hr />

    <div class="flex justify-center gap-4 my-4 text-sm font-bold text-gray-700">
      <a href="#">Holiday Gifting</a>
      <a href="#">New Arrivals</a>
      <a href="#">Best Sellers</a>
      <a href="#">Beddings</a>
      <a href="#">Lighting</a>
      <a href="#">Curtains</a>
      <a href="#">Fragrance</a>
      <a href="#">Decor</a>
      <a href="#">Rugs</a>
      <a href="#">Kitchen</a>
    </div>
    </div>
</template>

<script setup>
    import SearchIcon from './SearchIcon.vue'
    import AccountIcon from './AccountIcon.vue'
    import CartIcon from './CartIcon.vue'
</script>
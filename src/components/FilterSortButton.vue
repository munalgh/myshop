<template>
    <div class="flex justify-between items-center w-full px-25 my-10">
      <button class="flex justify-between border border-gray-300 px-7 py-5 w-45 hover:bg-gray-100 transition">
        <span class="font-bold">Filter</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M6 12h12m-8 6h8" />
        </svg>
      </button>

      <div class="relative">
        <button class="flex justify-between border border-gray-300 px-7 py-5 w-45 hover:bg-gray-100 transition">
          <div class="flex flex-col items-start">
            <span class="font-bold">Sort by:</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
</template>
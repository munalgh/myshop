<template>
  <div>
    <h3 class="text-2xl mb-8">Filter By</h3>

    <div class="mb-6">
        <h4 class="font-semibold mb-4">Category</h4>
        <ul class="space-y-2 text-sm text-gray-700 m-2">
            <li><label class="flex items-center gap-2">
                <input type="checkbox" class="w-5 h-5" />
                <span>Everyone – All Gender Collection</span>
            </label></li>
            <li><label class="flex items-center gap-2">
                <input type="checkbox" class="w-5 h-5" />
                <span>Accessories & Gift Cards</span>
            </label></li>
            <li><label class="flex items-center gap-2">
                <input type="checkbox" class="w-5 h-5" />
                <span>Backpacks, Weekenders & Duffle Bags</span>
            </label></li>
            <li><label class="flex items-center gap-2">
                <input type="checkbox" class="w-5 h-5" />
                <span>Dress Shirts & Button Downs</span>
            </label></li>
            <li><label class="flex items-center gap-2">
                <input type="checkbox" class="w-5 h-5" />
                <span>Hoodies & Sweatshirts</span>
            </label></li>
        </ul>
    </div>
    <hr class="mb-4">
    <div class="mb-6">
        <h4 class="font-semibold mb-4">Color</h4>
        <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col items-center">
                <span class="w-7 h-7 bg-black rounded-full"></span>
                <span class="text-[12px] mt-1">Black</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="w-7 h-7 bg-[#30568e] rounded-full"></span>
                <span class="text-[12px] mt-1">Blue</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="w-7 h-7 bg-[#8b5b34] rounded-full"></span>
                <span class="text-[12px] mt-1">Brown</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="w-7 h-7 bg-[#e1e1e3] rounded-full"></span>
                <span class="text-[12px] mt-1">Gray</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="w-7 h-7 bg-[#585b44] rounded-full"></span>
                <span class="text-[12px] mt-1">Green</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="w-7 h-7 bg-[#ca8429] rounded-full"></span>
                <span class="text-[12px] mt-1">Orange</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="w-7 h-7 bg-[#ebcec9] rounded-full"></span>
                <span class="text-[12px] mt-1">Pink</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="w-7 h-7 bg-[#b1222c] rounded-full"></span>
                <span class="text-[12px] mt-1">Red</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="w-7 h-7 bg-[#b1a694] rounded-full"></span>
                <span class="text-[12px] mt-1">Tan</span>
            </div>
        </div>
    </div>
    <hr class="mb-4">
    <div class="mb-6">
      <h4 class="font-semibold mb-4">Size</h4>
      <p class="text-sm m-3 text-gray-500">Waist</p>
      <div class="flex flex-wrap gap-2">
        <button class="bg-[#F5F4F4] px-5 py-1 text-[13px]">36</button>
        <button class="bg-[#F5F4F4] px-5 py-1 text-[13px]">38</button>
        <button class="bg-[#F5F4F4] px-5 py-1 text-[13px]">40</button>
        <button class="bg-[#F5F4F4] px-5 py-1 text-[13px]">42</button>
        <button class="bg-[#F5F4F4] px-5 py-1 text-[13px]">44</button>
        <button class="bg-[#F5F4F4] px-5 py-1 text-[13px]">46</button>
        <button class="bg-[#F5F4F4] px-5 py-1 text-[13px]">48</button>
        <button class="bg-[#F5F4F4] px-5 py-1 text-[13px]">50</button>
      </div>
      <br>
      <p class="text-sm m-3 text-gray-500">Clothing</p>
      <div class="flex flex-wrap gap-2">
        <button class="bg-[#F5F4F4] px-5 py-1 text-[13px]">XXS</button>
        <button class="bg-[#F5F4F4] px-5 py-1 text-[13px]">XS</button>
        <button class="bg-[#F5F4F4] px-5 py-1 text-[13px]">S</button>
        <button class="bg-[#F5F4F4] px-5 py-1 text-[13px]">M</button>
        <button class="bg-[#F5F4F4] px-5 py-1 text-[13px]">L</button>
        <button class="bg-[#F5F4F4] px-5 py-1 text-[13px]">XL</button>
        <button class="bg-[#F5F4F4] px-5 py-1 text-[13px]">XXL</button>
        <button class="bg-[#F5F4F4] px-5 py-1 text-[13px]">XXXL</button>
      </div>
    </div>
  </div>
</template>

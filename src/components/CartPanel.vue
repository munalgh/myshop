<script setup>
import TrashButton from '/src/components/Icons/TrashButton.vue'
import { useCartStore } from '/src/stores/cart'
const cart = useCartStore()
</script>

<template>
    <div  v-if="cart.isOpen" class="fixed inset-0 bg-black/50 z-70" @click="cart.toggleCart"></div>
        <aside class="fixed right-0 h-screen w-[470px] bg-white shadow-lg z-80 transform transition-transform duration-300" :class="cart.isOpen ? 'translate-x-0' : 'translate-x-full'">
            <div class="px-5 mt-10 flex justify-between items-center">
                <h2 class="text-2xl font-semibold">Your Cart</h2>
                <button @click="cart.toggleCart" class="absolute top-0 right-3 text-4xl">×</button>
            </div>

        <div class="p-5 overflow-y-auto h-[calc(85vh-180px)]">
            <div v-for="item in cart.items" :key="item.id" class="flex items-center mb-6">
                <img :src="item.images[0]" class="w-22 h-29 object-cover shadow-md mr-5" />
                <div class="flex-1">
                    <h3 class="font-semibold">{{ item.name }}</h3>
                    <p class="text-xs text-gray-500">{{ item.colors[0] }}</p>
                    <div class="flex items-center mt-2">
                        <span class="line-through text-gray-500 text-[12px]">${{ item.oldPrice }}</span> <br>
                        <span class="text-[15px] font-semibold p-1">${{ item.price }}</span>
                    </div>
                    <p class="text-[12px] text-red-700">({{ item.discount }}% off)</p>
                </div>
                <div class="flex flex-col items-end gap-3">
                    <TrashButton />
                    <div class="flex justify-between border border-gray-400 p-2 w-20">
                        <button @click="item.quantity++" class="cursor-pointer">+</button>
                        <span class="text-[15px]">{{ item.quantity }}</span>
                        <button @click="item.quantity > 1 ? item.quantity-- : cart.removeFromCart(item.id)" class="cursor-pointer">−</button>
                    </div>
                </div>
            </div>
            <br>
            <div class="m-1">
                <h1 class="font-bold mb-4">Before You Go</h1>
                <div class="relative flex items-center gap-4 p-2 w-[420px] h-[120px] border border-gray-300">
                    <img src="/src/assets/listing/beanie.png" class="w-[72px] h-[102px] object-cover" />
                    <div class="flex-1">
                        <p class="font-sm">The Good Merino Wool Beanie</p>
                        <p class="text-xs text-gray-500 mt-1">One Size | Chambray Blue</p>
                        <br>
                        <p class="text-sm font-bold mt-1">$35</p>
                    </div>
                    <button class="absolute bottom-2 right-2 bg-gray-950 text-white text-xs px-4 py-2 hover:bg-gray-800 transition">ADD</button>
                </div>
                <div class="flex my-5 space-x-3">
                    <div class="w-2 h-2 mr-1 rounded-full bg-black"></div>
                    <div class="w-2 h-2 mr-1 ml-1 rounded-full bg-gray-300"></div>
                    <div class="w-2 h-2 mr-1 ml-1 rounded-full bg-gray-300"></div>
                    <div class="w-2 h-2 mr-1 ml-1 rounded-full bg-gray-300"></div>
                </div>
            </div>
        </div>

    <div class="absolute bottom-0 w-full p-5 shadow-[0_-7px_18px_rgba(0,0,0,0.2)]">
        <div class="flex justify-between my-2">
            <p class="font-semibold">Subtotal <span class="text-gray-400">({{ cart.items.length }} items)</span></p>
            <p class="font-bold">${{ cart.subtotal }}</p>
        </div>
        <button class="w-full mt-3 bg-gray-950 text-white text-sm py-4 rounded hover:bg-gray-800 transition">CONTINUE TO CHECKOUT</button>
        <p class="text-center font-bold text-[12px] my-6">Psst, get it now before it sells out.</p>
    </div>
    </aside>
</template>
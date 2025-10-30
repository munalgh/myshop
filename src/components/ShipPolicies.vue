<script setup>
const policies = [
    {title: 'Free Shipping', content: 'On all U.S. orders over $100 Learn more.', image: '/src/assets/listing/shipping.png'},
    {title: 'Easy Returns', content: 'Extended returns through January 31. Returns Details.', image: '/src/assets/listing/returns.png'},
    {title: 'Send It As A Gift', content: 'Add a free personalized note during checkout.', image: '/src/assets/listing/gifts.png'}
]
</script>

<template>
    <div v-for="policy in policies" :key="policy.title">
        <ul>
            <li class="flex items-start mb-10 gap-4">
                <img :src="policy.image" class="w-12 h-12" />
                <div>
                    <h1 class="font-bold text-md mb-1">{{ policy.title }}</h1>
                    <p class="text-sm">{{ policy.content }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
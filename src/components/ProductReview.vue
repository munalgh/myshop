<script setup>
import StarIcon from '/src/components/Icons/StarIcon.vue'
import CheckCircle from '/src/components/Icons/CheckCircle.vue'

const userReviews = [
    {id: 1, username: 'ElizabethRBklyn', title: 'Warm and very attractive on', text: 'Got this to keep my husband warm on those chilly late fall days. He loves it as it not only is pretty warm but he looks good in it and he knows it.', height: '5’9” - 5’11"', weight: '161 - 180', bodyType: 'Petite', sizePurchased: 'L', usualSize: 'L'},
    {id: 2, username: 'Anonymous', title: 'Super comfy', text: 'Great quality, warm and super comfy. Got the XL cuz I have a large back and it fits perfect. It does run a bit oversized which is good.', height: '5’9” - 5’11"', weight: '161 - 180', bodyType: 'Petite', sizePurchased: 'L', usualSize: 'L'}
]
</script>

<template>
    <section v-for="userReview in userReviews" :key="userReview.i" class="mx-20 grid grid-cols-3 md:grid-cols-[0.7fr_2fr_0.2fr] items-center border-b border-gray-300">
        <div class="text-[12px] p-5 m-7">
            <p class="font-bold text-lg m-1">{{ userReview.username }}</p>
            <div class="my-5 flex items-center gap-2">
                <CheckCircle />
                <span class="font-semibold text-gray-600 text-medium">Verified</span>
            </div>
            <p class="m-1"><span class="font-bold">Height:</span> {{ userReview.height }}</p>
            <p class="m-1"><span class="font-bold">Weight (lbs):</span> {{ userReview.weight }} lb</p>
            <p class="m-1"><span class="font-bold">Body Type:</span> {{ userReview.bodyType }}</p>
            <br>
            <p class="m-1"><span class="font-bold">Size Purchased:</span> {{ userReview.sizePurchased }} lb</p>
            <p class="m-1"><span class="font-bold">Usual Size:</span> {{ userReview.usualSize }}</p>
        </div>
        <div class="p-5 m-7">
            <StarIcon :count="5" class="m-4" />
            <p class="font-bold m-4">{{ userReview.title }}</p>
            <p class="m-4">{{ userReview.text }}</p>
        </div>
        <div>
            <span class="text-sm text-gray-500">14 days ago</span>
        </div>
    </section>
</template>
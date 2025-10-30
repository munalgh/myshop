<script setup>
defineProps({
    title: String,
    subtitle: String,
    description: String,
    image: String,
    bgColor: {type: String, default: ''},
    imagePosition: {type: String, default: 'left'},
    reverse: {type: Boolean, default: false},
})
</script>

<template>
    <section>
        <div class="grid grid-cols-1 md:grid-cols-2" :class="reverse ? 'md:flex-row-reverse' : ''">
            <div v-if="imagePosition === 'left' || reverse" class="flex justify-center">
                <img :src="image" class="w-[733px] h-[733px]" />
            </div>
            <div :class="['flex flex-col justify-center p-10', bgColor]">
                <p class="text-sm font-bold">{{ subtitle }}</p>
                <p class="text-[40px] font-bold">{{ title }}</p>
                <p class="text-[14px]">{{ description }}</p>
            </div>
            <div v-if="imagePosition === 'right' && !reverse" class="flex justify-center">
                <img :src="image" class="w-[733px] h-[733px]" />
            </div>
        </div>
    </section>
</template>
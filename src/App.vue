<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'

const snowflakes = ref([])
const stars = ref([])

onMounted(() => {
  for (let i = 0; i < 300; i++) {
    snowflakes.value.push({
      id: i,
      x: Math.random() * 100,
      y: -(Math.random() * 100),
      size: 0.1 + Math.random() * 0.4,
      delay: Math.random() * 15,
      duration: 6 + Math.random() * 20,
      opacity: 0.2 + Math.random() * 0.6,
      layer: Math.floor(Math.random() * 3)
    })
  }
  
  for (let i = 0; i < 50; i++) {
    stars.value.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 0.1 + Math.random() * 0.2,
      twinkleDelay: Math.random() * 3
    })
  }
})
</script>

<template>
  <div class="h-screen flex items-center justify-center bg-[#2d1a1a] py-5 relative overflow-hidden">
    <!-- Stars -->
    <div class="absolute inset-0">
      <div v-for="star in stars"
           :key="`star-${star.id}`"
           class="absolute rounded-full bg-white"
           :style="{
             left: `${star.x}%`,
             top: `${star.y}%`,
             width: `${star.size}rem`,
             height: `${star.size}rem`,
             animation: `twinkle 2s ease-in-out ${star.twinkleDelay}s infinite`
           }" />
    </div>

    <!-- Multi-layer Snowflakes -->
    <div v-for="layer in [0, 1, 2]" :key="`layer-${layer}`" 
         class="absolute inset-0 pointer-events-none"
         :style="{
           transform: `translateZ(${layer * 10}px)`,
           perspective: '1000px'
         }">
      <div v-for="flake in snowflakes.filter(f => f.layer === layer)" 
           :key="`flake-${flake.id}`"
           class="absolute rounded-full bg-white"
           :style="{
             left: `${flake.x}%`,
             top: `${flake.y}%`,
             width: `${flake.size * (1 + layer * 0.2)}rem`,
             height: `${flake.size * (1 + layer * 0.2)}rem`,
             opacity: flake.opacity * (1 - layer * 0.2),
             animation: `snowfall-${layer} ${flake.duration}s linear ${flake.delay}s infinite`,
             filter: 'blur(0.2px)',
             zIndex: layer
           }" />
    </div>

    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="grid grid-cols-4 gap-8">
        <div v-for="i in 16" :key="i" class="w-full aspect-square">
          <svg viewBox="0 0 100 100" class="w-full h-full">
            <g stroke="white" stroke-width="1.5" fill="none">
              <path d="M50 0 L50 100 M13.4 25 L86.6 75 M13.4 75 L86.6 25"/>
              <path v-for="angle in [0, 60, 120, 180, 240, 300]" 
                    :transform="`rotate(${angle}, 50, 50)`"
                    d="M50 0 L40 15 L50 30 M50 0 L60 15 L50 30
                       M40 15 L30 10 L35 20
                       M60 15 L70 10 L65 20" />
              <path v-for="angle in [30, 90, 150, 210, 270, 330]"
                    :transform="`rotate(${angle}, 50, 50)`"
                    d="M50 25 L45 35 L50 40
                       M50 25 L55 35 L50 40" />
              <circle cx="50" cy="50" r="3" />
            </g>
          </svg>
        </div>
      </div>
    </div>

    <!-- Main Content with Subtle Glow -->
    <div class="relative z-10">
      <div class="absolute inset-0 blur-2xl bg-white/[0.02]"></div>
      <RouterView />
    </div>
  </div>
</template>

<style>
@keyframes snowfall-0 {
  0% { transform: translateY(-10%) rotate(0deg); }
  100% { transform: translateY(110vh) rotate(360deg) translateX(10px); }
}

@keyframes snowfall-1 {
  0% { transform: translateY(-10%) rotate(0deg); }
  100% { transform: translateY(110vh) rotate(360deg) translateX(-15px); }
}

@keyframes snowfall-2 {
  0% { transform: translateY(-10%) rotate(0deg); }
  100% { transform: translateY(110vh) rotate(360deg) translateX(20px); }
}

@keyframes twinkle {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.8; }
}
</style>
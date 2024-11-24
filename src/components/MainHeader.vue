<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const targetDate = new Date('2024-12-24T00:00:00');

const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});

const updateCountdown = () => {
  const now = new Date().getTime();
  const timeLeft = targetDate.getTime() - now;

  countdown.value = {
    days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
    hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((timeLeft % (1000 * 60)) / 1000)
  };
};

onMounted(() => {
  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);
  onUnmounted(() => clearInterval(timer));
});
</script>

<template>
    <div class="flex justify-between items-center">
      <h1 class="text-7xl text-[#dbc1ac] font-title">X'mas Adventskalender</h1>
    </div>
</template>

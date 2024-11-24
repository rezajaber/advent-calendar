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

  if (timeLeft <= 0) {
    countdown.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return;
  }

  countdown.value = {
    days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
    hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((timeLeft % (1000 * 60)) / 1000)
  };
};

let timer: NodeJS.Timer;

onMounted(() => {
  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<template>
  <div class="flex justify-between items-center gap-8">
    <div class="flex justify-between items-center">
      <h1 class="text-7xl text-[#dbc1ac] font-title">X'mas Adventskalender</h1>
    </div>

    <div class="flex items-center gap-2">
      <div class="flex flex-col items-center bg-[#4d2828] bg-opacity-80 rounded-lg p-3 w-20">
        <div class="text-4xl font-title text-white">
          {{ String(countdown.days).padStart(2, '0') }}
        </div>
        <div class="text-xs font-title text-[#7e4f4f] mt-1">
          Tage
        </div>
      </div>

      <div class="text-white text-2xl font-bold flex flex-col justify-center h-full pb-4">:</div>

      <div class="flex flex-col items-center bg-[#4d2828] bg-opacity-80 rounded-lg p-3 w-20">
        <div class="text-4xl font-title text-white">
          {{ String(countdown.hours).padStart(2, '0') }}
        </div>
        <div class="text-xs font-title text-[#7e4f4f] mt-1">
          Stunden
        </div>
      </div>

      <div class="text-white text-2xl font-bold flex flex-col justify-center h-full pb-4">:</div>

      <div class="flex flex-col items-center bg-[#4d2828] bg-opacity-80 rounded-lg p-3 w-20">
        <div class="text-4xl font-title text-white">
          {{ String(countdown.minutes).padStart(2, '0') }}
        </div>
        <div class="text-xs font-title text-[#7e4f4f] mt-1">
          Minuten
        </div>
      </div>

      <div class="text-white text-2xl font-bold flex flex-col justify-center h-full pb-4">:</div>

      <div class="flex flex-col items-center bg-[#4d2828] bg-opacity-80 rounded-lg p-3 w-20">
        <div class="text-4xl font-title text-white">
          {{ String(countdown.seconds).padStart(2, '0') }}
        </div>
        <div class="text-xs font-title text-[#7e4f4f] mt-1">
          Sekunden
        </div>
      </div>
    </div>
  </div>
</template>
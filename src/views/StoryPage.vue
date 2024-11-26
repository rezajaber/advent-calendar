<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const storyId = route.params.id;

import circus from '../assets/img/story/circus.jpeg'

import { ref } from 'vue';
const currentImageIndex = ref(0);

const stories = {
  1: {
    title: "Silvester in London",
    images: [circus, circus, circus],
    audio: "/path/to/audio1.mp3"
  },
  2: {
    title: "Mein Erster Zirkus Besuch",
    images: [circus, circus, circus],
    audio: "/path/to/audio2.mp3"
  },
  3: {
    title: "Valentinstag",
    images: [circus, circus, circus],
    audio: "/path/to/audio3.mp3"
  },
  4: {
    title: "Mein Knie Operation",
    images: [circus, circus, circus],
    audio: "/path/to/audio4.mp3"
  },
  5: {
    title: "Erstes mal bei Takumi",
    images: [circus, circus, circus],
    audio: "/path/to/audio5.mp3"
  },
  6: {
    title: "Spontan nach Istanbul",
    images: [circus, circus, circus],
    audio: "/path/to/audio6.mp3"
  },
  7: {
    title: "Tretboot fahren",
    images: [circus, circus, circus],
    audio: "/path/to/audio7.mp3"
  },
  8: {
    title: "Meine Letzte Klausur",
    images: [circus, circus, circus],
    audio: "/path/to/audio8.mp3"
  },
  9: {
    title: "Kanu fahren",
    images: [circus, circus, circus],
    audio: "/path/to/audio9.mp3"
  },
  10: {
    title: "Das Gegenteilsfoto",
    images: [circus, circus, circus],
    audio: "/path/to/audio10.mp3"
  },
  11: {
    title: "Japan in Deutschland",
    images: [circus, circus, circus],
    audio: "/path/to/audio11.mp3"
  },
  12: {
    title: "Der Lauf deines Lebens",
    images: [circus, circus, circus],
    audio: "/path/to/audio12.mp3"
  },
  13: {
    title: "Malaga zum ersten Mal",
    images: [circus, circus, circus],
    audio: "/path/to/audio13.mp3"
  },
  14: {
    title: "9000km Abstand",
    images: [circus, circus, circus],
    audio: "/path/to/audio14.mp3"
  },
  15: {
    title: "Pünktlich zum Jahrestag",
    images: [circus, circus, circus],
    audio: "/path/to/audio15.mp3"
  },
  16: {
    title: "Kurztrip nach Berlin",
    images: [circus, circus, circus],
    audio: "/path/to/audio16.mp3"
  },
  17: {
    title: "Nenn mich Leonardo Davinci",
    images: [circus, circus, circus],
    audio: "/path/to/audio17.mp3"
  },
  18: {
    title: "Ab nach Lüneburg",
    images: [circus, circus, circus],
    audio: "/path/to/audio18.mp3"
  },
  19: {
    title: "Ist das Entspannung?",
    images: [circus, circus, circus],
    audio: "/path/to/audio19.mp3"
  },
  20: {
    title: "Mein Erster Zirkus Besuch",
    images: [circus, circus, circus],
    audio: "/path/to/audio20.mp3"
  },
  21: {
    title: "",
    images: [circus, circus, circus],
    audio: "/path/to/audio21.mp3"
  },
  22: {
    title: "",
    images: [circus, circus, circus],
    audio: "/path/to/audio22.mp3"
  },
  23: {
    title: "",
    images: [circus, circus, circus],
    audio: "/path/to/audio23.mp3"
  },
  24: {
    title: "Und hier ist dein Geschenk <3",
    images: [circus, circus, circus],
    audio: "/path/to/audio24.mp3"
  },
  25: {
    title: "Mein Erster Zirkus Besuch",
    images: [circus, circus, circus],
    audio: "/path/to/audio25.mp3"
  },
};

const story = stories[storyId];

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % story.images.length;
};

const previousImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0 
    ? story.images.length - 1 
    : currentImageIndex.value - 1;
};
</script>

<template>
  <div class="mx-auto px-4 py-8 flex flex-col items-center">
    <h1 class="text-7xl font-title mb-4 text-[#dbc1ac]">{{ story.title }}</h1>

    <div class="relative w-full max-w-3xl mb-6 px-12">
      <div class="relative h-[500px] border  rounded-2xl">
        <img 
          :src="story.images[currentImageIndex]" 
          :alt="`${story.title} - Image ${currentImageIndex + 1}`"
          class="object-contain w-full h-full"
        />
        
        <button 
          v-if="story.images.length > 1"
          @click="previousImage" 
          class="absolute -left-14 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 h-10 w-10"
        >
          ←
        </button>
        <button 
          v-if="story.images.length > 1"
          @click="nextImage" 
          class="absolute -right-14 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 h-10 w-10"
        >
          →
        </button>

        <div 
          v-if="story.images.length > 1"
          class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded-full text-sm"
        >
          {{ currentImageIndex + 1 }} / {{ story.images.length }}
        </div>
      </div>
    </div>
    
    <audio 
      v-if="story.audio" 
      controls 
      class="w-96 max-w-md mb-8"
    >
      <source :src="story.audio" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<style scoped>
.carousel-enter-active,
.carousel-leave-active {
  transition: all 0.3s ease;
}

.carousel-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.carousel-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
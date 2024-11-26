<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const storyId = route.params.id;

import circus from '../assets/img/story/circus.jpeg'

const stories = {
  1: {
    title: "Silvester in London",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio1.mp3"
  },
  2: {
    title: "Mein Erster Zirkus Besuch",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio2.mp3"
  },
  3: {
    title: "Valentinstag",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio3.mp3"
  },
  4: {
    title: "Mein Knie Operation",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio4.mp3"
  },
  5: {
    title: "Erstes mal bei Takumi",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio5.mp3"
  },
  6: {
    title: "Spontan nach Istanbul",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio6.mp3"
  },
  7: {
    title: "Tretboot fahren",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio7.mp3"
  },
  8: {
    title: "Meine Letzte Klausur",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio8.mp3"
  },
  9: {
    title: "Kanu fahren",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio9.mp3"
  },
  10: {
    title: "Das Gegenteilsfoto",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio10.mp3"
  },
  11: {
    title: "Japan in Deutschland",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio11.mp3"
  },
  12: {
    title: "Der Lauf deines Lebens",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio12.mp3"
  },
  13: {
    title: "Malaga zum ersten Mal",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio13.mp3"
  },
  14: {
    title: "9000km Abstand",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio14.mp3"
  },
  15: {
    title: "Pünktlich zum Jahrestag",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio15.mp3"
  },
  16: {
    title: "Kurztrip nach Berlin",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio16.mp3"
  },
  17: {
    title: "Nenn mich Leonardo Davinci",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio17.mp3"
  },
  18: {
    title: "Ab nach Lüneburg",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio18.mp3"
  },
  19: {
    title: "Ist das Entspannung?",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio19.mp3"
  },
  20: {
    title: "Mein Erster Zirkus Besuch",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio20.mp3"
  },
  21: {
    title: "",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio21.mp3"
  },
  22: {
    title: "",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio22.mp3"
  },
  23: {
    title: "",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio23.mp3"
  },
  24: {
    title: "Und hier ist dein Geschenk <3",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio24.mp3"
  },
  25: {
    title: "Mein Erster Zirkus Besuch",
    image: circus,
    content: "Your story text here...",
    audio: "/path/to/audio25.mp3"
  },
};

const story = stories[storyId];
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center">
    <h1 class="text-6xl font-title text-gray-200 mb-6">{{ story.title }}</h1>

    <img 
      :src="story.image" 
      :alt="story.title"
      class="object-contain h-[500px] mb-4 rounded-2xl"
    />
    
    <audio 
      v-if="story.audio" 
      controls 
      class="w-full max-w-md mb-8"
    >
      <source :src="story.audio" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>
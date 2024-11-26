<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const storyId = route.params.id;

import circus from '../assets/img/story/circus.jpeg'

const stories = {
  1: {
    title: "Silvester in London",
    image: circus,
    content: "Your story text here..."
  },
  2: {
    title: "Mein Erster Zirkus Besuch",
    image: circus,
    content: "Your story text here..."
  },
  3: {
    title: "Valentinstag",
    image: circus,
    content: "Your story text here..."
  },
  4: {
    title: "Mein Knie Operation",
    image: circus,
    content: "Your story text here..."
  },
  5: {
    title: "Erstes mal bei Takumi",
    image: circus,
    content: "Your story text here..."
  },
  6: {
    title: "Spontan nach Istanbul",
    image: circus,
    content: "Your story text here..."
  },
  7: {
    title: "Tretboot fahren",
    image: circus,
    content: "Your story text here..."
  },
  8: {
    title: "Meine Letzte Klausur",
    image: circus,
    content: "Your story text here..."
  },
  9: {
    title: "Kanu fahren",
    image: circus,
    content: "Your story text here..."
  },
  10: {
    title: "Das Gegenteilsfoto",
    image: circus,
    content: "Your story text here..."
  },
  11: {
    title: "Japan in Deutschland",
    image: circus,
    content: "Your story text here..."
  },
  12: {
    title: "Der Lauf deines Lebens",
    image: circus,
    content: "Your story text here..."
  },
  13: {
    title: "Malaga zum ersten Mal",
    image: circus,
    content: "Your story text here..."
  },
  14: {
    title: "9000km Abstand",
    image: circus,
    content: "Your story text here..."
  },
  15: {
    title: "Pünktlich zum Jahrestag",
    image: circus,
    content: "Your story text here..."
  },
  16: {
    title: "Kurztrip nach Berlin",
    image: circus,
    content: "Your story text here..."
  },
  17: {
    title: "Nenn mich Leonardo Davinci",
    image: circus,
    content: "Your story text here..."
  },
  18: {
    title: "Ab nach Lüneburg",
    image: circus,
    content: "Your story text here..."
  },
  19: {
    title: "Ist das Entspannung?",
    image: circus,
    content: "Your story text here..."
  },
  20: {
    title: "Mein Erster Zirkus Besuch",
    image: circus,
    content: "Your story text here..."
  },
  21: {
    title: "",
    image: circus,
    content: "Your story text here..."
  },
  22: {
    title: "",
    image: circus,
    content: "Your story text here..."
  },
  23: {
    title: "",
    image: circus,
    content: "Your story text here..."
  },
  24: {
    title: "Und hier ist dein Geschenk <3",
    image: circus,
    content: "Your story text here..."
  },
  25: {
    title: "Mein Erster Zirkus Besuch",
    image: circus,
    content: "Your story text here..."
  },


  // ... other stories ...
};

const story = stories[storyId];
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center">
    <h1 class="text-6xl font-title text-gray-200 mb-6">{{ story.title }}</h1>

    <img 
      :src="story.image" 
      :alt="story.title"
      class="object-contain h-[500px] mb-8 rounded-2xl "
    />
    <div class="prose prose-lg prose-invert">
      {{ story.content }}
    </div>
  </div>
</template>
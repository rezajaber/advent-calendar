<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const storyId = route.params.id;

import circus from '../assets/img/story/circus.jpeg'

const stories = {
  1: {
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
      class="object-contain h-[500px] mb-8 rounded-2xl shadow-lg"
    />
    <div class="prose prose-lg prose-invert">
      {{ story.content }}
    </div>
  </div>
</template>
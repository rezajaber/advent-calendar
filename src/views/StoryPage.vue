<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const storyId = route.params.id;

// You can either import the dayContent or create a separate stories object
const stories = {
  1: {
    title: "The Magic of Christmas Eve",
    image: "../assets/stories/story1.jpg",
    content: "Your story text here..."
  },
  // ... other stories ...
};

const story = stories[storyId];
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-4xl font-title text-gray-200 mb-6">{{ story.title }}</h1>
    <img 
      :src="story.image" 
      :alt="story.title"
      class="w-full h-auto mb-8 rounded-lg shadow-lg"
    />
    <div class="prose prose-lg prose-invert">
      {{ story.content }}
    </div>
  </div>
</template>
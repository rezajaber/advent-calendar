<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const storyId = route.params.id;

// Import images for Story 1 - London
import londonone from "../assets/img/stories/london/one.webp";
import londontwo from "../assets/img/stories/london/two.webp";
import londonthree from "../assets/img/stories/london/three.webp";
import londonfour from "../assets/img/stories/london/four.webp";
import londonfive from "../assets/img/stories/london/five.webp";
import londonsix from "../assets/img/stories/london/six.webp";
import londonseven from "../assets/img/stories/london/seven.webp";
import londonaudio from "../assets/audios/londonaudio.mp3";

import circus from "../assets/img/stories/circus/circus.webp";
import rednose from "../assets/img/stories/circus/rednose.webp";
import family from "../assets/img/stories/circus/family.webp";
import dance from "../assets/img/stories/circus/dance.webp";
import circusaudio from "../assets/audios/circusaudio.mp3";

import bbq from "../assets/img/stories/valentinstag/bbq.webp";
import bigmouth from "../assets/img/stories/valentinstag/bigmouth.webp";
import du from "../assets/img/stories/valentinstag/du.webp";
import valentinstagsaudio from "../assets/audios/valentinstagsaudio.mp3";

import kneeopen from "../assets/img/stories/knee/kneeopen.webp";
import kneefull from "../assets/img/stories/knee/kneefull.webp";
import kneeaudio from "../assets/audios/kneeaudio.mp3";

import ramen from "../assets/img/stories/takumi/ramen.webp";
import happysarah from "../assets/img/stories/takumi/happysarah.webp";
import weather from "../assets/img/stories/takumi/weather.webp";
import ramenaudio from "../assets/audios/ramenaudio.mp3";

import maybach from "../assets/img/stories/istanbul/maybach.webp";
import bus from "../assets/img/stories/istanbul/bus.webp";
import wirbeide from "../assets/img/stories/istanbul/wirbeide.webp";
import traditionel from "../assets/img/stories/istanbul/traditionel.webp";
import moschee from "../assets/img/stories/istanbul/moschee.webp";
import bazar from "../assets/img/stories/istanbul/bazar.webp";
import schiff from "../assets/img/stories/istanbul/schiff.webp";
import händchen from "../assets/img/stories/istanbul/händchen.webp";
import istanbulaudio from "../assets/audios/istanbulaudio.mp3";

import brezel from "../assets/img/stories/tretboot/brezel.webp";
import alster from "../assets/img/stories/tretboot/alster.webp";
import chillguy from "../assets/img/stories/tretboot/chillguy.webp";
import treten from "../assets/img/stories/tretboot/treten.webp";
import kussi from "../assets/img/stories/tretboot/kussi.webp";
import tretbootaudio from "../assets/audios/tretbootaudio.mp3";

import letzteklausurone from "../assets/img/stories/letzteklausur/letzteklausurone.webp";
import letzteklausurtwo from "../assets/img/stories/letzteklausur/letzteklausurtwo.webp";
import letzteklausurthree from "../assets/img/stories/letzteklausur/letzteklausurthree.webp";
import letzteklausuraudio from "../assets/audios/letzteklausuraudio.mp3";

import kanuone from "../assets/img/stories/kanu/kanuone.webp";
import kanutwo from "../assets/img/stories/kanu/kanutwo.webp";
import kanuthree from "../assets/img/stories/kanu/kanuthree.webp";
import kanufour from "../assets/img/stories/kanu/kanufour.webp";
import kanuaudio from "../assets/audios/kanuaudio.mp3";

import { ref } from "vue";
const currentImageIndex = ref(0);

const stories = {
  1: {
    title: "Silvester in London",
    images: [
      londonone,
      londontwo,
      londonthree,
      londonfour,
      londonfive,
      londonsix,
      londonseven,
    ],
    audio: londonaudio,
  },
  2: {
    title: "Mein Erster Zirkus Besuch",
    images: [circus, family, dance, rednose],
    audio: circusaudio,
  },
  3: {
    title: "Valentinstag",
    images: [bbq, bigmouth, du],
    audio: valentinstagsaudio,
  },
  4: {
    title: "Mein Knie Operation",
    images: [kneefull, kneeopen],
    audio: kneeaudio,
  },
  5: {
    title: "Erstes mal bei Takumi",
    images: [ramen, happysarah, weather],
    audio: ramenaudio,
  },
  6: {
    title: "Spontan nach Istanbul",
    images: [
      maybach,
      bus,
      wirbeide,
      traditionel,
      moschee,
      bazar,
      schiff,
      händchen,
    ],
    audio: istanbulaudio,
  },
  7: {
    title: "Tretboot fahren",
    images: [brezel, alster, chillguy, treten, kussi],
    audio: tretbootaudio,
  },
  8: {
    title: "Meine Letzte Klausur",
    images: [letzteklausurone, letzteklausurtwo, letzteklausurthree],
    audio: letzteklausuraudio,
  },
  9: {
    title: "Kanu fahren",
    images: [kanutwo, kanuone, kanuthree, kanufour],
    audio: kanuaudio,
  },
  10: {
    title: "Das Gegenteilsfoto",
    images: [circus, circus, circus],
    audio: "/path/to/audio10.mp3",
  },
  11: {
    title: "Japan in Deutschland",
    images: [circus, circus, circus],
    audio: "/path/to/audio11.mp3",
  },
  12: {
    title: "Der Lauf deines Lebens",
    images: [circus, circus, circus],
    audio: "/path/to/audio12.mp3",
  },
  13: {
    title: "Malaga zum ersten Mal",
    images: [circus, circus, circus],
    audio: "/path/to/audio13.mp3",
  },
  14: {
    title: "9000km Abstand",
    images: [circus, circus, circus],
    audio: "/path/to/audio14.mp3",
  },
  15: {
    title: "Pünktlich zum Jahrestag",
    images: [circus, circus, circus],
    audio: "/path/to/audio15.mp3",
  },
  16: {
    title: "Kurztrip nach Berlin",
    images: [circus, circus, circus],
    audio: "/path/to/audio16.mp3",
  },
  17: {
    title: "Nenn mich Leonardo Davinci",
    images: [circus, circus, circus],
    audio: "/path/to/audio17.mp3",
  },
  18: {
    title: "Ab nach Lüneburg",
    images: [circus, circus, circus],
    audio: "/path/to/audio18.mp3",
  },
  19: {
    title: "Ist das Entspannung?",
    images: [circus, circus, circus],
    audio: "/path/to/audio19.mp3",
  },
  20: {
    title: "Mein Erster Zirkus Besuch",
    images: [circus, circus, circus],
    audio: "/path/to/audio20.mp3",
  },
  21: {
    title: "",
    images: [circus, circus, circus],
    audio: "/path/to/audio21.mp3",
  },
  22: {
    title: "",
    images: [circus, circus, circus],
    audio: "/path/to/audio22.mp3",
  },
  23: {
    title: "",
    images: [circus, circus, circus],
    audio: "/path/to/audio23.mp3",
  },
  24: {
    title: "Und hier ist dein Geschenk <3",
    images: [circus, circus, circus],
    audio: "/path/to/audio24.mp3",
  },
  25: {
    title: "Mein Erster Zirkus Besuch",
    images: [circus, circus, circus],
    audio: "/path/to/audio25.mp3",
  },
};

const story = stories[storyId];

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % story.images.length;
};

const previousImage = () => {
  currentImageIndex.value =
    currentImageIndex.value === 0
      ? story.images.length - 1
      : currentImageIndex.value - 1;
};
</script>

<template>
  <div class="mx-auto px-4 py-8 flex flex-col items-center">
    <h1 class="text-7xl font-title mb-4 text-[#dbc1ac]">{{ story.title }}</h1>

    <div class="relative w-full max-w-3xl mb-6 px-12">
      <div class="relative h-[500px] border rounded-2xl">
        <img
          :src="story.images[currentImageIndex]"
          :alt="`${story.title} - Image ${currentImageIndex + 1}`"
          class="object-cover w-full h-full"
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

    <audio v-if="story.audio" controls class="w-96 max-w-md mb-8">
      <source :src="story.audio" type="audio/mpeg" />
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

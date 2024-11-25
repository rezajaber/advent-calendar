<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const dayNumber = route.params.number;

const dayContent = {
  1: {
    movie: "Home Alone",
    movieImage: "https://image.tmdb.org/t/p/w500/9wSbe4CwObACCQvaUVhWQyLR5Vz.jpg",
    song: "All I Want for Christmas Is You - Mariah Carey",
    songImage: "https://upload.wikimedia.org/wikipedia/en/f/f8/All_I_Want_for_Christmas_Is_You.jpg"
  },
  2: {
    movie: "Elf",
    movieImage: "https://image.tmdb.org/t/p/w500/oOleziEempUPu96jkGs0Pj6tKxj.jpg",
    song: "Last Christmas - Wham!",
    songImage: "https://upload.wikimedia.org/wikipedia/en/5/51/Wham%21_-_Last_Christmas.png"
  },
  3: {
    movie: "The Polar Express",
    movieImage: "https://image.tmdb.org/t/p/w500/eOoCzH0MqeGr2taUZO4SwG416PF.jpg",
    song: "Jingle Bell Rock - Bobby Helms",
    songImage: "https://upload.wikimedia.org/wikipedia/en/6/6d/Jingle_Bell_Rock_Bobby_Helms.jpg"
  },
  4: {
    movie: "Miracle on 34th Street",
    song: "Rockin' Around The Christmas Tree - Brenda Lee",
    songImage: "https://upload.wikimedia.org/wikipedia/en/f/f8/All_I_Want_for_Christmas_Is_You.jpg"
  },
  5: {
    movie: "The Santa Clause",
    song: "White Christmas - Bing Crosby",
    songImage: "https://upload.wikimedia.org/wikipedia/en/f/f8/All_I_Want_for_Christmas_Is_You.jpg"
  },
  6: {
    movie: "How the Grinch Stole Christmas",
    song: "Feliz Navidad - José Feliciano",
    songImage: "https://upload.wikimedia.org/wikipedia/en/f/f8/All_I_Want_for_Christmas_Is_You.jpg"
  },
  7: {
    movie: "A Christmas Carol",
    song: "Santa Claus Is Comin' to Town - Bruce Springsteen",
    songImage: "https://upload.wikimedia.org/wikipedia/en/f/f8/All_I_Want_for_Christmas_Is_You.jpg"
  },
  8: {
    movie: "It's a Wonderful Life",
    song: "Silent Night - Various Artists",
    songImage: "https://upload.wikimedia.org/wikipedia/en/f/f8/All_I_Want_for_Christmas_Is_You.jpg"
  },
  9: {
    movie: "The Nightmare Before Christmas",
    song: "Do They Know It's Christmas? - Band Aid",
    songImage: "https://upload.wikimedia.org/wikipedia/en/f/f8/All_I_Want_for_Christmas_Is_You.jpg"
  },
  10: {
    movie: "Love Actually",
    song: "Christmas Time Is Here - Vince Guaraldi Trio",
    songImage: "https://upload.wikimedia.org/wikipedia/en/f/f8/All_I_Want_for_Christmas_Is_You.jpg"
  },
  11: {
    movie: "National Lampoon's Christmas Vacation",
    song: "Santa Baby - Eartha Kitt",
    songImage: "https://upload.wikimedia.org/wikipedia/en/f/f8/All_I_Want_for_Christmas_Is_You.jpg"
  },
  12: {
    movie: "The Holiday",
    song: "Let It Snow! Let It Snow! Let It Snow! - Dean Martin",
    songImage: "https://upload.wikimedia.org/wikipedia/en/f/f8/All_I_Want_for_Christmas_Is_You.jpg"
  },
  13: {
    movie: "A Charlie Brown Christmas",
    song: "Have Yourself a Merry Little Christmas - Frank Sinatra",
    songImage: "https://upload.wikimedia.org/wikipedia/en/f/f8/All_I_Want_for_Christmas_Is_You.jpg"
  },
  14: {
    movie: "Bad Santa",
    song: "Christmas (Baby Please Come Home) - Darlene Love",
    songImage: "https://upload.wikimedia.org/wikipedia/en/f/f8/All_I_Want_for_Christmas_Is_You.jpg"
  },
  15: {
    movie: "Scrooged",
    song: "Happy Xmas (War Is Over) - John Lennon",
    songImage: "https://upload.wikimedia.org/wikipedia/en/f/f8/All_I_Want_for_Christmas_Is_You.jpg"
  },
  16: {
    movie: "Die Hard",
    song: "Wonderful Christmastime - Paul McCartney",
    songImage: "https://upload.wikimedia.org/wikipedia/en/f/f8/All_I_Want_for_Christmas_Is_You.jpg"
  },
  17: {
    movie: "Home Alone 2: Lost in New York",
    song: "The Christmas Song - Nat King Cole",
    songImage: "https://upload.wikimedia.org/wikipedia/en/f/f8/All_I_Want_for_Christmas_Is_You.jpg"
  },
  18: {
    movie: "Arthur Christmas",
    song: "Silver Bells - Various Artists",
    songImage: "https://upload.wikimedia.org/wikipedia/en/f/f8/All_I_Want_for_Christmas_Is_You.jpg"
  },
  19: {
    movie: "White Christmas",
    song: "It's Beginning to Look a Lot Like Christmas - Michael Bublé",
    songImage: "https://upload.wikimedia.org/wikipedia/en/f/f8/All_I_Want_for_Christmas_Is_You.jpg"
  },
  20: {
    movie: "The Muppet Christmas Carol",
    song: "Winter Wonderland - Felix Bernard",
    songImage: "https://upload.wikimedia.org/wikipedia/en/f/f8/All_I_Want_for_Christmas_Is_You.jpg"
  },
  21: {
    movie: "Fred Claus",
    song: "Little Saint Nick - The Beach Boys",
    songImage: "https://upload.wikimedia.org/wikipedia/en/f/f8/All_I_Want_for_Christmas_Is_You.jpg"
  },
  22: {
    movie: "The Christmas Chronicles",
    song: "Deck the Halls - Various Artists",
    songImage: "https://upload.wikimedia.org/wikipedia/en/f/f8/All_I_Want_for_Christmas_Is_You.jpg"
  },
  23: {
    movie: "Rudolph the Red-Nosed Reindeer",
    song: "O Holy Night - Various Artists",
    songImage: "https://upload.wikimedia.org/wikipedia/en/f/f8/All_I_Want_for_Christmas_Is_You.jpg"
  },
  24: {
    movie: "The Snowman",
    song: "Carol of the Bells - Various Artists",
    songImage: "https://upload.wikimedia.org/wikipedia/en/f/f8/All_I_Want_for_Christmas_Is_You.jpg"
  },
  25: {
    movie: "A Christmas Story",
    song: "Joy to the World - Various Artists",
    songImage: "https://upload.wikimedia.org/wikipedia/en/f/f8/All_I_Want_for_Christmas_Is_You.jpg"
  }
};

const content = dayContent[dayNumber];
</script>

<template>
  <div class="container mx-auto p-8">
    <h1 class="text-4xl font-title mb-8">Day {{ dayNumber }}</h1>
    <div class="grid grid-cols-2 gap-8">
      <div class="bg-white rounded-lg p-6 shadow-lg">
        <h2 class="text-2xl font-title mb-4">Movie of the Day</h2>
        <img 
          :src="content.movieImage" 
          :alt="content.movie"
          class="w-full h-96 object-cover rounded-lg mb-4"
        />
        <p class="text-xl text-center">{{ content.movie }}</p>
      </div>
      <div class="bg-white rounded-lg p-6 shadow-lg">
        <h2 class="text-2xl font-title mb-4">Song of the Day</h2>
        <img 
          :src="content.songImage" 
          :alt="content.song"
          class="w-full h-96 object-cover rounded-lg mb-4"
        />
        <p class="text-xl text-center">{{ content.song }}</p>
      </div>
    </div>
  </div>
</template> 
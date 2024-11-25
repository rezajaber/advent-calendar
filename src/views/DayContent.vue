<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const dayNumber = route.params.number;

const dayContent = {
  1: {
    movie: "Santa Claus 1",
    movieImage: "https://image.tmdb.org/t/p/w500/9wSbe4CwObACCQvaUVhWQyLR5Vz.jpg",
    song: "It's Beginning to Look a Lot Like Christmas – Michael Bublé",
    songImage: "https://i.ytimg.com/vi/QJ5DOWPGxwg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFkgWShZMA8=&rs=AOn4CLBOaeTlkvLuKcdORc4j43vSmeC9oA"
  },
  2: {
    movie: "Santa Claus 2",
    movieImage: "https://image.tmdb.org/t/p/w500/oOleziEempUPu96jkGs0Pj6tKxj.jpg",
    song: "White Christmas – Frank Sinatra",
    songImage: "https://i.scdn.co/image/ab67616d0000b273b037583e1b1a897ec49488a1"
  },
  3: {
    movie: "Santa Claus 3",
    movieImage: "https://image.tmdb.org/t/p/w500/eOoCzH0MqeGr2taUZO4SwG416PF.jpg",
    song: "Underneath the Tree – Kelly Clarkson",
    songImage: "https://i.ytimg.com/vi/YfF10ow4YEo/maxresdefault.jpg"
  },
  4: {
    movie: "Polarexpress",
    song: "Last Christmas - Wham!",
    songImage: "https://i1.sndcdn.com/artworks-UlkJ6CL7fdHwpiRi-v0E9Ug-t1080x1080.jpg"
  },
  5: {
    movie: "Grinch",
    song: "Santa Tell Me – Ariana Grande",
    songImage: "https://i.scdn.co/image/ab67616d0000b273a1db745e63940bc06985dea5"
  },
  6: {
    movie: "Ebenezer Scrooge",
    movieImage: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DA6804681279CEED51BCEE50497B4FB8CDBBFBEF11B7DC1F99A78C5F5C1E2973/scale?width=1200&aspectRatio=1.78&format=webp",
    song: "Silent Night – Justin Bieber",
    songImage: "https://www.justinbiebermusic.com/files/2019/11/release_201911_54cf62caa0575670d3cc5a7cf7183aa77e471681.jpg"
  },
  7: {
    movie: "A Christmas Carol",
    song: "Have Yourself a Merry Little Christmas – Sam Smith",
    songImage: "https://m.media-amazon.com/images/I/61dk2qm8uJL._UXNaN_FMjpg_QL85_.jpg"
  },
  8: {
    movie: "It's a Wonderful Life",
    song: "Silver Bells – Michael Bublé & Naturally 7",
    songImage: "https://i.ytimg.com/vi/Ll7l2KXygNg/maxresdefault.jpg"
  },
  9: {
    movie: "The Nightmare Before Christmas",
    song: "Rockin' Around The Christmas Tree - Brenda Lee",
    songImage: "https://upload.wikimedia.org/wikipedia/en/6/6d/Single_Brenda_Lee-Rockin%27_Around_the_Christmas_Tree_cover.jpg"
  },
  10: {
    movie: "Love Actually",
    song: "Let It Snow! Let It Snow! Let It Snow! - Dean Martin",
    songImage: "https://i.scdn.co/image/ab67616d0000b2736d88028a85c771f37374c8ea"
  },
  11: {
    movie: "National Lampoon's Christmas Vacation",
    song: "Baby It's Cold Outside – Michael Bublé & Idina Menzel",
    songImage: "https://i1.sndcdn.com/artworks-Em4gCl2K3Bt5-0-t500x500.jpg"
  },
  12: {
    movie: "The Holiday",
    song: "Jingle Bell Rock – Hall & Oates",
    songImage: "https://i.scdn.co/image/ab67616d0000b273758f7f6791ee819e6c2999b4"
  },
  13: {
    movie: "A Charlie Brown Christmas",
    song: "Mistletoe – Justin Bieber",
    songImage: "https://m.media-amazon.com/images/I/71WTcKzH4rL._UF1000,1000_QL80_.jpg"
  },
  14: {
    movie: "Bad Santa",
    song: "Do You Hear What I Hear? – Whitney Houston",
    songImage: "https://cdns-images.dzcdn.net/images/cover/57791c4a61f7060657928e8eabaf9172/1900x1900-000000-80-0-0.jpg"
  },
  15: {
    movie: "Scrooged",
    song: "O Holy Night – Mariah Carey",
    songImage: "https://i.scdn.co/image/ab67616d0000b2734246e3158421f5abb75abc4f"
  },
  16: {
    movie: "Die Hard",
    song: "Christmas (Baby Please Come Home) – Mariah Carey",
    songImage: "https://i.ytimg.com/vi/W_QigU6t9U0/maxresdefault.jpg"
  },
  17: {
    movie: "Home Alone 2: Lost in New York",
    song: "Frosty the Snowman – Michael Bublé",
    songImage: "https://i.ytimg.com/vi/jIyVB1b2aBs/maxresdefault.jpg"
  },
  18: {
    movie: "Arthur Christmas",
    song: "My Only Wish (This Year) – Britney Spears",
    songImage: "https://www.bide-et-musique.com/images/pochettes/18161.jpg"
  },
  19: {
    movie: "White Christmas",
    song: "Santa Claus Is Coming to Town – Jackson 5",
    songImage: "https://upload.wikimedia.org/wikipedia/en/4/4f/Jackson5-ChristmasAlbum.jpg"
  },
  20: {
    movie: "The Muppet Christmas Carol",
    song: "All I Want for Christmas Is You – Mariah Carey",
    songImage: "https://m.media-amazon.com/images/I/81U6o32LuUL._UF894,1000_QL80_.jpg"
  },
  21: {
    movie: "Fred Claus",
    song: "Christmas Eve – Kelly Clarkson",
    songImage: "https://i.scdn.co/image/ab67616d0000b27365a5a69e8e008fd75909f15c"
  },
  22: {
    movie: "The Christmas Chronicles",
    song: "Holly Jolly Christmas – Michael Bublé",
    songImage: "https://i.ytimg.com/vi/Dkq3LD-4pmM/maxresdefault.jpg"
  },
  23: {
    movie: "The Snowman",
    song: "Deck the Halls – Pentatonix",
    songImage: "https://i1.sndcdn.com/artworks-000278547860-zgjvfa-t500x500.jpg"
  },
  24: {
    movie: "Rudolph the Red-Nosed Reindeer",
    song: "It's the Most Wonderful Time of the Year – Andy Williams",
    songImage: "https://m.media-amazon.com/images/I/711UExmCgML._UF1000,1000_QL80_.jpg"
  },
  25: {
    movie: "A Christmas Story",
    song: "Santa Baby + Santa Tell Me – Ariana Grande Mashup",
    songImage: "https://i1.sndcdn.com/artworks-jeB67cUz0GJzdP7r-OzRlXw-t500x500.jpg"
  }
};

const content = dayContent[dayNumber];
</script>

<template>
  <div class="w-[1280px] mx-auto">
    
    <div class="flex items-center justify-evenly">
      <div class="rounded-lg transition-transform duration-300 hover:scale-105">
        <h2 class="text-3xl font-title mb-4 text-center text-gray-200">Movie of the Day</h2>

        <img 
          :src="content.movieImage" 
          :alt="content.movie"
          class="h-96 object-contain rounded-lg mb-4 hover:opacity-80 transition-opacity duration-300"
        />

        <p class="text-4xl font-title text-center text-[#DBC1AC]">{{ content.movie }}</p>
      </div>

      <div class="grid gap-6 ">
        <h2 class="text-3xl font-title text-center text-gray-200">Song of the Day</h2>

        <img 
          :src="content.songImage" 
          :alt="content.song"
          class="h-96 object-contain rounded-xl hover:opacity-80 transition-opacity duration-300"
        />

        <p class="text-4xl font-title text-center text-[#DBC1AC]">{{ content.song }}</p>
      </div>
    </div>
  </div>
</template> 
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const dayNumber = route.params.number;

const dayContent = {
  1: {
    movie: "Santa Claus 1",
    movieImage: "https://image.tmdb.org/t/p/w500/9wSbe4CwObACCQvaUVhWQyLR5Vz.jpg",
    movieDescription: "Als ein Mann an Heiligabend den Weihnachtsmann versehentlich von seinem Dach stürzt, wird er magisch dazu rekrutiert, dessen Platz einzunehmen.",
    movieLink: "https://www.disneyplus.com/movies/the-santa-clause/1Fuq9Y9yZ7mu",
    song: "It's Beginning to Look a Lot Like Christmas – Michael Bublé",
    songImage: "https://m.media-amazon.com/images/I/718TkO2DizL._UF1000,1000_QL80_.jpg",
    songLink: "https://www.youtube.com/watch?v=0bhsXykXxfg"
  },
  2: {
    movie: "Santa Claus 2",
    movieImage: "https://image.tmdb.org/t/p/w500/oOleziEempUPu96jkGs0Pj6tKxj.jpg",
    movieDescription: "Scott Calvin ist seit acht Jahren der Weihnachtsmann, aber er muss bis Heiligabend eine Mrs. Claus finden, sonst hört er auf, Weihnachtsmann zu sein.",
    movieLink: "https://www.disneyplus.com/movies/the-santa-clause-2/31r4V0qAIpD6",
    song: "White Christmas – Frank Sinatra",
    songImage: "https://i.scdn.co/image/ab67616d0000b273b037583e1b1a897ec49488a1",
    songLink: "https://www.youtube.com/watch?v=aDmVtvAvR18"
  },
  3: {
    movie: "Santa Claus 3",
    movieImage: "https://image.tmdb.org/t/p/w500/eOoCzH0MqeGr2taUZO4SwG416PF.jpg",
    movieDescription: "Santa muss Jack Frost davon abhalten, Weihnachten zu übernehmen, während er sich mit seinen Schwiegereltern auseinandersetzt und versucht, seiner Familie zu helfen, sich an das Leben am Nordpol zu gewöhnen.",
    movieLink: "https://www.disneyplus.com/movies/the-santa-clause-3-the-escape-clause/1p4QGZitQJL4",
    song: "Underneath the Tree – Kelly Clarkson",
    songImage: "https://i.scdn.co/image/ab67616d0000b273b985bec71a40ed40c8ee15c8",
    songLink: "https://www.youtube.com/watch?v=YfF10ow4YEo"
  },
  4: {
    movie: "Polarexpress",
    movieImage: "https://image.tmdb.org/t/p/w500/eOoCzH0MqeGr2taUZO4SwG416PF.jpg",
    movieDescription: "An Heiligabend begibt sich ein Junge auf ein magisches Abenteuer zum Nordpol im Polar-Express und lernt dabei Freundschaft, Mut und den Geist von Weihnachten kennen.",
    movieLink: "https://play.hbomax.com/page/urn:hbo:page:GXdu2ZQvq8JuAuwEAADbA:type:feature",
    song: "Last Christmas - Wham!",
    songImage: "https://i1.sndcdn.com/artworks-UlkJ6CL7fdHwpiRi-v0E9Ug-t1080x1080.jpg",
    songLink: "https://www.youtube.com/watch?v=E8gmARGvPlI"
  },
  5: {
    movie: "Grinch",
    movieImage: "https://m.media-amazon.com/images/M/MV5BNWNkNzBhYzUtNjc3Yy00NTNhLThlYjUtYzcyZjNlOWVmMjNjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    movieDescription: "Ein griesgrämiger Einsiedler schmiedet einen Plan, Weihnachten von den Bewohnern von Whoville zu stehlen. Doch ein großzügiges kleines Mädchen könnte den Tag retten.",
    movieLink: "https://www.peacocktv.com/watch/asset/movies/how-the-grinch-stole-christmas/0c6b4bc6-33ab-3e38-aa67-8a14565c8c38",
    song: "Santa Tell Me – Ariana Grande",
    songImage: "https://i.scdn.co/image/ab67616d0000b273a1db745e63940bc06985dea5",
    songLink: "https://www.youtube.com/watch?v=nlR0MkrRklg"
  },
  6: {
    movie: "Ebenezer Scrooge",
    movieImage: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DA6804681279CEED51BCEE50497B4FB8CDBBFBEF11B7DC1F99A78C5F5C1E2973/scale?width=1200&aspectRatio=1.78&format=webp",
    movieDescription: "Eine animierte Nacherzählung von Charles Dickens' klassischem Roman über einen geizigen alten Mann, der von mehreren geheimnisvollen Erscheinungen auf eine Reise der Selbstfindung geführt wird.",
    movieLink: "https://www.disneyplus.com/de-de/browse/entity-8f498e51-90de-4f5d-8cb9-5b4dd4de81dc",
    song: "Silent Night – Justin Bieber",
    songImage: "https://www.justinbiebermusic.com/files/2019/11/release_201911_54cf62caa0575670d3cc5a7cf7183aa77e471681.jpg",
    songLink: "https://www.youtube.com/watch?v=9WZI4g7qKrg"
  },
  7: {
    movie: "A Christmas Carol",
    movieDescription: "Die klassische Geschichte von Ebenezer Scrooge, einem geizigen alten Mann, der an Heiligabend von Geistern besucht wird, die ihn die wahre Bedeutung von Weihnachten erkennen lassen.",
    movieLink: "https://www.amazon.com/Christmas-Carol-George-C-Scott/dp/B000VDDCLW",
    song: "Have Yourself a Merry Little Christmas – Sam Smith",
    songImage: "https://m.media-amazon.com/images/I/61dk2qm8uJL._UXNaN_FMjpg_QL85_.jpg",
    songLink: "https://www.youtube.com/watch?v=rnEqv8WcVq8"
  },
  8: {
    movie: "It's a Wonderful Life",
    movieDescription: "Ein Engel wird vom Himmel geschickt, um einem verzweifelten Geschäftsmann zu helfen, indem er ihm zeigt, wie das Leben ohne ihn gewesen wäre.",
    movieLink: "https://www.amazon.com/Its-Wonderful-Life-James-Stewart/dp/B000HEWEJO",
    song: "Silver Bells – Michael Bublé & Naturally 7",
    songImage: "https://m.media-amazon.com/images/I/718TkO2DizL._UF1000,1000_QL80_.jpg",
    songLink: "https://www.youtube.com/watch?v=Ll7l2KXygNg"
  },
  9: {
    movie: "The Nightmare Before Christmas",
    movieDescription: "Jack Skellington, der König von Halloween Town, entdeckt Christmas Town, doch seine Versuche, Weihnachten nach Hause zu bringen, führen zu Verwirrung.",
    movieLink: "https://www.disneyplus.com/movies/tim-burtons-the-nightmare-before-christmas/5GjwOj5Rkpz2",
    song: "Rockin' Around The Christmas Tree - Brenda Lee",
    songImage: "https://upload.wikimedia.org/wikipedia/en/6/6d/Single_Brenda_Lee-Rockin%27_Around_the_Christmas_Tree_cover.jpg",
    songLink: "https://www.youtube.com/watch?v=1qYz7rfgLWE"
  },
  10: {
    movie: "Love Actually",
    movieDescription: "Die Geschichte von acht unterschiedlichen Paaren, die in der hektischen Vorweihnachtszeit in London ihre Liebesgeschichten erleben.",
    movieLink: "https://www.peacocktv.com/watch/asset/movies/love-actually/cd73b524-5d45-3f44-96cd-7bc2c84ce56d",
    song: "Let It Snow! Let It Snow! Let It Snow! - Dean Martin",
    songImage: "https://i.scdn.co/image/ab67616d0000b2736d88028a85c771f37374c8ea",
    songLink: "https://www.youtube.com/watch?v=Rnil5LyK_B0"
  },
  11: {
    movie: "National Lampoon's Christmas Vacation",
    movieDescription: "Die Weihnachtspläne der Griswold-Familie verwandeln sich erwartungsgemäß in ein großes Chaos.",
    movieLink: "https://play.hbomax.com/page/urn:hbo:page:GXdu2UwPp6LC3wwEAADe1:type:feature",
    song: "Baby It's Cold Outside – Michael Bublé & Idina Menzel",
    songImage: "https://i1.sndcdn.com/artworks-Em4gCl2K3Bt5-0-t500x500.jpg",
    songLink: "https://www.youtube.com/watch?v=6bbuBubZ1yE"
  },
  12: {
    movie: "The Holiday",
    movieDescription: "Zwei Frauen mit Beziehungsproblemen tauschen ihre Häuser und finden in der Fremde die Liebe.",
    movieLink: "https://www.netflix.com/title/70045854",
    song: "Jingle Bell Rock – Hall & Oates",
    songImage: "https://i.scdn.co/image/ab67616d0000b273758f7f6791ee819e6c2999b4",
    songLink: "https://www.youtube.com/watch?v=5vyMuxxLsD0M"
  },
  13: {
    movie: "A Charlie Brown Christmas",
    movieDescription: "Frustriert von der Kommerzialisierung um ihn herum versucht Charlie Brown, den wahren Geist von Weihnachten zu finden.",
    movieLink: "https://tv.apple.com/us/movie/a-charlie-brown-christmas/umc.cmc.3sr1g8vtlmgrv1gfat0mdjv33",
    song: "Mistletoe – Justin Bieber",
    songImage: "https://m.media-amazon.com/images/I/71WTcKzH4rL._UF1000,1000_QL80_.jpg",
    songLink: "https://www.youtube.com/watch?v=LUjn3RpkcKY"
  },
  14: {
    movie: "Bad Santa",
    movieDescription: "Ein unglücklicher Trickbetrüger und sein Partner geben sich als Weihnachtsmann und Helfer aus, um an Heiligabend Kaufhäuser auszurauben.",
    movieLink: "https://www.amazon.com/Bad-Santa-Billy-Bob-Thornton/dp/B003QSPK1Q",
    song: "Do You Hear What I Hear? – Whitney Houston",
    songImage: "https://cdns-images.dzcdn.net/images/cover/57791c4a61f7060657928e8eabaf9172/1900x1900-000000-80-0-0.jpg",
    songLink: "https://www.youtube.com/watch?v=kZ-coIXJf4s"
  },
  15: {
    movie: "Scrooged",
    movieDescription: "Ein selbstsüchtiger und zynischer Fernsehdirektor wird an Heiligabend von drei Geistern heimgesucht, die ihm wertvolle Lektionen beibringen.",
    movieLink: "https://www.paramountplus.com/movies/scrooged/LxUvG_zVqJ46pfU9QafFUVuKXKA_k_xP",
    song: "O Holy Night – Mariah Carey",
    songImage: "https://i.scdn.co/image/ab67616d0000b2734246e3158421f5abb75abc4f",
    songLink: "https://www.youtube.com/watch?v=BEJmP8T07JU"
  },
  16: {
    movie: "Die Hard",
    movieDescription: "Ein NYPD-Offizier versucht, seine Frau und mehrere Geiseln vor deutschen Terroristen zu retten, die eine Weihnachtsfeier in Los Angeles gestört haben.",
    movieLink: "https://www.disneyplus.com/movies/die-hard/6hmr0UxNxs50",
    song: "Christmas (Baby Please Come Home) – Mariah Carey",
    songImage: "https://cdns-images.dzcdn.net/images/cover/60d8f7635ead9b3c5e571aec47a8c73e/0x1900-000000-80-0-0.jpg",
    songLink: "https://www.youtube.com/watch?v=W_QigU6t9U0"
  },
  17: {
    movie: "Home Alone 2: Lost in New York",
    movieDescription: "Ein Jahr, nachdem Kevin allein zu Hause war, strandet er versehentlich in New York City - und die gleichen Kriminellen sind ihm dicht auf den Fersen.",
    movieLink: "https://www.disneyplus.com/movies/home-alone-2-lost-in-new-york/5GjwOj5Rkpz2",
    song: "Frosty the Snowman – Michael Bublé",
    songImage: "https://m.media-amazon.com/images/I/718TkO2DizL._UF1000,1000_QL80_.jpg",
    songLink: "https://www.youtube.com/watch?v=jIyVB1b2aBs"
  },
  18: {
    movie: "Arthur Christmas",
    movieDescription: "Der tollpatschige Sohn des Weihnachtsmannes, Arthur, macht sich auf eine Mission, ein vergessenes Geschenk rechtzeitig auszuliefern.",
    movieLink: "https://www.netflix.com/title/70167077",
    song: "My Only Wish (This Year) – Britney Spears",
    songImage: "https://www.bide-et-musique.com/images/pochettes/18161.jpg",
    songLink: "https://www.youtube.com/watch?v=VkGD-FpYoLA"
  },
  19: {
    movie: "White Christmas",
    movieDescription: "Ein erfolgreiches Tanz- und Gesangsduo verliebt sich in ein Schwesterngespann und arbeitet daran, ein Hotel in Vermont zu retten.",
    movieLink: "https://www.netflix.com/title/60003082",
    song: "Santa Claus Is Coming to Town – Jackson 5",
    songImage: "https://upload.wikimedia.org/wikipedia/en/4/4f/Jackson5-ChristmasAlbum.jpg",
    songLink: "https://www.youtube.com/watch?v=HhiUOCo8LYQ"
  },
  20: {
    movie: "The Muppet Christmas Carol",
    movieDescription: "Die Muppet-Figuren erzählen ihre Version der klassischen Geschichte eines alten und geizigen Mannes, der an Heiligabend Erlösung findet.",
    movieLink: "https://www.disneyplus.com/movies/the-muppet-christmas-carol/3Kqgp8R7PuUE",
    song: "All I Want for Christmas Is You – Mariah Carey",
    songImage: "https://m.media-amazon.com/images/I/81U6o32LuUL._UF894,1000_QL80_.jpg",
    songLink: "https://www.youtube.com/watch?v=aAkMkVFwAoo"
  },
  21: {
    movie: "Fred Claus",
    movieDescription: "Fred Claus, der verbitterte ältere Bruder des Weihnachtsmannes, muss zum Nordpol ziehen, um Santa und den Elfen zu helfen.",
    movieLink: "https://play.hbomax.com/page/urn:hbo:page:GXdu2UwuaXqPDwgEAAABr:type:feature",
    song: "Christmas Eve – Kelly Clarkson",
    songImage: "https://i.scdn.co/image/ab67616d0000b27365a5a69e8e008fd75909f15c",
    songLink: "https://www.youtube.com/watch?v=9NVU3B33_4Q"
  },
  22: {
    movie: "The Christmas Chronicles",
    movieDescription: "Zwei Geschwister schließen sich mit dem Weihnachtsmann zusammen für ein hochfliegendes Weihnachtsabenteuer.",
    movieLink: "https://www.netflix.com/title/80199682",
    song: "Holly Jolly Christmas – Michael Bublé",
    songImage: "https://m.media-amazon.com/images/I/718TkO2DizL._UF1000,1000_QL80_.jpg",
    songLink: "https://www.youtube.com/watch?v=Dkq3LD-4pmM"
  },
  23: {
    movie: "The Snowman",
    movieDescription: "Ein Junge baut einen Schneemann, der lebendig wird und ihn auf ein magisches Abenteuer mitnimmt, um den Weihnachtsmann zu treffen.",
    movieLink: "https://www.amazon.com/Snowman-Peter-Auty/dp/B07KRNXK4H",
    song: "Deck the Halls – Pentatonix",
    songImage: "https://i1.sndcdn.com/artworks-000278547860-zgjvfa-t500x500.jpg",
    songLink: "https://www.youtube.com/watch?v=UqItlHUSN-4"
  },
  24: {
    movie: "Rudolph the Red-Nosed Reindeer",
    movieDescription: "Ein Außenseiter-Rentier und seine Freunde suchen einen Ort, an dem sie akzeptiert werden.",
    movieLink: "https://www.amazon.com/Rudolph-Red-Nosed-Reindeer-Billie-Richards/dp/B000VDDCD2",
    song: "It's the Most Wonderful Time of the Year – Andy Williams",
    songImage: "https://m.media-amazon.com/images/I/711UExmCgML._UF1000,1000_QL80_.jpg",
    songLink: "https://www.youtube.com/watch?v=AN_R4pR1hck"
  },
  25: {
    movie: "A Christmas Story",
    movieDescription: "In den 1940er Jahren versucht ein Junge namens Ralphie, seine Eltern, Lehrer und den Weihnachtsmann davon zu überzeugen, dass ein Red Ryder BB Gewehr das perfekte Geschenk ist.",
    movieLink: "https://play.hbomax.com/page/urn:hbo:page:GXdkpqAvq0r7DwgEAAAAH:type:feature",
    song: "Christmas Playlist",
    songImage: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84864f6792bc9f140e1ddbb828",
    songLink: "https://www.youtube.com/watch?v=o6wJSwbKbds"
  }
};


const content = dayContent[dayNumber];
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Day Indicator -->
    <h1 class="text-6xl font-title text-center text-[#dbc1ac] mb-2">Day {{ dayNumber }}</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
      <!-- Movie Section -->
      <div class="space-y-6">
        <h2 class="text-4xl font-title text-gray-200 text-center mb-4">Movie of the Day</h2>

        <a :href="content.movieLink" target="_blank" rel="noopener noreferrer">
          <div class="group relative overflow-hidden rounded-2xl shadow-2xl">
            <img 
              :src="content.movieImage" 
              :alt="content.movie"
              class="w-full h-[500px] object-cover transition duration-300 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <p class="text-4xl font-title text-center text-white mb-4">
                {{ content.movie }}
              </p>
              <p class="text-lg text-white text-center">
                {{ content.movieDescription }}
              </p>
            </div>
          </div>
        </a>
      </div>

      <!-- Song Section -->
      <div class="space-y-6">
        <h2 class="text-4xl font-title text-gray-200 text-center mb-4">Song of the Day</h2>
        <a :href="content.songLink" target="_blank" rel="noopener noreferrer">
          <div class="group relative overflow-hidden rounded-2xl shadow-2xl">
            <img 
              :src="content.songImage" 
              :alt="content.song"
              class="w-full h-[500px] object-contain transition duration-300 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <p class="text-4xl font-title text-center text-white">
                {{ content.song }}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template> 
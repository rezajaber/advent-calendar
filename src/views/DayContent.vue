<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const dayNumber = route.params.number;

const dayContent = {
  1: {
    movie: "The Christmas Chronicles",
    movieLink: "https://www.netflix.com/search?q=The%20Christ&jbv=80199682",
    song: "It's Beginning to Look a Lot Like Christmas – Michael Bublé",
    songLink: "https://www.youtube.com/watch?v=0bhsXykXxfg",
    storyLink: "/story/1",
  },
  2: {
    movie: "The Christmas Chronicles 2",
    movieLink: "https://www.netflix.com/title/80988988",
    song: "White Christmas – Frank Sinatra",
    songLink: "https://www.youtube.com/watch?v=aDmVtvAvR18",
    storyLink: "/story/2",
  },
  3: {
    movie: "Meet me next Christmas",
    movieLink: "https://www.netflix.com/title/81392060",
    song: "Underneath the Tree – Kelly Clarkson",
    songLink: "https://www.youtube.com/watch?v=YfF10ow4YEo",
    storyLink: "/story/3",
  },
  4: {
    movie: "Holidate",
    movieLink: "https://www.netflix.com/search?q=Christmas&jbv=81034553",
    song: "Last Christmas - Wham!",
    songLink: "https://www.youtube.com/watch?v=E8gmARGvPlI",
    storyLink: "/story/4",
  },
  5: {
    movie: "Violent Night",
    movieLink:
      "https://www.amazon.de/gp/video/detail/amzn1.dv.gti.c3e1377d-958f-4b77-8b6a-81def58589be?autoplay=0&ref_=atv_cf_strg_wb",
    song: "Santa Tell Me – Ariana Grande",
    songLink: "https://www.youtube.com/watch?v=nlR0MkrRklg",
    storyLink: "/story/5",
  },
  6: {
    movie: "Red One",
    movieLink:
      "https://www.cinemaxx.de/ticketshop/30005/73/1001/461D8900023FVUVQLG",
    song: "Mistletoe – Justin Bieber",
    songLink: "https://www.youtube.com/watch?v=LUjn3RpkcKY",
    storyLink: "/story/6",
  },
  7: {
    movie: "Scrooge",
    movieLink:
      "https://www.disneyplus.com/de-de/browse/entity-8f498e51-90de-4f5d-8cb9-5b4dd4de81dc",
    song: "Have Yourself a Merry Little Christmas – Sam Smith",
    songLink: "https://www.youtube.com/watch?v=rnEqv8WcVq8",
    storyLink: "/story/7",
  },
  8: {
    movie: "Noelle",
    movieLink:
      "https://www.disneyplus.com/de-de/browse/entity-23089de2-21bb-4674-86a0-35dcd09f4d2c",
    song: "Rockin' Around The Christmas Tree - Brenda Lee",
    songLink: "https://www.youtube.com/watch?v=1qYz7rfgLWE",
    storyLink: "/story/8",
  },
  9: {
    movie: "Schöne und das Biest",
    movieLink:
      "https://www.disneyplus.com/de-de/browse/entity-68296821-e59b-429f-b92c-90303f00bc53",
    song: "Silver Bells – Michael Bublé & Naturally 7",
    songLink: "https://www.youtube.com/watch?v=Ll7l2KXygNg",
    storyLink: "/story/9",
  },
  10: {
    movie: "Frozen",
    movieLink:
      "https://www.disneyplus.com/de-de/browse/entity-04c97b72-504b-47f2-9c6f-fe13d9aea82f",
    song: "Let It Snow! Let It Snow! Let It Snow! - Dean Martin",
    songLink: "https://www.youtube.com/watch?v=Rnil5LyK_B0",
    storyLink: "/story/10",
  },
  11: {
    movie: "Frozen 2",
    movieLink:
      "https://www.disneyplus.com/de-de/browse/entity-3f9272e2-33f1-47db-bb2e-9aa2c7c85a96",
    song: "Baby It's Cold Outside – Michael Bublé & Idina Menzel",
    songLink: "https://www.youtube.com/watch?v=6bbuBubZ1yE",
    storyLink: "/story/11",
  },
  12: {
    movie: "Grinch",
    movieLink:
      "https://www.amazon.de/-/en/Grinch-Scott-Mosier/dp/B07LFP2FP2?crid=I377H34J7IXJ&dib=eyJ2IjoiMSJ9.hUVy2lNm_6zgsNAo-XZCuS8AzRoMjUoADDVtN9w5RnqzElHo4dEUXmlnWVbyr4j7DKNAfnloO-xzfWW0m_D2HXX203u-e_cv0OHGhsHB1src_AsyrmY6BFR9-CyQQYe5ywFK7-C5yY4eaJsfTJfoKifH37vgqTRRsv1L7rkbfMinxfRZ77xPFdEv_bWrugFBq5KiZmGYAQN6DEQw-IKbpeMYSSe_kSSU1fMeVffBmv8.geKgHX79yYJhuNbPvtzqYrVm177u1n4h8AVjMXbFW0I&dib_tag=se&keywords=weihnachten&qid=1732575397&s=instant-video&sprefix=weihnachte%2Cinstant-video%2C84&sr=1-1",
    song: "Jingle Bell Rock – Hall & Oates",
    songLink: "https://www.youtube.com/watch?v=5vyMuxxLsD0M",
    storyLink: "/story/12",
  },
  13: {
    movie: "Elliot das kleinste Rehntier",
    movieLink:
      "https://www.amazon.de/-/en/Jennifer-Westcott/dp/B07KCFCYQT?crid=I377H34J7IXJ&dib=eyJ2IjoiMSJ9.hUVy2lNm_6zgsNAo-XZCuS8AzRoMjUoADDVtN9w5RnqzElHo4dEUXmlnWVbyr4j7DKNAfnloO-xzfWW0m_D2HXX203u-e_cv0OHGhsHB1src_AsyrmY6BFR9-CyQQYe5ywFK7-C5yY4eaJsfTJfoKifH37vgqTRRsv1L7rkbfMinxfRZ77xPFdEv_bWrugFBq5KiZmGYAQN6DEQw-IKbpeMYSSe_kSSU1fMeVffBmv8.geKgHX79yYJhuNbPvtzqYrVm177u1n4h8AVjMXbFW0I&dib_tag=se&keywords=weihnachten&qid=1732575448&s=instant-video&sprefix=weihnachte%2Cinstant-video%2C84&sr=1-2",
    song: "Silent Night – Justin Bieber",
    songLink: "https://www.youtube.com/watch?v=9WZI4g7qKrg",
    storyLink: "/story/13",
  },
  14: {
    movie: "Polarexpress",
    movieLink:
      "https://www.amazon.de/gp/video/detail/amzn1.dv.gti.cca9f6d9-11e9-6332-aa00-3f5eaac2da8a?autoplay=0&ref_=atv_cf_strg_wb",
    song: "Do You Hear What I Hear? – Whitney Houston",
    songLink: "https://www.youtube.com/watch?v=kZ-coIXJf4s",
    storyLink: "/story/14",
  },
  15: {
    movie: "Spirited",
    movieLink:
      "https://tv.apple.com/de/movie/spirited/umc.cmc.3lp7wqowerzdbej98tveildi3?action=play",
    song: "O Holy Night – Mariah Carey",
    songLink: "https://www.youtube.com/watch?v=BEJmP8T07JU",
    storyLink: "/story/15",
  },
  16: {
    movie: "Harry Potter 1",
    movieLink:
      "https://www.amazon.de/-/en/Harry-Potter-Philosophers-Stone-Columbus/dp/B00JGV38WG?crid=2MGQRMK2WYJK9&dib=eyJ2IjoiMSJ9.m6bfX0kM4JfY7Ec4F7c50PiFHz3nPz6Ur2KNsU4DGXWPiTmSkWcEHUiDv85pX0PiC493d2vVfTUwgseqC9pPRMehRtDadyuMy_pp20q3Te6Wc1Ed_5dTREy7rnJ_N5_S3ebx5G8hsi1QeowXL9ujZ5YSfP03h1xnRTmWKsAXHzbuQzt12McPnq2YxY3cD2blnJqScdHaJCQAKtl7M6KeTZQvB-dXySL9CEFOv6DKgr8.r8MO91z3c9MmPIvcPMkSBi3Rbrt1XfI_NPNVSKVYG5s&dib_tag=se&keywords=harry+potter+1&nsdOptOutParam=true&qid=1732575741&s=instant-video&sprefix=harry+potter+1%2Cinstant-video%2C88&sr=1-1",
    song: "Christmas (Baby Please Come Home) – Mariah Carey",
    songLink: "https://www.youtube.com/watch?v=W_QigU6t9U0",
    storyLink: "/story/16",
  },
  17: {
    movie: "Harry Potter 2",
    movieLink:
      "https://www.amazon.de/gp/video/detail/B0B8NCQZYM/ref=atv_dp_amz_c_MG6btijs_brws_1_1?jic=8%7CEgNhbGw%3D",
    song: "Frosty the Snowman – Michael Bublé",
    songLink: "https://www.youtube.com/watch?v=jIyVB1b2aBs",
    storyLink: "/story/17",
  },
  18: {
    movie: "Harry Potter 3",
    movieLink:
      "https://www.amazon.de/-/en/Potter-Prisoner-Azkaban-Alfonso-Cuar%C3%B3n/dp/B00FYUOEPI?crid=6Z9R3Z601WTF&dib=eyJ2IjoiMSJ9.VUtyBwqoj-X6velNuwBIely90HCfyRLt9efmT2BUpouDGYZihTHKxP34Lv56_9qPfCOheOUuQKCl8POvaAf7563gwM23g_vLWwJbggBPAuyMsEUXZ3Er_-JJgAtJyTQNiwdwVVCeOM5uGtWw4JCijEqVoYI5I9n5mJnVYtjrp-MQQYHbh_LbWiwhZOWw8P0hDQ12Uko3txSzvTTSoDadJ4c4FwrHaEk-vh4MErhF7F4.d-XmXRFwftx2UKo3jr-Xv1023mrULYFuv0OnXpV3tCI&dib_tag=se&keywords=harry+potter+3&nsdOptOutParam=true&qid=1732575781&s=instant-video&sprefix=harry+potter+%2Cinstant-video%2C110&sr=1-1",
    song: "My Only Wish (This Year) – Britney Spears",
    songLink: "https://www.youtube.com/watch?v=VkGD-FpYoLA",
    storyLink: "/story/18",
  },
  19: {
    movie: "Harry Potter 4",
    movieLink:
      "https://www.amazon.de/gp/video/detail/amzn1.dv.gti.cea9f6d7-7cd1-0df7-5da2-38e01af81cd8?autoplay=0&ref_=atv_cf_strg_wb",
    song: "Santa Claus Is Coming to Town – Jackson 5",
    songLink: "https://www.youtube.com/watch?v=HhiUOCo8LYQ",
    storyLink: "/story/19",
  },
  20: {
    movie: "Harry Potter 5",
    movieLink:
      "https://www.amazon.de/-/en/Harry-Potter-Order-Phoenix-David/dp/B00RYENTOY?crid=23DMCJE9JPJJQ&dib=eyJ2IjoiMSJ9.OX6Jle2W7AYx9-2VCJ_M3Z4pQRxGfwCzCPBtsyxYQS2fmm_i_vxvRY_j6AZs2WmksfMKmF75FhhwKAxcE-IKMpeIluQVgxV8z7RYtwwDqUqbeWU8yMiNVBjSMTRrV-DtkY6wgHRnP6DwCmqqWYyabx2PrRfnk0vvYk5VVhE6DEjAfJQMTwbkqSHkp8d1kPDC0P-clOyf2TOrf7LOn8fTynBnNdBYSCxk-ySJxD2DoBU.bSfKGixV4Cv6jpP5_o0p-IGzVCmua4trgc0W_HLHtvo&dib_tag=se&keywords=Harry+Potter+5&nsdOptOutParam=true&qid=1732575816&s=instant-video&sprefix=harry+potter+5%2Cinstant-video%2C84&sr=1-1",
    song: "All I Want for Christmas Is You – Mariah Carey",
    songLink: "https://www.youtube.com/watch?v=aAkMkVFwAoo",
    storyLink: "/story/20",
  },
  21: {
    movie: "Harry Potter 6",
    movieLink:
      "https://www.amazon.de/-/en/Harry-Potter-Half-Blood-Prince-David/dp/B0CVMW26LP?crid=9SX64KVWKS17&dib=eyJ2IjoiMSJ9.wkmRgSJTah29pqv4jvzxc7hK1jAQVwm2G7UkL0ilIK96P7tcD9kZE7FMbjeA4VtlcKLh2IK7D6DrW93NBywVBsGgXwlBo19a7apfEowo8l_I22QfOBhOM_yVB3tJprZJ2hdc1Q-ap9w25BLtnpqMv7uUoOn7eXkIZ0tOd25p38xx0jh2vqHn90Ps5ruNUVnugG78DK2RRRcKe88IZmvAVqu3FOmcCEJL7NyrZ_DIX0w.9Y0ho_rKF46JH-lKTgAgL-ZR2WSo1rHcVkDBbWUH_Kg&dib_tag=se&keywords=Harry+Potter+6&nsdOptOutParam=true&qid=1732575829&s=instant-video&sprefix=harry+potter+6%2Cinstant-video%2C92&sr=1-1",
    song: "Christmas Eve – Kelly Clarkson",
    songLink: "https://www.youtube.com/watch?v=9NVU3B33_4Q",
    storyLink: "/story/21",
  },
  22: {
    movie: "Harry Potter 7",
    movieLink:
      "https://www.amazon.de/-/en/Harry-Potter-Deathly-Hallows-Part/dp/B00IKEOUHM?crid=1XVS856SSEM2R&dib=eyJ2IjoiMSJ9.85xDF5mgZupoB5sKxX2JfSqUQj4MaYWyBl8IupiH_MQJlgCXvQmsjt5Hf67FqPVrAvMaxmpN5ah3hwSkWNtKinkrn7hS7KiOs6j6uHzImwYNY4sVBw7ayqDGRyz3s5h0ZmOWG3VuqebOAUsRGbGsuIrkOvaH85FNxJMRUgrvOK720c-CqR7d_FWlpMBB_PO_XXSpZ6pAmuz4XeItHxDLcw7iXBR6xTfF7oPinUt3_zo.otlWTBohHrtn8w57qPMqoub4DmBPdqlroDlbWCth6ik&dib_tag=se&keywords=Harry+Potter+7&nsdOptOutParam=true&qid=1732575838&s=instant-video&sprefix=harry+potter+%2Cinstant-video%2C109&sr=1-1",
    song: "Holly Jolly Christmas – Michael Bublé",
    songLink: "https://www.youtube.com/watch?v=Dkq3LD-4pmM",
    storyLink: "/story/22",
  },
  23: {
    movie: "Willy Wonka",
    movieLink:
      "https://www.amazon.de/gp/video/detail/amzn1.dv.gti.1c100f7c-38bf-4058-8bc0-c1889e183194?autoplay=0&ref_=atv_cf_strg_wb",
    song: "Deck the Halls – Pentatonix",
    songImage:
      "https://i1.sndcdn.com/artworks-000278547860-zgjvfa-t500x500.jpg",
    songLink: "https://www.youtube.com/watch?v=UqItlHUSN-4",
    storyLink: "/story/23",
  },
  24: {
    movie: "Kevin allein in New York",
    movieLink:
      "https://www.disneyplus.com/de-de/browse/entity-7fec1899-bf4d-42fe-bd4b-58998a6d2187",
    song: "It's the Most Wonderful Time of the Year – Andy Williams",
    songLink: "https://www.youtube.com/watch?v=AN_R4pR1hck",
    storyLink: "/story/24",
  },
  25: {
    movie: "A Christmas Story",
    movieLink:
      "https://play.hbomax.com/page/urn:hbo:page:GXdkpqAvq0r7DwgEAAAAH:type:feature",
    song: "Christmas Playlist",
    songLink: "https://www.youtube.com/watch?v=o6wJSwbKbds",
    storyLink: "/story/25",
  },
};

const content = dayContent[dayNumber];
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Day Indicator -->
    <h1 class="text-6xl font-title text-center text-[#dbc1ac] mb-2">
      Day {{ dayNumber }}
    </h1>

    <div class="flex flex-wrap w-[1080px] justify-between py-12">
      <!-- Movie Section -->
      <div class="space-y-6">
        <h2 class="text-4xl font-title text-gray-200 text-center mb-4">
          Movie of the Day
        </h2>

        <a
          :href="content.movieLink"
          target="_blank"
          class="group block transform hover:scale-105 transition-all duration-300"
        >
          <img
            src="../assets/img/geschenk.webp"
            :alt="content.movie"
            class="w-full h-80 object-contain"
          />
        </a>
      </div>

      <!-- Song Section -->
      <div class="space-y-6">
        <h2 class="text-4xl font-title text-gray-200 text-center mb-4">
          Song of the Day
        </h2>

        <a
          :href="content.songLink"
          target="_blank"
          class="group block transform hover:scale-105 transition-all duration-300"
        >
          <img
            src="../assets/img/geschenk.webp"
            :alt="content.song"
            class="w-full h-80 object-contain"
          />
        </a>
      </div>

      <!-- Story Section - Updated -->
      <div class="space-y-6">
        <h2 class="text-4xl font-title text-gray-200 text-center mb-4">
          Story of the Day
        </h2>

        <router-link
          :to="content.storyLink"
          class="group block transform hover:scale-105 transition-all duration-300"
        >
          <img
            src="../assets/img/geschenk.webp"
            :alt="content.story"
            class="w-full h-80 object-contain"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

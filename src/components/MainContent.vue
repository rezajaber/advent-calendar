<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const openDoor = (dayNumber) => {
  // Get current date
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();

  // Check if it's December and the day matches or has passed
  if (currentMonth === 11 && currentDay >= dayNumber) {
    router.push(`/day/${dayNumber}`);
  } else {
    // Optional: Add some feedback that the door is locked
    alert(`Diese Tür öffnet sich erst am ${dayNumber} Dezember Azizam ❤️`);
  }
};

// Helper function to check if door is available
const isDoorAvailable = (dayNumber) => {
  const today = new Date();
  return today.getMonth() === 11 && today.getDate() >= dayNumber;
};
</script>

<template>
  <!-- Advent Calendar Layout -->
  <div class="grid grid-cols-9 gap-2.5">
    <!-- Row 1 -->
    <!-- ONE -->
    <div 
      @click="openDoor(6)" 
      class="col-span-1 h-40 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300"
    >
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/one.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover"
        />
      </div>
      
      <!-- NUMBERS -->
      <div class="absolute top-2 left-4">
        <p class="text-white font-title text-5xl">6</p>
      </div>
    </div>
   
    <!-- TWO -->
    <div 
      @click="openDoor(12)" 
      class="col-span-2 h-40 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300"
    >
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/two.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover object-bottom"
        />
      </div>
      
      <!-- NUMBERS -->
      <div class="absolute inset-0 flex items-center justify-center">
        <p class="text-white font-title text-7xl mt-20">12</p>
      </div>
    </div>

    <!-- THREE -->
    <div @click="openDoor(3)" class="col-span-1 h-40 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300">
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/three.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover"
        />
      </div>
       
      <!-- NUMBERS -->
      <div class="absolute top-2 right-4 flex">
        <p class="text-white font-title text-5xl">3</p>
      </div>
    </div>
    
    <!-- FOUR -->
    <div @click="openDoor(19)" class="col-span-1 row-span-2 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300">
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/four.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- NUMBERS -->
      <div class="absolute inset-0 flex items-center justify-center">
        <p class="text-white font-title -mt-36 text-8xl">19</p>
      </div>
    </div>

    <!-- FIVE -->
    <div @click="openDoor(5)" class="col-span-1 h-40 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300">
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/five.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- NUMBERS -->
      <div class="absolute top-2 left-4 flex">
        <p class="text-white font-title text-4xl">5</p>
      </div>
    </div>

    <!-- SIX -->
    <div @click="openDoor(18)" class="col-span-2 h-40 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300">
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/six.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover"
        />
      </div>
      
      <!-- NUMBERS -->
      <div class="absolute right-4 bottom-2">
        <p class="text-white font-title text-5xl mt-20">18</p>
      </div>
    </div>

    <!-- SEVEN -->
    <div @click="openDoor(7)" class="col-span-1 h-40 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300">
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/seven.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- NUMBERS -->
      <div class="absolute top-2 left-4 flex">
        <p class="text-white font-title text-6xl">7</p>
      </div>
    </div>


    <!-- Row 2 -->
    <!-- ACHT -->
    <div @click="openDoor(22)" class="col-span-1 row-span-2 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300">
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/eight.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- NUMBERS -->
      <div class="absolute inset-0 flex items-center justify-center">
        <p class="text-white font-title text-7xl mt-48">22</p>
      </div>
    </div>

    <!-- NINE -->
    <div @click="openDoor(4)" class="col-span-1 h-40 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300">
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/nine.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover object-left-bottom scale-150"
        />
      </div>

      <!-- NUMBERS -->
      <div class="absolute right-4 top-2">
        <p class="text-white font-title text-4xl">4</p>
      </div>
    </div>
    
    <!-- TEN -->
    <div @click="openDoor(11)" class="col-span-2 h-40 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300">
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/ten.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- NUMBERS -->
      <div class="absolute right-4 bottom-1">
        <p class="text-[#967259] font-title text-5xl">11</p>
      </div>
    </div>

     <!-- ELEVEN -->
    <div @click="openDoor(17)" class="col-span-2 h-40 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300">
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/eleven.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- NUMBERS -->
      <div class="absolute left-4">
        <p class="text-white font-title text-6xl">17</p>
      </div>
    </div>

    <!-- TWELVE -->
    <div @click="openDoor(2)" class="col-span-2 h-40 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300">
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/twelve.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover"
        />
        <!-- Darkening overlay -->
        <div class="absolute inset-0 bg-black/30"></div>
      </div>

      <!-- NUMBERS -->
      <div class="absolute inset-0 flex items-center justify-center">
        <p class="text-white font-title text-7xl mt-16">2</p>
      </div>
    </div>

    <!-- Row 3 -->
     <!-- THRITEEN -->
    <div @click="openDoor(13)" class="col-span-1 h-40 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300">
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/thirteen.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- NUMBERS -->
      <div class="absolute top-2 left-3">
        <p class="text-white font-title text-4xl">13</p>
      </div>
    </div>

    <!-- FOURTEEN -->
    <div @click="openDoor(8)" class="col-span-1 h-40 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300">
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/fourteen.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- NUMBERS -->
      <div class="absolute inset-0 flex items-center justify-center">
        <p class="text-white font-title -mt-10 text-4xl">8</p>
      </div>
    </div>

    <!-- FIFTEEN -->
    <div @click="openDoor(10)" class="col-span-1 h-40 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300">
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/fifteen.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- NUMBERS -->
      <div class="absolute bottom-2 right-5">
        <p class="text-white font-title text-4xl">10</p>
      </div>
    </div>
   

    <!-- 16 -->
    <div @click="openDoor(21)" class="col-span-1 row-span-2 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300">
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/sixteen.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover"
        />
      </div>
      <!-- NUMBERS -->
      <div class="absolute inset-0 flex items-center justify-center">
        <p class="text-white font-title text-7xl -mt-48">21</p>
      </div>
    </div>

    <!-- 17 -->
    <div @click="openDoor(1)" class="col-span-1 h-40 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300">
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/seventeen.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover"
        />
      </div>
      <!-- NUMBERS -->
      <div class="absolute right-4 top-2">
        <p class="text-white font-title text-4xl">1</p>
      </div>
    </div>
   
    <!-- 18 -->
    <div @click="openDoor(20)" class="col-span-1 row-span-2 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300">
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/eighteen.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- NUMBERS -->
      <div class="absolute inset-0 flex items-center justify-center">
        <p class="text-white font-title text-7xl mt-48">20</p>
      </div>
    </div>

    <!-- 19 -->
    <div @click="openDoor(9)" class="col-span-1 h-40 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300">
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/ninteen.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- NUMBERS -->
      <div class="absolute top-2 left-4 flex">
        <p class="text-white font-title text-4xl">9</p>
      </div>>
    </div>
    
    <!-- 20 -->
    <div @click="openDoor(16)" class="col-span-1 row-span-2 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300">
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/twenty.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- NUMBERS -->
      <div class="absolute inset-0 flex items-center justify-center">
        <p class="text-white font-title text-6xl mt-48">16</p>
      </div>
    </div>
    

    <!-- Row 4 -->
     <!-- 21 -->
    <div @click="openDoor(23)" class="col-span-2 h-40 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300">
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/twentyone.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- NUMBERS -->
      <div class="absolute bottom-1 right-4">
        <p class="text-white font-title text-5xl">23</p>
      </div>
    </div>


    
      <!-- 22 -->
      <div @click="openDoor(22)" class="col-span-1 h-40 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300">
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/twentytwo.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- NUMBERS -->
      <div class="absolute inset-0 flex items-center justify-center">
        <p class="text-white font-title text-5xl -mt-20">14</p>
      </div>
    </div>
    

      <!-- 23 -->
      <div @click="openDoor(25)" class="col-span-1 h-40 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300">
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/twentythree.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- NUMBERS -->
      <div class="absolute inset-0 flex items-center justify-center">
        <p class="text-white font-title text-5xl">25</p>
      </div>
    </div>
    

      <!-- 24 -->
      <div @click="openDoor(24)" class="col-span-1 h-40 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300">
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/twentyfour.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- NUMBERS -->
      <div class="absolute top-2 right-3">
        <p class="text-white font-title text-5xl">24</p>
      </div>
    </div>
    

      <!-- 17 -->
      <div @click="openDoor(15)" class="col-span-1 h-40 rounded-lg relative overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300">
      <div class="absolute inset-0">
        <img 
          src="../assets/img/doors/twentyfive.jpeg" 
          alt="Day 10"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- NUMBERS -->
      <div class="absolute bottom-1 right-3">
        <p class="text-[#967259] font-title text-4xl">15</p>
      </div>
    </div>
    
   
  </div>
</template>
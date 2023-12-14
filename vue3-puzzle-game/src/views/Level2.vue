<template>
    <div>
      <h1>Level 1 - 4x4 Sliding Puzzle</h1>
      <div class="puzzle">
        <div v-for="(number, index) in puzzle" :key="index" @click="movePiece(number)">
            <div v-for="(number, index) in puzzle" :key="index" @click="movePiece(number)">
  <img v-if="number !== emptyIndex" :src="getImageUrl(number)" :alt="`Piece ${number}`" />
  <div v-else class="empty-piece"></div>
</div>

        </div>
      </div>
      <div class="info">
        <p>Turns: {{ turns }}</p>
      </div>
      <button @click="resetPuzzle">Reset Puzzle</button>
      <button @click="goHome">Back to Home</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    data() {
      return {
        puzzle: [],
        turns: 0,
        emptyIndex: 15,
        getImageUrl: (number) => `../assets/img/${number}.png`,
        
      };
    },
    methods: {
      initializePuzzle() {
        this.puzzle = [...Array(16).keys()].sort(() => Math.random() - 0.5);
        this.turns = 0;
        this.emptyIndex = 15;
      },
      renderInfo() {
        this.turns++;
      },
      isAdjacent(index1, index2) {
        const row1 = Math.floor(index1 / 4);
        const col1 = index1 % 4;
        const row2 = Math.floor(index2 / 4);
        const col2 = index2 % 4;
  
        return Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1;
      },
      movePiece(number) {
        const index = this.puzzle.indexOf(number);
  
        if (this.isAdjacent(index, this.emptyIndex) && this.emptyIndex !== null) {
          [this.puzzle[index], this.puzzle[this.emptyIndex]] = [
            this.puzzle[this.emptyIndex],
            this.puzzle[index],
          ];
  
          this.emptyIndex = index;
          this.renderInfo();
  
          if (this.puzzle.every((value, idx) => (idx === value || idx === this.emptyIndex))) {
            setTimeout(() => {
              alert(`Congratulations! Puzzle solved in ${this.turns} turns!`);
              this.initializePuzzle();
            }, 300);
          }
        }
      },
      resetPuzzle() {
        this.initializePuzzle();
      },
      goHome() {
        this.$router.push('/');
      },
      getImageUrl(number) {
        return `assets/image_part_00${number}.png`;
      },
    },
    mounted() {
      this.initializePuzzle();
    },
  };
  </script>
  
  <style>
  .empty-piece {
  width: 100%;
  height: 100%;
  background-color: #fff; /* Set a background color or style as desired */
}

  .puzzle {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
    border: 5px solid #333;
    border-radius: 10px;
    overflow: hidden;
    width: 300px;
  }
  
  .puzzle div {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    position: relative;
    cursor: pointer;
  }
  
  .puzzle img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .info {
    margin-top: 20px;
    text-align: center;
  }
  
  button {
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  
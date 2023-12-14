<template>
    <div>
      <h1>Level 1 - Sliding Puzzle</h1>
      <div class="puzzle">
        <div v-for="(number, index) in puzzle" :key="index" @click="movePiece(number)">
          {{ number }}
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
import { ref, watch } from 'vue';

export default {
  data() {
    return {
      puzzle: [],
      turns: 0,
      emptyIndex: 8,
    };
  },
  methods: {
    initializePuzzle() {
      this.puzzle = [...Array(9).keys()].sort(() => Math.random() - 0.5);
      this.turns = 0;
      this.emptyIndex = 8;
    },
    renderInfo() {
      this.$nextTick(() => {
        this.turns++; // Update the turns information
      });
    },
    isAdjacent(index1, index2) {
      const row1 = Math.floor(index1 / 3);
      const col1 = index1 % 3;
      const row2 = Math.floor(index2 / 3);
      const col2 = index2 % 3;

      return Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1;
    },
    movePiece(number) {
      const index = this.puzzle.indexOf(number);

      if (this.isAdjacent(index, this.emptyIndex)) {
        [this.puzzle[index], this.puzzle[this.emptyIndex]] = [
          this.puzzle[this.emptyIndex],
          this.puzzle[index],
        ];
        this.emptyIndex = index;
        this.renderInfo();

        if (this.puzzle.every((value, idx) => idx === value)) {
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
  },
  watch: {
    puzzle: 'renderInfo',
  },
  mounted() {
    this.initializePuzzle();
  },
};
</script>

  <style>
  .puzzle {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    gap: 5px;
    border: 5px solid #333;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .puzzle div {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    cursor: pointer;
    font-size: 24px;
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
  
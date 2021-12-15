//első canvas
let canvas = document.getElementById('canvas5');
let c = canvas.getContext('2d');
canvas.width = 250;
canvas.height  = 250;




function wait(time) {
    return new Promise(resolve => {
      setTimeout(() => resolve("timeout!"), time);
    });
  };
  
  
  const app = new Vue({
    el: "#main",
    data() {
      return {
        message: "Click the 'Solve' button!",
        delay: 300,
        currentCellIndex: -1,
        board:  [1,0,0,0,
                 0,2,0,0,
                 0,0,3,0,
                 0,0,0,4],
      };
    },
    
    methods: {
      /* NOTE: I'm using `setValue` and `getValue` instead of using `v-model` in the template, 
        because I want to show '0's in the board as empty cells. There MIGHT be a better of
        doing this.*/
  
      setValue(event, index) {
        this.board[index] = parseInt(event.target.value) || 0;
      },
      
      getValue(index) {
        return this.board[index] === 0 ? "" : this.board[index];
      },
      
      reset() {
        this.message = "Click the 'Solve' button!";
        this.currentCellIndex = -1;
        this.board = [0,0,0,0,
                      0,0,0,0,
                      0,0,0,0,
                      0,0,0,0];
      },
  
      async solve() {
        this.message = "Running...";
        let result = await this.solveFrom(0);
        
        if (result)
          this.message = "Game solved successfully!";
        else
          this.message = "Game couldn't be solved";  
      },
  
      async solveFrom(index) {
        this.currentCellIndex = index;
        await wait(this.delay);
  
        if (index === 16)   return true;
        else if (this.board[index] !== 0)  return await this.solveFrom(index + 1);
        else {
          let isSolved = false;
          
          for (let number of [1, 2, 3, 4]) {
            if (this.isViable(index, number)) {
              Vue.set(this.board, index, number); // this.board[index] = number;
              isSolved = await this.solveFrom(index + 1);
              if (isSolved) return true;
            }
            
            Vue.set(this.board, index, 0); // this.board[index] = 0;
            this.currentCellIndex = index;
            await wait(this.delay);
          }
         
          return false;
        }
      },
      
      isViable(index, value) {
        return  this.isViableRow(index, value) &&
                this.isViableColumn(index, value) &&
                this.isViableSquare(index, value);
      },
  
      isViableRow(index, value) {
        let i = this.rowNumber(index);
        return !this.row(i).includes(value);
      },
  
      isViableColumn(index, value) {
        let j = this.columnNumber(index);
        return !this.column(j).includes(value);
      },
      
      isViableSquare(index, value) {
        let k = this.squareNumber(index);
        return !this.square(k).includes(value);
      },
      
      row(i) {
        let first = 4 * i, last = 4 * (i + 1);
        return this.board.slice(first, last);
      },
      
      column(j) {
        return this.board.filter((_, index) => index % 4 === j);
      },
      
      square(k) {
        let topLeft = [0, 2,
                       8, 10];
        let corner = topLeft[k];
        let indices = [corner, corner + 1, corner + 4, corner + 4 + 1];
        return indices.map(index => this.board[index]);
      },
  
      rowNumber(index) { return Math.floor(index / 4); },
      
      columnNumber(index) { return index % 4; },
      
      squareNumber(index) { 
        let row = this.rowNumber(index),
            column = this.columnNumber(index);
        return 2 * Math.floor(row / 2) + Math.floor(column / 2);
      }
    }
  });
  
/********************************************
 ************* GAME LOGICS ******************
 ********************************************/

/**
 * print the game board in a good manner
 * a játéktábla kiíratása
 * @param gameBoard -> játéktábla (2D array)
 */
/*  function printBoard(gameBoard) {
    console.group("Print");
    for (i of gameBoard) console.log(i);
    console.groupEnd();
  }
   */
  /**
   * check if the queen can be placed in the given position
   * ellenőrzés, hogy a királynő elhelyezhető-e az adott pozícióban.
   * @param gameBoard -> játéktábla
   * @param pos -> position to check for validity a pozíció érvényességének ellenőrzése
   */

  //függvény, hogy a királynő lerakható-e, ennek ellenőrzése
  function checkIfQueenCanBePlaced(gameBoard, pos) {
    const [row, col] = pos;
  
    // horizontal check, vízszintes ellenőrzés
    if (gameBoard[row].includes(1)) return false;
  
    // vertical check, függőleges ellenőrzés
    const column = [];
    gameBoard.forEach((boardRow) => {
      column.push(boardRow[col]);
    });
    if (column.includes(1)) return false;
  
    let i, j;
  
    // upper left diagonal, bal felső átló
    [i, j] = [row, col];
    while (i >= 0 && j >= 0) {
      if (gameBoard[i][j] === 1) return false;
      i--;
      j--;
    }
  
    // upper right diagonal, jobb felső átló
    [i, j] = [row, col];
    while (i < gameBoard.length && j < gameBoard.length) {
      if (gameBoard[i][j] === 1) return false;
      i++;
      j++;
    }
  
    // lower left diagonal, bal alsó átló
    [i, j] = [row, col];
    while (i < gameBoard.length && j >= 0) {
      if (gameBoard[i][j] === 1) return false;
      i++;
      j--;
    }
  
    // upper left diagonal, jobb alsó átló
    [i, j] = [row, col];
    while (i >= 0 && j < gameBoard.length) {
      if (gameBoard[i][j] === 1) return false;
      i--;
      j++;
    }
  
    return true;
  }
  
  /**
   * calculate the no of queens in a board, a királynők számának kiszámítása a táblán
   * @param gameBoard -> grid of the game, játékrács
   */
  function calcNoOfQueens(gameBoard) {
    let total = 0;
    for (let row in gameBoard)
      for (let col in gameBoard[row]) if (gameBoard[row][col] === 1) total++;
  
    return total;
  }
  

  /**
   * final function to place all the queens, végső funkció az összes királynő elhelyezésére
   * @param gameBoard -> grid of the game
   */
  function placeQueens(gameBoard) {
    // if the total no of queen is same as the board length then algo is over, ha az összes királynő száma megegyezik a tábla hosszával, akkor az algoritmus véget ér
    if (calcNoOfQueens(gameBoard) === gameBoard.length) return true;
  
    for (let i in gameBoard) {
      for (let j in gameBoard[i]) {
        // if there is no queens placed on the current position, ha nincs királynő az aktuális pozícióban
        if (gameBoard[i][j] === 0) {
          //   also if it is valid to place the queen on the current position, és ha érvényes-e a királynőt az aktuális pozícióra helyezni
          if (checkIfQueenCanBePlaced(gameBoard, [i, j])) {
            // place the queen as it is valid, helyezze le a királynőt, ha érvényes
            gameBoard[i][j] = 1;
            ways.push({ i, j, queen: true });
 
            // calling the function, a függvény hívása
            // if it returns false then the current position is not a good position, ha hamisat ad vissza, akkor az aktuális pozíció nem jó pozíció.
            if (!placeQueens(gameBoard)) {
              // then remove the queen that placed currently, akkor távolítsa el a királynőt, amit jelenleg leraktunk
              gameBoard[i][j] = 0;
              ways.push({ i, j, queen: false });
            } else {
              // if the recursive call returns true then the game is over, ha a rekurzív hívás igazat ad vissza, akkor a játéknak vége
              // as it only return true if the no of queens is satisifed with their positions, csak akkor ad vissza igazat, ha a királynők száma megfelel a pozícióiknak.
              return gameBoard;
            }
          }
        }
      }
    }
  
    // there is no position to place the queen, nincs olyan pozíció, ahová a királynőt helyezhetnénk.
    return false;
  }
  
  /********************************************
   ********* DOM MANIPULATION LOGICS ***********
   *********************************************/
  
  // variables for the DOM manipulation
  const gameBoardDiv = document.getElementById("gameBoard");
  const nInput = document.getElementById("nInput");
  const solveBtn = document.getElementById("solveBtn");
  const lepesBtn = document.getElementById("resetBtn");
  const speedRange = document.getElementById("speed");
  const progressBar = document.getElementById("progress");
  const immediateBtn = document.getElementById("immediate");
  const spinner = document.getElementById("spinner");
  let N; // denotes the no of queens to be placed, a kihelyezendő királynők száma
  const ways = [];
  const speedToMs = {
    0: 400,
    1: 300,
    2: 200,
    3: 100,
    4: 50,
    5: 1,
  };
  
  const handleNChange = (newN) => {
    // N should be between 4 and 10 to maintain recursive calls limited
    newN = Math.min(9, newN);
    newN = Math.max(4, newN);
  
    makeBoard(newN);
    return newN;
  };
  
  // whenever user changes N, make the board and store it
  nInput.addEventListener("change", (event) => {
    N = parseInt(event.target.value);
    N = handleNChange(N);
    event.target.value = N;
  });
  
  //enter gomb lenyomásával is elindul
  nInput.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
      resetGame();
      await solveBoard();
    }
  });
  
  // solve the board when user clicks on solve button
  solveBtn.addEventListener("click", async () => {
    resetGame();
    await solveBoard();

  });

/*     // solve the board when user clicks on solve button
    lepesBtn.addEventListener("click", async () => {
      placeQueens();
    }); */







    

    document.getElementById('resetBtn').onclick = function(){

      resetGame();
      const ways = [];
        // emptying the array
    ways.splice(0, ways.length);
    // resetting progress bar
    progressBar.style.width = "0px";
      // solving the game programatically
      const board = new Array(N).fill(0).map(() => new Array(N).fill(0));
      new Array(N).fill(0).forEach((row, i) => {
        new Array(N).fill(0).forEach((col, j) => {
          const squareDiv = document.getElementById(`${i}_${j}`);
          squareDiv.innerText = "";
        });
      });

  }



  
  /**
   * make the board for the given N
   * @param n -> size of the array cube
   */
  function makeBoard(n) {
    const boardDiv = document.createElement("div");
    for (let i = 0; i < n; i++) {
      const rowDiv = document.createElement("div");
  
      for (let j = 0; j < n; j++) {
        const colDiv = document.createElement("div");
        colDiv.id = `${i}_${j}`;
        colDiv.className = "border square";
        rowDiv.appendChild(colDiv);
      }
  
      rowDiv.className = "row square__row";
      boardDiv.appendChild(rowDiv);
    }
  
    gameBoardDiv.innerHTML = boardDiv.innerHTML;
  }
  


  /**
   * solve the board with DOM manipulation
   * @param solveMethod -> method of solving
   */
  async function solveBoard() {
    switchInputsDisabled(true);
    spinner.classList.toggle("active");
  
    // emptying the array
    ways.splice(0, ways.length);
    // resetting progress bar
    progressBar.style.width = "0px";
  
    // solving the game programatically
    const board = new Array(N).fill(0).map(() => new Array(N).fill(0));
    const solvedBoard = await placeQueens(board);
  
    await sleep(1000);
    spinner.classList.toggle("active");
  
    // getting the delay time user entered
    const delayTiming = speedToMs[parseInt(speedRange.value)];
    await setAllValuesWithMethod(delayTiming);
  
    switchInputsDisabled(false);
  }
  
  /**
   * setting values of the grid with the given delay
   */
  async function setAllValuesWithMethod(delayTiming) {
    for (let way in ways) {
      progressBar.style.width = `${parseFloat((way / (ways.length - 1)) * 100)}%`;
      const { i, j, queen } = ways[way];
      console.log(ways[way]); //itt iratom ki a lepeseket, es h helyes v sem
      // setting the steps performed in DOM with the given delay,  a DOM-ban végrehajtott lépések beállítása a megadott késleltetéssel
      setQueen(i, j, queen);
    
      await sleep(delayTiming);
    }
  }
  
  /**
   * reset the game board on DOM
   */
  function resetGame() {
    new Array(N).fill(0).forEach((row, i) => {
      new Array(N).fill(0).forEach((col, j) => {
        const squareDiv = document.getElementById(`${i}_${j}`);
        squareDiv.innerText = "";
      });
    });
  }
  
  /**
   * set the Queen in DOM
   */
  function setQueen(i, j, queen) {
    const squareDiv = document.getElementById(`${i}_${j}`);
    squareDiv.innerText = queen ? "♛" : "";
  }
  
  /**
   * delay the execution for ms milliseconds
   * @param ms -> milliseconds to delay
   */
  function sleep(ms) {
    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        resolve();
      }, ms);
    });
  }
  
  /**
   * switch all the input disabled values
   * @param disabled -> boolean value for disabled value
   */
  function switchInputsDisabled(disabled) {
    solveBtn.disabled = disabled;
    speedRange.disabled = disabled;
    nInput.disabled = disabled;
  }
  
  const initialN = nInput.value ? parseInt(+nInput.value) : 4;
  // make the board initially
  handleNChange(initialN);
  

const initBoard = (rows, cols) =>  new Array(rows).fill().map(() => new Array(cols).fill(false))

const getBoards = (boards) => {
    const [rows, cols] = [9, 9]
    return new Array(boards).fill().map(() => initBoard(rows, cols))

}

const searchGrid = (board, boxes, cols, rows) => {
    const [__rows, __cols] = [9, 9]
    for(let row = 0; row < __rows; row ++){//Time O(rows)
        for(let col = 0; col < __cols; col ++){
            const char = board[row][col]
            const index = (Math.floor(row/3) * 3 ) + Math.floor(col/3)
            console.log(index)
            const isEmpty = char === '.';
            if(isEmpty) continue

            const hasMoved = boxes[index][char]
        }
    }
}

const isValidSudoku = (board) => {
    const boards = 3
    const [boxes, cols, rows] = getBoards(boards)

  return searchGrid(board, boxes, cols, rows)
}

isValidSudoku()
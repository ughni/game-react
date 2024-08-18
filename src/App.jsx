import React from "react"
import { useState } from "react"

function Square({ value, onClickSquer }) {

  return (
    <button onClick={onClickSquer} className="border-2 pointer-events-auto border-sky-500 text-2xl buttons">
      {value}
    </button>
  )
}

function Board() {

  const [squeres, setSqueres] = useState(Array(9).fill(null))

  function heandleClick(i) {
    const nextSquares = squeres.slice()
    nextSquares[i] = 'X'
  }

  return (
    <div className=" justify-center bords mt-14">
      <Square value={squeres[0]} onClickSquer={heandleClick(0)} />
      <Square value={squeres[1]} />
      <Square value={squeres[2]} />
      <Square value={squeres[3]} />
      <Square value={squeres[4]} />
      <Square value={squeres[5]} />
      <Square value={squeres[6]} />
      <Square value={squeres[7]} />
      <Square value={squeres[8]} />
    </div>
  )
}

export default Board

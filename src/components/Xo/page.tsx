import React, { useState } from 'react';

export default function Home() {
  const SYMBOL_X = "X";
  const SYMBOL_O = "O";
    
    const computeWinner = (cells) =>{
      const lines =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ];
      for(let i = 0; i < lines.length; i++) {
        // console.log(lines[i]);
        const [a, b, c] = lines[i];
        if(
        cells[a] &&
        cells[a] === cells[b] &&
        cells[a] === cells[c]
        ){
          return[a,b,c]
        }
      }
    }
    const [cells, setCells] = useState([null, null, null, null, null, null, null, null, null]);
    const [CurrentStep, setCurrentStep] = useState(SYMBOL_O);
    const [winnerSequence, setwinnerSequence] = useState();
    
    const getSymbolClassName = (symbol_) => {
      if(symbol_ === SYMBOL_O) return styles['symbol--O'];
      if(symbol_ === SYMBOL_X) return styles['symbol--X'];
      return '';
    }
    const renderSymbol = (symbol) => <span className={`${styles[symbol]} ${getSymbolClassName(symbol)}`}>{symbol}</span>

    const reset = () =>{
      setCells([null, null, null, null, null, null, null, null, null])
      setCurrentStep(SYMBOL_O)
      setwinnerSequence(undefined)
    }
    const symbolSet = (index) =>{
      if(cells[index] || winnerSequence){
        return;
      };
      const cellsCopy = cells.slice();
      cellsCopy[index] = CurrentStep;
      const winner = computeWinner(cellsCopy);

      setCells(cellsCopy);
      setCurrentStep(CurrentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
      setwinnerSequence(winner)
    }


    const winnerSymbol = winnerSequence ? cells[winnerSequence[0]]: undefined
  return (
    <div className={styles["App"]}>
        <div className={styles['game-info']}>
          {winnerSequence ? 'Победитель -' : 'Ход -'} {renderSymbol(winnerSymbol ?? CurrentStep)}
        </div>
        <div className={styles['game-field']}> 
          {cells.map((symbol__, index) => {
            const isWinner = winnerSequence?.includes(index);
            return <button key={index} className={`${styles['call']} ${isWinner ? styles['cell-win']: ''}`} onClick={() => symbolSet(index)} >{symbol__ ? renderSymbol(symbol__) : null} </button> 
          })}
          
          
        </div>
        <button className="text-7xl text-red-500d" onClick={() => reset()}>Reset</button>
      </div>
    
  )
}

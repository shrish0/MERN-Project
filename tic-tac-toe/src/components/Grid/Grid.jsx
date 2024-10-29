import React, { useState } from 'react'; // Removed Component import as it’s not used
import Card from '../Card/Card';
import "./grid.css";
import isWinner from '../../helperFunction/isWinner';

function Grid({ numberOfCards }) {
    const [board, setBoard] = useState(Array(numberOfCards).fill("")); 
    const [chance, setChance] = useState(true); // true == 'O', false == 'X'
    const [winner, setWinner] = useState(null);

    function play(index) {
        if (board[index] || winner) return; // Prevent moves on already filled cells or if there's a winner

        const newBoard = [...board]; // Create a new array to update state immutably
        newBoard[index] = chance ? "o" : "x"; // Set 'o' or 'x' based on chance

        const win = isWinner(newBoard, chance ? "o" : "x"); // Check if the current player has won
        if (win) {
            setWinner(win);
        }
        
        setBoard(newBoard); // Update the board state with the new board
        setChance(!chance); // Toggle chance
    }

    function reset(){
        setChance(true)
        setWinner(null)
        setBoard(Array(numberOfCards).fill(""))
    }
    return (
        <div className="grid-wrapper">
            <h1> Current Turn: {chance ? "o" : "x"}</h1>
            {winner && ( // Corrected syntax for conditional rendering
            <>
                <h1> Winner: {winner}</h1>
                <button onClick={reset} >Reset Button</button>
                </>
            )}
            <div className="grid">
                {board.map((el, idx) => (
                    <Card key={idx} onPlay={play} index={idx} player={el} /> 
                    // Corrected 'onplay' to 'onPlay' to follow camelCase
                ))}
            </div>
        </div>
    );
}

export default Grid;

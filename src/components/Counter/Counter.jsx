import React from 'react';

const Counter = ({count, cuenta}) =>{

      return (
        <>
          <label>{count}</label>
          <button onClick={() => cuenta(1)}>+1</button>
          <button onClick={() => cuenta(-1)}>-1</button>    
        </>
      )    
}

export default Counter
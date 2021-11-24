import React, { useState } from 'react';

const App = () => {
  const [_result, _setResult] = useState(0)

  const fn = () => {
    document.querySelector('button').addEventListener('click',()=>{
      const n = 0
      const r = n + 1
      _setResult(r)
    })
  }
  return (
    <>
      <p>{_result}</p>
      <button onClick={fn}>1씩 증가</button>
    </>
  );
};

export default App;
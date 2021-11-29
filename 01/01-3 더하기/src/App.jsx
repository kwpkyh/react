import React, { useState } from 'react';

const App = () => {
  const [_result, _setResult] = useState(1)
  const fn = () => {
    _setResult(_result+1)
  }
  return (
    <>
      <p>{_result}</p>
      <button onClick={fn}>1씩 증가</button>
    </>
  );
};

export default App;
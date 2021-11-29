import React, { useRef, useState } from 'react';

const App = () => {
  const [_result, _setResult] = useState(0)
  const refInput1 = useRef()
  const refInput2 = useRef()
  let fn = () => {
    let num1 = parseInt(refInput1.current.value)
    let num2 = parseInt(refInput2.current.value)
    let result = num1 + num2
    _setResult(result)
  }
  return (
    <>
      <p>
        <input onChange={refInput1} type="text" defaultValue="0"/>
        +
        <input onChange={refInput2} type="text" defaultValue="0"/>
      </p>
      <p>{_result}</p>
    </>
  );
};

export default App;
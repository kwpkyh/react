import React, { useRef, useState } from 'react';

const App = () => {
  const [result, setResult] = useState('..')
  const refInput1 = useRef() //객체를 찾을 때 이 이름을 사용하겠다
  const refInput2 = useRef()

  const fn = () => {
    let num1 = parseInt(refInput1.current.value)
    let num2 = parseInt(refInput2.current.value)
    let r = num1 + num2
    setResult(r)
  }
  return (
    <>
      <p>
        <input type="text" ref={refInput1} />
        +
        <input type="text" ref={refInput2} /> 
        = <button onClick={fn}>결과</button>
        <p className="output">답은 {result}입니다</p>
      </p>
    </>
  );
};

export default App;
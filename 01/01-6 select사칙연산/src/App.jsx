import React, { useRef, useState } from 'react';

const App = () => {

  const [result, setResult] = useState(0)
  const refInput1 = useRef()
  const refInput2 = useRef()
  const refSelect = useRef()
  const fn = () => {
    let num1 = parseInt(refInput1.current.value)
    let num2 = parseInt(refInput2.current.value)
    let oper = refSelect.current.value
    let result
    switch(){
      case '+':
        result = num1+num2
        break
      case '-':
        result = num1+num2
        break
      case '*':
        result = num1*num2
        break
      case '/':
        result = num1/num2
        break
    }
    setResult(result)
  }

  return (
    <>
      <p>숫자를 변경하거나, 연산자를 변경하면 값이 바로 변경되요</p>
      <p>
        <input ref={refInput1} onChange={fn} defaultValue="0" type="text" />
        &nbsp;
        <select ref={refSelect} onChange={fn}>{/* 주석 */}
          <option defaultValue="+">+</option>
          <option defaultValue="-">-</option>
          <option defaultValue="*">*</option>
          <option defaultValue="/">/</option>
        </select>
        &nbsp;
        <input ref={refInput2} onChange={fn} defaultValue="0" type="text" />
      </p>
      <p>
        결과 : {result}
      </p>
    </>
  );
};

export default App;
import React, { useRef, useState } from 'react';
const fnSetRandom = () => {
  let num = Math.ceil(Math.random()*9)
  return num
}

const App = () => {
  const [_num1, _setNum1] = useState(fnSetRandom())
  const [_num2, _setNum2] = useState(fnSetRandom())
  const [_result, _setResult] = useState('???')
  const [_point, _setPoint] = useState()
  const refInput = useRef()

  let point = 0
  
  const fnCheckResult = (e) => {
    e.preventDefault()
    //let userNum = document.getElementById('userInput').value
    let userNum = parseInt(refInput.current.value)
    if(_num1 * _num2 === userNum){
      _setResult('정답')
      _setNum1(fnSetRandom())
      _setNum2(fnSetRandom())
      _setPoint(point+=1)
    }else{
      _setResult('오답')
      _setPoint(point-=1)
    }
    refInput.current.value = ''
  }

  return (
    <>
      <p>{_num1}*{_num2}</p><br />
      <form onSubmit={fnCheckResult}>
        <input ref={refInput} id="userInput" type="text" placeholder="답 입력"/>
      </form>
      <p>결과: {_result} 점수: {_point}</p>
    </>
  );
};

export default App;
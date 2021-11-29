import React, { useRef, useState } from 'react';

const App = () => {
  const [_arr, _setArr] = useState( [] )
  const refName = useRef()
  const refAge = useRef()
  let gender = 'male'
  const fnGender = (e) => {
    gender = e.target.value
  }
  const fn = () => {
    let obj = {
      name: refName.current.value,
      age: refAge.current.value,
      gender
    }
    _setArr([..._arr, obj])
  }
  return (
    <>
      <p>이름, 나이, 성별 입력하면 명단 출력</p>
      이름: <input ref={refName} type="text" /> <br />
      나이: <input ref={refAge} type="text" /> <br />
      성별: <input onChange={fnGender} type="radio" name="gender" defaultValue="여"/>여 
            <input onChange={fnGender} type="radio" name="gender" defaultValue="남"/>남
      <button onClick={fn}>추가</button>
      <hr />
      <p>
        {_arr.map((v)=>{
          return `(이름: ${v.name}, 나이: ${v.age}, 성별: ${v.gender})`
        })}
      </p>
    </>
  );
};

export default App;
import React, { useRef, useState } from 'react';

const App = () => {
  const [_women, _setWomen] = useState([])
  const [_men, _setMen] = useState([])
  const refNameInput = useRef()
  const refAgeInput = useRef()
  let gender
  const fnAdd = () => {
    let name = refNameInput.current.value
    let age = refAgeInput.current.value
    let obj = {
      name,
      age,
      gender
    }
    if (obj.gender === "female") {
      _setWomen([..._women, obj])
    } else {
      _setMen([..._men, obj])
    }
    console.log(obj);
  }

  const fnChangeGender = (e) => {
    gender = e.target.value
    console.log(gender);
  }
  return (
    <>
      <p>이름, 나이, 성별을 입력 후 버튼 클릭하면 성별 기준 구분 출력</p>
      이름: <input ref={refNameInput} type="text" /> <br />
      나이: <input ref={refAgeInput} type="text" /> <br />
      <input onChange={fnChangeGender} defaultValue="female" type="radio" name="gender" />여
      <input onChange={fnChangeGender} defaultValue="male" type="radio" name="gender" />남
      <br />
      <button onClick={fnAdd}>추가</button>
      <hr />
      여자 명단
      <p>
        {_women.map((v) => {
          return `(${v.name}, ${v.age})`
        })}
      </p>
      <hr />
      남자 명단
      <p>
        {_men.map((v) => {
          return `(${v.name}, ${v.age})`
        })}
      </p>
    </>
  );
};

export default App;
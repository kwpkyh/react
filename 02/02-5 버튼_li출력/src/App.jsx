import React, { useRef, useState } from 'react';

const App = () => {
  const [_arr, _setArr] = useState([])
  const refNameInput = useRef()
  const refAgeInput = useRef()
  
  const fnAdd = () => {
    let name = refNameInput.current.value
    let age = refAgeInput.current.value
    let obj = {
      key: Date.now(),
      name,
      age
    }
    console.log(obj);
    _setArr([..._arr,obj])
  }
  const fnDel = (e) => {
    let key = parseInt(e.target.getAttribute('data-key'))
    let arr = _arr.filter((v)=>{
      return v.key !== key
    })
    _setArr([...arr])
  }
  return (
    <>
      <p>이름, 나이, 성별을 입력 후 버튼 클릭하면 성별 기준 구분 출력</p>
      이름: <input ref={refNameInput} type="text" /> <br />
      나이: <input ref={refAgeInput} type="text" /> <br />
      <br />
      <button onClick={fnAdd}>추가</button>
      <hr />
      명단
      {
        _arr.map((v)=>{
          return (
            <li key={v.key}>
              <strong>{v.name}</strong>
              &nbsp;
              <i>{v.age}</i>
              <button data-key={v.key} onClick={fnDel}>삭제</button>
            </li>
          )
        })
      }
    </>
  );
};

export default App;
import React, { useRef, useState } from 'react';

const App = () => {
  const [_arr, _setArr] = useState([])
  const refInput = useRef()

  const fn = (e) => {
    e.preventDefault()
    let name = refInput.current.value
    //let arrCopy = [..._arr] //기존 배열을 arrCopy에 복사
    //arrCopy.push(name) //복사된 배열에 이름 추가
    //_setArr(arrCopy)
    _setArr([..._arr, name])
    refInput.current.value=''
  }
  return (
    <>
      <p>이름 입력 후 버튼 클릭하면 명단 출력</p>
      <form onSubmit={fn}>
        <input ref={refInput} type="text" />
      </form>
      <p>
        명단: 
        {_arr.map((v)=>{
          return v+','
        })}
      </p>
    </>
  );
};

export default App;
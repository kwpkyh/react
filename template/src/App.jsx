import React, { useState } from 'react';

const App = () => {
  let [name,setName] = useState('홍길동') //let name = '홍길동'

  let fn = (e) => {
    setName(e.target.innerText) //name = e.target.innerHTML    
  }
  return (
    <>
      <p>안녕하세요.. {name}입니다</p>

      <button onClick={fn}>홍길동</button> 
      <button onClick={fn}>아무개</button>
    </>
  );
};

export default App;
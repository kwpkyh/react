import React from 'react';

const App = () => {
  return (
    <>
      <p>이름, 나이, 성별을 입력 후 버튼 클릭하면 성별 기준 구분 출력</p>
      이름: <input type="text" /> <br />
      나이: <input type="text" /> <br />
      <input type="radio" />여
      <input type="radio" />남
      <br />
      <button>추가</button>
      <hr />
      여자 명단
      <p></p>
      <hr />
      남자 명단
      <p></p>
    </>
  );
};

export default App;
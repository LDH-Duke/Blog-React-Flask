import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/members").then(
      // response 객체의 json() 이용하여 json 데이터를 객체로 변화
      res => res.json()
    ).then(
      // 데이터를 콘솔에 출력
      data => {
        setData(data)
        console.log(data)
      }
    )
  },[])
  
  return (
    <div className="App">
    </div>
  );
}

export default App;
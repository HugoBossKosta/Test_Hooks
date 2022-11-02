import React, { useState } from 'react'

// useState(Хранит состояние в функ компоненте)

function useStateCount() {

  // count- стартовое состояние
  // setCount- функция, запускающая обновление состояния


  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
  }

  const handleMinus = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <button onClick={handlePlus}>Увеличить</button>
      <button onClick={handleMinus}>Уменьшить</button>
      <br/>
      {count}
    </div>
  );
}

export default useStateCount;

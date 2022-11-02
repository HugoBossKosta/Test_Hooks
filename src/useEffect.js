import React, { useEffect, useRef, useState } from 'react'

//  useEffect выполнение сетевых запросов или отрисовка события после монтирования и отрисовки компонентов

// 1) делаем действия после того как элемент отрендириться 

// function App() {
//   const title = useRef(null);
// useEffect(() => {
//   console.log(title);
// })

//   return (
//     <div className="App">
//       <h1 ref={title} >Заголовок страницы</h1>
//     </div>
//   );
// }

// export default App;

// 2) Когда нам нужно что-то сделать что должно произойти один раз

// function App() {

//   const [users, setUsers] = useState([]);
  
  
// useEffect(() => {
//   fetch('https://reqres.in/api/users?per_page=12')
//   .then((response) => response.json())
//   .then((users) => setUsers(users.data))
// }, []) // [] указывает хуку на то, что выволнение должно произойти один раз

//   return (
//     <div className="App">
//       {users.map(user => {
//         return (
//           <h1>{user.first_name}</h1>

//         )
//       } )}

//     </div>
//   );
// }

// export default App;


// 3)Когда нам необходимо отвязаться от какого-то события

// function App() {

//   const [count, setCount] = useState(0);
  
  
// useEffect(() => {
//   const flagCount =  setInterval(() => {
//       setCount(count+1);
//       console.log('fild');
//     }, 1000)

//     return () => clearInterval(flagCount)

// }) 

//   return (
//     <div className="App">
//       {count}
//     </div>
//   );
// }

// export default App;
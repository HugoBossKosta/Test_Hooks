import React, { useState, useRef } from 'react'

// useState(Хранит состояние в функ компоненте)

function App() {

const inputTitle = useRef(null);
const inputDescripion = useRef(null);




  // count- стартовое состояние
  // setCount- функция, запускающая обновление состояния

  const [posts, setPosts] = useState([
    {
      title: 'Заголовок 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora nam eos qui iste a esse ad veritatis quam eligendi aliquam culpa in sunt, mollitia facere repudiandae ut pariatur deleniti!',
    }
  ]);

const handleCreatePost = () => {
  setPosts([
    ...posts,
    {
      title: inputTitle.current.value,
      description: inputDescripion.current.value
    }
  ])
  inputTitle.current.value = '';
  inputDescripion.current.value = '';


}

  return (
    <div className="App">
      <button onClick={handleCreatePost}>Создать пост</button>
      <br />
      <input ref ={inputTitle} type="text" />
      <br />
      <textarea ref ={inputDescripion} name="" id="" cols="30" rows="10"></textarea>
      {posts.map((post, i) => {
        return (
          <div key={i} className="">
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
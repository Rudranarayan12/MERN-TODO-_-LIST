import React, { useEffect, useState } from 'react';
import './Home.css';
import Create from './Create';
import axios from 'axios';

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:4000/get") 
      .then(result => setTodos(result.data))
      .catch(err => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios.put("http://127.0.0.1:4000/update/"+id)
      .then(result => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  const handleDelete = (id) => {
    axios.delete("http://127.0.0.1:4000/delete/"+id)
      .then(result => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <Create />
      {
        todos.length === 0 ? <div><h2>No Record's</h2></div> :
          todos.map(todo => (
            <div className="task" key={todo._id}>
              <div className="checkbox" onClick={() => handleEdit(todo._id)}>
                <input type="checkbox" />
                <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
              </div>
              <div>
                <button onClick={() => handleDelete(todo._id)}>delete</button>
              </div>
            </div>
          ))
      }
    </div>
  );
};

export default Home;

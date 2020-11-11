import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import ToDo from './toDo';
import "./App.css";
import { db } from './firebaseConfig';
import firebase from 'firebase';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todos, setTodos] = useState("");

  useEffect(() => {
  //  for db to load
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      //console.log(snapshot.docs.map(doc => doc.data()))
      setTodoList(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [])

  const handleChange = (e) => {
    e.preventDefault();
    console.log(todos);
    if (todos.length > 0) {
      db.collection('todos').add({
        todo : todos,
        timestamp : firebase.firestore.FieldValue.serverTimestamp()
      })
    }
    setTodos("");
  };

  return (
    <div className="App">
      <h1>Hello world</h1>
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Add todo ...</InputLabel>
          <Input
            value={todos}
            onChange={(e) => setTodos(e.target.value)}
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleChange}
        >
          Add
        </Button>
      </form>
      <ul>
        {todoList.map((data, i) => {
          return <ToDo key={i} data={data}/>;
        })}
      </ul>
    </div>
  );
}

export default App;

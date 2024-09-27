"use client";

import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

function TodoList() {
  // Define types for the state variables
  type Todo = {
    id: number;
    text: string;
  };

  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  useEffect(() => {
    // Load todos from localStorage on initial render (client-side only)
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  const handleAddTodo = () => {
    if (newTodo !== "") {
      const updatedTodos = [...todos, { id: Date.now(), text: newTodo }];
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <Container maxWidth="sm">
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5">Todo List</Typography>
              <TextField
                value={newTodo}
                onChange={(event) => setNewTodo(event.target.value)}
                placeholder="Add new todo..."
                fullWidth
                margin="normal"
              />
              <Button
                onClick={handleAddTodo}
                variant="contained"
                color="primary"
              >
                Add Todo
              </Button>
            </CardContent>
          </Card>
        </Grid>
        {todos.map((todo) => (
          <Grid item key={todo.id} xs={12}>
            <Card>
              <CardContent>
                <Typography variant="body1">{todo.text}</Typography>
                <Button
                  onClick={() => handleDeleteTodo(todo.id)}
                  variant="contained"
                  color="secondary"
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default TodoList;

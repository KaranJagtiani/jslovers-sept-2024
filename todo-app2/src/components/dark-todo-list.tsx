"use client"

import { useState } from "react"
import { Check, Plus, Trash, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Todo {
  id: number
  text: string
  completed: boolean
}

export function DarkTodoListComponent() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState("")

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }])
      setNewTodo("")
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const markAllCompleted = () => {
    setTodos(todos.map(todo => ({ ...todo, completed: true })))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-white mb-4">Todo List</h1>
        <div className="flex mb-4">
          <Input
            type="text"
            placeholder="Add a new task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addTodo()}
            className="flex-grow mr-2 bg-gray-700 text-white placeholder-gray-400 border-gray-600"
          />
          <Button onClick={addTodo} className="bg-blue-500 hover:bg-blue-600">
            <Plus className="h-5 w-5" />
          </Button>
        </div>
        <ul className="space-y-2 mb-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center bg-gray-700 rounded p-2"
            >
              <Button
                onClick={() => toggleTodo(todo.id)}
                variant="ghost"
                className={`mr-2 ${
                  todo.completed ? "text-green-500" : "text-gray-400"
                }`}
              >
                <Check className="h-5 w-5" />
              </Button>
              <span
                className={`flex-grow ${
                  todo.completed ? "line-through text-gray-500" : "text-white"
                }`}
              >
                {todo.text}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between">
          <Button
            onClick={markAllCompleted}
            variant="outline"
            className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white"
          >
            <CheckCircle2 className="h-5 w-5 mr-2" />
            Mark All
          </Button>
          <Button
            onClick={clearCompleted}
            variant="outline"
            className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
          >
            <Trash className="h-5 w-5 mr-2" />
            Clear Completed
          </Button>
        </div>
      </div>
    </div>
  )
}
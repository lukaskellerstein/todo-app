import { useState } from 'react'
import './App.css'

interface Todo {
  id: number
  text: string
  completed: boolean
}

const sampleTodos: Todo[] = [
  { id: 1, text: 'Buy groceries for the week', completed: false },
  { id: 2, text: 'Finish quarterly report', completed: true },
  { id: 3, text: 'Schedule dentist appointment', completed: false },
  { id: 4, text: 'Read "Designing Data-Intensive Applications"', completed: false },
  { id: 5, text: 'Update project dependencies', completed: true },
  { id: 6, text: 'Go for a 30-minute run', completed: false },
]

function App() {
  const [todos, setTodos] = useState<Todo[]>(sampleTodos)
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

  const addTodo = () => {
    const text = input.trim()
    if (!text) return
    setTodos([...todos, { id: Date.now(), text, completed: false }])
    setInput('')
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(t => !t.completed))
  }

  const filteredTodos = todos.filter(t => {
    if (filter === 'active') return !t.completed
    if (filter === 'completed') return t.completed
    return true
  })

  const remaining = todos.filter(t => !t.completed).length

  return (
    <div className="page">
      <header className="topbar">
        <div className="topbar-brand">Todo App</div>
        <div className="topbar-user">
          <img
            className="topbar-avatar"
            src="https://ui-avatars.com/api/?name=Lukas+K&background=7c3aed&color=fff&size=80&bold=true"
            alt="User avatar"
          />
        </div>
      </header>

      <main className="app">
        <h1>My Todos</h1>

        <div className="input-row">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addTodo()}
          />
          <button onClick={addTodo}>Add</button>
        </div>

        {todos.length > 0 && (
          <>
            <ul className="todo-list">
              {filteredTodos.map(todo => (
                <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                  <label>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                    />
                    <span>{todo.text}</span>
                  </label>
                  <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                    &times;
                  </button>
                </li>
              ))}
            </ul>

            <div className="todo-footer">
              <span>{remaining} item{remaining !== 1 ? 's' : ''} left</span>
              <div className="filters">
                <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
                <button className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>Active</button>
                <button className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>Completed</button>
              </div>
              <button className="clear-btn" onClick={clearCompleted}>Clear completed</button>
            </div>
          </>
        )}
      </main>

      <footer className="page-footer">
        <p>&copy; {new Date().getFullYear()} Lukas Kellerstein. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

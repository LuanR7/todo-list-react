import { useState, useEffect } from 'react';
import { Header } from './componentes/Header';
import {TaskInput} from './componentes/Taskinput';
import { TaskList } from './componentes/TaskList';
import './App.css'; 

const LOCAL_STORAGE_KEY = 'todo:saved-tasks';

export function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function handleAddTask(taskTitle) {
    const newTask = {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    };
    setTasks([...tasks, newTask]);
  }

  function handleToggleTask(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function handleDeleteTask(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <TaskInput onAddTask={handleAddTask} />
        <TaskList 
          tasks={tasks} 
          onToggleTask={handleToggleTask} 
          onDeleteTask={handleDeleteTask} 
        />
      </main>
    </div>
  );
}

export default App;
import { TaskItem } from './TaskItem';
import './TaskList.css';

export function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <section className="task-list-section">

      <header className="list-header">
        <div className="counter-group created">
          <span>Tarefas criadas</span>
          <span className="badge">{totalTasks}</span>
        </div>

        <div className="counter-group completed">
          <span>Concluídas</span>
          <span className="badge">
            {totalTasks === 0 ? '0' : `${completedTasks} de ${totalTasks}`}
          </span>
        </div>
      </header>

      {tasks.length === 0 ? (
        <div className="empty-state">
        
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.3333 11.6667H42C43.2377 11.6667 44.4247 12.1583 45.2998 13.0335C46.175 13.9087 46.6667 15.0957 46.6667 16.3333V46.6667C46.6667 47.9043 46.175 49.0913 45.2998 49.9665C44.4247 50.8417 43.2377 51.3333 42 51.3333H14C12.7623 51.3333 11.5753 50.8417 10.7002 49.9665C9.825 49.0913 9.33334 47.9043 9.33334 46.6667V16.3333C9.33334 15.0957 9.825 13.9087 10.7002 13.0335C11.5753 12.1583 12.7623 11.6667 14 11.6667H18.6667" stroke="#333333" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M32.6667 7H23.3333C22.0438 7 21 8.0438 21 9.33333V14C21 15.2895 22.0438 16.3333 23.3333 16.3333H32.6667C33.9562 16.3333 35 15.2895 35 14V9.33333C35 8.0438 33.9562 7 32.6667 7Z" stroke="#333333" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className="bold">Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      ) : (
        <div className="task-items-container">
          {tasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onToggleTask={onToggleTask} 
              onDeleteTask={onDeleteTask} 
            />
          ))}
        </div>
      )}
    </section>
  );
}
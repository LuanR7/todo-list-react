import './TaskItem.css';

export function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <div className={`task-item ${task.isCompleted ? 'completed' : ''}`}>

      <button 
        className={`checkbox ${task.isCompleted ? 'checked' : ''}`}
        onClick={() => onToggleTask(task.id)}
        aria-label="Marcar tarefa"
      >
        {task.isCompleted && (
          <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4.5L4.33333 8L11 1" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      <p className="task-text">{task.title}</p>

      <button 
        className="delete-button" 
        onClick={() => onDeleteTask(task.id)}
        aria-label="Deletar tarefa"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.75 3.5H3.0625H12.25" stroke="#808080" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.375 3.5V2.33333C4.375 2.02391 4.49792 1.72717 4.71671 1.50838C4.9355 1.28958 5.23225 1.16667 5.54167 1.16667H8.45833C8.76775 1.16667 9.0645 1.28958 9.28329 1.50838C9.50208 1.72717 9.625 2.02391 9.625 2.33333V3.5M11.0833 3.5V11.6667C11.0833 11.9761 10.9604 12.2728 10.7416 12.4916C10.5228 12.7104 10.2261 12.8333 9.91667 12.8333H4.08333C3.77391 12.8333 3.47717 12.7104 3.25838 12.4916C3.03958 12.2728 2.91667 11.9761 2.91667 11.6667V3.5H11.0833Z" stroke="#808080" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}
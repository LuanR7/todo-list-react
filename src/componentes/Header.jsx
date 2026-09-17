import './Header.css';

export function Header() {
  return (
    <header className="header">
      <div className="logo">
        <svg width="22" height="36" viewBox="0 0 22 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.82 0C10.82 0 15.68 7.37 15.68 15.71C15.68 18.8 14.73 21.6 13.1 23.86L10.82 20.65L8.54 23.86C6.91 21.6 5.96 18.8 5.96 15.71C5.96 7.37 10.82 0 10.82 0Z" fill="#4EA8DE"/>
          <path d="M21.64 19.33C20.89 25.17 16.37 29.8 10.82 29.8C5.27 29.8 0.75 25.17 0 19.33H4.29C5.01 22.82 8.08 25.48 10.82 25.48C13.56 25.48 16.63 22.82 17.35 19.33H21.64Z" fill="#5E60CE"/>
          <path d="M10.82 36C8.2 33.2 6.55 29.47 6.55 25.48H15.09C15.09 29.47 13.44 33.2 10.82 36Z" fill="#4EA8DE"/>
        </svg>
        <span className="logo-to">to</span>
        <span className="logo-do">do</span>
      </div>
    </header>
  );
}
import React from 'react';
import '../styles/App.css';

interface NavigatorProps {
  active: string;
  setActive: (page: string) => void;
}

const Navigator: React.FC<NavigatorProps> = ({ active, setActive }) => {
  const items = ['Home', 'About', 'Skills', 'Projects'];

  return (
    <nav className="navigator">
      <ul>
        {items.map((item) => (
          <li
            key={item}
            className={`navigator-item ${active === item ? 'active' : ''}`}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigator;

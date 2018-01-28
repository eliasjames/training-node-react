import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav className="ttt-nav">
        <ul>
          <li>
            <Link to="/game">
              Game
            </Link>
          </li>
          <li>
            <Link to="/player">
              Player
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

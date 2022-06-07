import React from 'react'
import Navbar from '../Navbar/Navbar';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <h1>Southern Cannibal</h1>
      </div>
      <Navbar />
    </header>
  )
}

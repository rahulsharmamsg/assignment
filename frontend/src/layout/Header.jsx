import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
   <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    
    <a className="btn btn-ghost text-xl">Assignment</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to={'/'} > Home</Link></li>
      <li>
        <details>
          <summary>Question</summary>
          <ul className="p-2">
            <li><Link to={'/'} > Question 1</Link></li>
            <li><Link to={'/'} > Question 2</Link></li>
            <li><Link to={'/'} > Question 3</Link></li>
            <li><Link to={'/todo'} > Question 4</Link></li>
          </ul>
        </details>
      </li>
     
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
  )
}

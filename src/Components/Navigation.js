import React from 'react';
import './Navigation.css';

export const Navigation = () => {
  return (
    <nav>
      <div>
        <h1 className='logo'>tweeter</h1>
      </div>
      <button className='compose' type='button'>
        <div><b>Write</b> a new tweet</div>
        <div className='arrow'>&#8964;</div>
        <div className='arrow'>&#8964;</div>
      </button>
    </nav>
  );
}
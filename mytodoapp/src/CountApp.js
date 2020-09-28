import React from 'react';


class CountApp extends React.Component {
  render() {
    return (
      <div>
        <h1>カウンターApp</h1>
        <p>0</p>
        <div>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    );
  }
}
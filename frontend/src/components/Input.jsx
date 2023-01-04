import React from 'react';

export default function Input({ onChange }) {
  return (
    <div>
      <div>
        <button>Respectful</button>
        <button>Casual</button>
        <button>Excited</button>
      </div>
      <textarea cols='50' rows='10' onChange={onChange}></textarea>
    </div>
  );
}

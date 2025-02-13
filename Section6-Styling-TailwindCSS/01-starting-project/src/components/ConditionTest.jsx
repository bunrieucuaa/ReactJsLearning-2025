import { useState } from "react";
import "./test.css";

export default function ConditionTest() {
  const [selectedButton, setSelectedButton] = useState("white"); // Mặc định là white

  return (
    <div>
      <h1 style={{ color: selectedButton }}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => setSelectedButton("green")}>Yes</button>
        </li>
        <li>
          <button onClick={() => setSelectedButton("red")}>No</button>
        </li>
      </menu>
    </div>
  );
}

// import React from 'react';

// function App() {
//   const [choice, setChoice] = React.useState(null);

//   let textColor = 'white';

//   if (choice === 'yes') {
//     textColor = 'green';
//   } else if (choice === 'no') {
//     textColor = 'red';
//   }

//   return (
//     <div id="app">
//       <h1 style={{ color: textColor }}>CSS is great!</h1>
//       <menu>
//         <li>
//           <button onClick={() => setChoice('yes')}>Yes</button>
//         </li>
//         <li>
//           <button onClick={() => setChoice('no')}>No</button>
//         </li>
//       </menu>
//     </div>
//   );
// }

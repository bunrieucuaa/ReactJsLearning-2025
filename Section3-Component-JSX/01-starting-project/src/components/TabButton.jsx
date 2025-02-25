//Component Compositions
// 2 cách đều cho ra chung 1 kết quả, nó tùy vào sở thích cá nhân

//children cho phép truyền nội dung con vào giữa các thẻ của component.

//const MyComponent = ({ children }) => {
//   return <div>{children}</div>;
// };

// // Sử dụng:
// <MyComponent>
//   <p>This is a child element</p>
// </MyComponent>

//{...props} giúp truyền tất cả các props còn lại vào một component con hoặc phần tử.

//const MyComponent = ({ title, ...props }) => {
//   return <div {...props}>{title}</div>;
// };

// // Sử dụng:
// <MyComponent title="Hello" className="my-class" id="unique-id" />

export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

// export default function TabButton({ label }) {
//   return (
//     <li>
//       <button>{label}</button>
//     </li>
//   );
// }

// function App() {
//     return (
//       <div id="app">
//         <h1>Available Experts</h1>
//         <Card name="Anthony Blake">
//           <p>
//             Blake is a professor of Computer Science at the University of
//             Illinois.
//           </p>
//           <p>
//             <a href="mailto:blake@example.com">Email Anthony</a>
//           </p>
//         </Card>

//         <Card name="Maria Miles">
//           <p>
//             Maria is a professor of Computer Science at the University of
//             Illinois.
//           </p>
//           <p>
//             <a href="mailto:blake@example.com">Email Maria</a>
//           </p>
//         </Card>
//       </div>
//     );
//   }

//   export default App;

//   export default function Card({ name, children }) {
//     return (
//       <article className="card">
//         <h2>{name}</h2>
//         {children}
//       </article>
//     );
//   }

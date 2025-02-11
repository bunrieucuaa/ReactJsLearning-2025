// import reactImg from "./assets/react-core-concepts.png";
// import { CORE_CONCEPTS } from "./data";

// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.img} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

// function Header() {
//   const description = reactDescriptions[genRandomInt(2)];
//   return (
//     <header>
//       <img src={reactImg} alt="Stylized atom" />
//       <h1>React Essentials</h1>
//       <p>
//         {description} React concepts you will need for almost any app you are
//         going to build!
//       </p>
//     </header>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Header />
//       <main>
//         <section id="core-concepts">
//           <h2>Time to get started!</h2>
//           <ul>
//             <CoreConcept
//               title="Components"
//               description="The core UI building block."
//               img={componentsImg}
//             />
//             <CoreConcept />
//           </ul>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default App;

//Props truyền giá trị từ components cha xuống components con
//Ví dụ các cách sử dụng
//Cách 1 Truyền props từ component cha xuống component con

// function ChildComponent(props) {
//   return <h1>Xin chào, {props.name}!</h1>;
// }

// function ParentComponent() {
//   return <ChildComponent name="Alice" />;
// }

//Cách 2 Sử dụng destructuring để lấy giá trị props
// function ChildComponent({ name }) {
//   return <h1>Xin chào, {name}!</h1>;
// }

//Cách 3 Truyền nhiều props Bạn có thể truyền nhiều props cùng lúc. giống ví dụ mẫu

// function ChildComponent({ name, age }) {
//   return (
//     <p>
//       {name} năm nay {age} tuổi.
//     </p>
//   );
// }

// function ParentComponent() {
//   return <ChildComponent name="Alice" age={25} />;
// }

//Cách 4 sử dụng Array hoặc Objects
// function ChildComponent({ name, age }) {
//   return (
//     <p>
//       {name} năm nay {age} tuổi.
//     </p>
//   );
// }

// function ParentComponent() {
//   return <ChildComponent name="Alice" age={25} />;
// }

//Mảng
// function ListComponent({ items }) {
//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   );
// }

//Cách 5 - Truyền bằng defaultProps

// function UserCard({ name, age }) {
//   return (
//     <div>
//       <h2>Tên: {name}</h2>
//       <p>Tuổi: {age}</p>
//     </div>
//   );
// }

// // Định nghĩa giá trị mặc định
// UserCard.defaultProps = {
//   name: "Người dùng ẩn danh",
//   age: 18,
// };

// function App() {
//   return (
//     <div>
//       {/* Trường hợp 1: Truyền đầy đủ props */}
//       <UserCard name="Alice" age={25} />

//       {/* Trường hợp 2: Không truyền props -> Sử dụng giá trị mặc định */}
//       <UserCard />
//     </div>
//   );
// }

//Cách 7 - Truyền hàm qua Props
// function ButtonComponent({ onClick }) {
//   return <button onClick={onClick}>Bấm vào tôi</button>;
// }

// function ParentComponent() {
//   const handleClick = () => {
//     alert("Đã bấm nút!");
//   };

//   return <ButtonComponent onClick={handleClick} />;
// }

// function App() {
//   return <ListComponent items={["Apple", "Banana", "Cherry"]} />;
// }

//Ví dụ Udemy
import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
  //Cách sử dụng useState
  //Cách đúng: Sử dụng destructuring
  //Bạn cần tách giá trị của mảng mà useState trả về bằng destructuring:

  //const [price, setPrice] = useState(100);
  //📌 Giải thích:

  //price là giá trị state ban đầu (100).
  //setPrice là hàm để cập nhật price.
  //+👉 Khi muốn thay đổi giá trị của state, bạn gọi setPrice(newValue), thay vì gọi lại useState().

  const [selectedTopic, setSelectedTopic] = useState();
  // const [buttonState, setStateButton] = useState(true);

  // function onClickButton(stateOfButton) {
  //   setStateButton(stateOfButton);
  //   console.log(stateOfButton);
  //   console.log(buttonState);
  // }

  //C2 to show selected topic
  let tabContent = <p>Please select a topic...</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  function handleSelected(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelected("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelected("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelected("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelected("state")}
            >
              State
            </TabButton>
          </menu>
          {/* {!selectedTopic ? (
            <p>Please select a topic...</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
          {tabContent}
        </section>
      </main>

      {/* <div>
        {buttonState === false ? (
          <div data-testid="alert" id="alert">
            <h2>Are you sure?</h2>
            <p>These changes can't be reverted!</p>
            <button onClick={() => onClickButton(true)}>Proceed</button>
          </div>
        ) : (
          <button onClick={() => onClickButton(false)}>Delete</button>
        )}
      </div> */}
    </div>
  );
}

export default App;

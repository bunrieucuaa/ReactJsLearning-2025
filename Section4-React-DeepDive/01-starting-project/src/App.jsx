import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    //Để như vậy hoặc sử dụng fragments
    //useState sau mỗi lần sử dụng đều gọi lại cả App nên nó thực thi lại
    // nên thanh text ở header mới thực thi hàm random nên cần split riêng rẽ các component
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;

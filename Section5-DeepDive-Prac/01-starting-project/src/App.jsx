import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useState } from "react";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">Please enter a durration greater than zero!</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;

//Khi nào không cần cập nhật trạng thái cũ:
// Khi trạng thái không phụ thuộc vào giá trị cũ: Nếu trạng thái là một giá trị đơn giản (ví dụ: một số nguyên, chuỗi, boolean) và bạn không cần phải dựa vào giá trị cũ để tính toán giá trị mới, bạn có thể cập nhật trạng thái trực tiếp mà không cần giữ lại giá trị cũ.

// Ví dụ (đơn giản với giá trị boolean):

// const [isActive, setIsActive] = useState(false);

// const toggleActive = () => {
//   setIsActive(!isActive); // Không cần phải giữ giá trị cũ, chỉ cần thay đổi giá trị
// };
// Tóm lại:
// Cập nhật trạng thái cũ khi trạng thái là đối tượng hoặc mảng và bạn muốn thay đổi một phần tử mà không làm mất các phần còn lại của đối tượng/mảng.
// Không cần cập nhật trạng thái cũ khi trạng thái là một giá trị đơn giản và không phụ thuộc vào trạng thái cũ để tính toán giá trị mới.

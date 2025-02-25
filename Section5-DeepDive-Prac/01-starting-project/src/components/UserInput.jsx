// import { useState } from "react";

export default function UserInput({ onChangeInput, userInput }) {
  //   const [userInput, setUserInput] = useState({
  //     initialInvestment: 10000,
  //     annualInvestment: 1200,
  //     expectedReturn: 6,
  //     durration: 10,
  //   });

  //   const handleChange = (inputIdentifier, newValue) => {
  //     setUserInput((prevUserInput) => {
  //       return {
  //         ...prevUserInput,
  //         [inputIdentifier]: newValue,
  //       };
  //     });
  //   };

  //Explained for the [inputIdentifier]: newValue
  //   function updateObject(obj, key, value) {
  //     return { ...obj, [key]: value };
  //   }
  //   const user = { name: "John", age: 25 };
  //   const updatedUser = updateObject(user, "age", 30);
  //   console.log(updatedUser); // { name: "John", age: 30 }


  //&& a true => b

  //?? a null hoặc undefined -> hiện b

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChangeInput("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChangeInput("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChangeInput("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChangeInput("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

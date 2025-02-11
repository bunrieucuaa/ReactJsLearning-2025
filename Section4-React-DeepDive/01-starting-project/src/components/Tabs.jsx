// export default function Tabs({ children, buttons, buttonsContainer }) {
//   const ButtonsContainer = buttonsContainer;
//   return (
//     <>
//       <ButtonsContainer>{buttons}</ButtonsContainer>
//       {children}
//     </>
//   );
// }

//Second choice for the tabs
// export default function Tabs({ children, buttons, ButtonsContainer }) {
//   return (
//     <>
//       <ButtonsContainer>{buttons}</ButtonsContainer>
//       {children}
//     </>
//   );
// }

//Third choice for the tabs is set the default value for buttons container
export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

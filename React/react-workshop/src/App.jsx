// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import PrintName from "./Components/PrintName";
import Test from "./Components/Test";

// function App() {
//   const [count, setCount] = useState(0)

//   return(
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
function App() {
  return (
    <>
      <h1 className="h1">Disu Makadiya</h1>
      <h2>hiii</h2>
      <Test />
      <PrintName name="Disu Makadiya" des="CEO"/>
      <PrintName name="XYZ" des="Manager"/>
    </>
  );
}

export default App;

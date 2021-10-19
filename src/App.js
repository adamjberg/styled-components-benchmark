import { Number } from "./Number";

function App() {
  const numbers = [];
  for (let i = 0; i < 1000; i++) {
    numbers.push({
      number: i,
      width: Math.round(Math.random() * 500)
    });
  }

  return (
    <div className="App">
      {numbers.map((number) => {
        return <Number key={number.number} number={number}/>
        // return <div>{number}</div>
      })}
    </div>
  );
}

export default App;

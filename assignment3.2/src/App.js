import './App.css';

function App() {
  const data = ["Hello", "World"]
  const number1 = 5;
  const number2 = 6;
  const string = "I love React";


  return (
    <div className="App">
      <h2>Q1</h2>
      <p><span>{data[0]}</span> <span>{data[1]}</span></p>
      <h2>Q2</h2>
      <p>
        <span>{number1}</span> + <span>{number2}</span> = 
        <span>{number1 + number2}</span>
      </p>
      <h2>Q3</h2>
      <p>The string's length is: <span>{string.length}</span></p>
    </div>
  );
}

export default App;

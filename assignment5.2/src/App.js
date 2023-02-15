import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div class="container">
      <Card
        image="https://picsum.photos/200/300"
        title="some random image"
        description="some random description"
        link1="#"
        link1Name="some random link"
        link2="#"
        link2Name="some random link"
      />
      <Card
        image="https://picsum.photos/200/300"
        title="some random image"
        description="some random description"
        link1="#"
        link1Name="some random link"
        link2="#"
        link2Name="some random link"
      />
      <Card
        image="https://picsum.photos/200/300"
        title="some random image"
        description="some random description"
        link1="#"
        link1Name="some random link"
        link2="#"
        link2Name="some random link"
      />
    </div>
  );
}

export default App;

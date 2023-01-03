import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Card from './components/Card';
import data from './resources/data';

function App() {
  const cardData = data.map((item, idx) => {
    return <Card
      key={idx}
      {...item}
    />
  })
  return (
    <div className="App">
      <Nav />
      <section className="pl-20 pr-20 pt-20 pb-20">
        {cardData}
      </section>
    </div>
  );
}

export default App;

import './App.css';
import Quote from './components/Quote'; 
import Logo from './components/Logo';
import BackgroundCirlce from './components/BackgroundCirlce';



function App() {
  return (
    <>
      <div className="App">
        <Quote text="hello" />
        <Logo />
      </div>
      <BackgroundCirlce />
    </>

  );
}

export default App;

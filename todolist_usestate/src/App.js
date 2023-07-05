import './App.css';
import Container from './Container';
import AppChat from '../src/useEffectExcercises/Excercise1/AppChat'
import AppPointer from '../src/useEffectExcercises/Excercise2/AppPointer'
function App() {
  return (
    <>
      <Container />
      <hr />
      <h1>These is useEffect excercise in custom Hooks</h1>
      <AppChat />
      <hr />
      <AppPointer />
    </>
  );
}

export default App;

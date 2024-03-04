import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/itemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos al mundo del vapeo"/>
    </>
  )
}

export default App
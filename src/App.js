import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
      <div className='container'>
        <List />

        <AddToList />
      </div>
  );
}

export default App;

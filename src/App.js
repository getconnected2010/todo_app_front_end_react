import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';
import Update from './components/Update';
import Avatar from './components/Avatar';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, BrowserRouter as Router, Route} from "react-router-dom";
import NavigationBar from './components/NavigationBar';

function App() {
  return (
      <Router>
        <div className='container'>
          <NavigationBar />
          <Routes>
            <Route path='/' element={<List/>} />
            <Route path='/list' element={<List/>} />
            <Route path='/add' element={<AddToList/>} />
            <Route path='/update' element={<Update />} />
            <Route path='/avatar' element={<Avatar />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;

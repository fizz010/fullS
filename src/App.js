
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import UpdateUser from './users/UpdateUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/add" element={<AddUser />}></Route>
          <Route exact path="/updateuser/:id" element={<UpdateUser />}></Route>
        </Routes>

      </Router>

    </div>
  );
}

export default App;


import './App.css';
import AllRoute from './Routes/AllRoute';
import Dashboard from './component/Dashboard/Dashboard';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Sidebar from './component/SideBar/Sidebar';

function App() {

  return (
    <div className="App">
      
      <Navbar />

     <AllRoute />

    </div>
  );
}

export default App;

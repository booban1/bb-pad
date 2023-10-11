// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import HomeLoad from './comp/HomeLoad';
import NoteBody from './pages/NoteBody.js';

function App() {
      return (
            <div className="App">
                  {/* <HomeLoad/> */}
                  <Routes>
                        <Route path="/" element={<HomeLoad/>}></Route>
                        <Route path="/notebody" element={<NoteBody />}></Route>
                  </Routes>
            </div>

      );
}

export default App;

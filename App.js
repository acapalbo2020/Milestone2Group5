import Home from './home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Detail from './detail';
import CreateNew from './createNew';
import List from './list'



function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/Detail" element={<Detail/>} />
            <Route exact path="/List" element={<List/>} />
            <Route exact path="/CreateNew" element={<CreateNew/>} />
            <Route exact path="/Home" element={<Home/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
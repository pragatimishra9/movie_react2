import Home from './container/Home';
import Signin from './container/Signin';
import Signup from './container/Signup';
import Addmovie from './container/Addmovie';
import Moviecard from './Component/Moviecard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Addtags from './container/Addtags';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/addmovie" element={<Addmovie />} />
          <Route exact path="/addtag" element={<Addtags />} />
          <Route exact path="/movie/:id" element={<Moviecard />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

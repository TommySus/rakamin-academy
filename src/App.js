import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Page from './components/Page';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/v1" element={<Page/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

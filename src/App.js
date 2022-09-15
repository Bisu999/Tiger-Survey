import logo from './logo.png';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CreateSurvey from './component/create-survey';
import { Button } from 'reactstrap';


function App() {
  return (
    <div className="App">
    <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"  /></header>
    <Router>
     
        <Routes>
          <Route path="/create" ></Route>
          <Route path="/take">Take Survey</Route>
          <Route path="/">
            
              <Link to="/create"> <Button className="survey-main-btn">Create Survey</Button></Link> 
              <Link to="/take"> <Button className="survey-main-btn">Take Survey</Button></Link>
        
          </Route>
        </Routes>
      
    </Router> 
    </div>
  );
}

export default App;

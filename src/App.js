import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import About from './components/About';
import Cards from './components/Cards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import './index.css';
import 'react-bootstrap';

function App() {
  // const [currentPage, handlePageChange] = useState('About');
  // const displayPage = () => {
    
    // //switch case for conditional rendering
    // switch(currentPage) {
    //   case "about": 
    //   return <About></About>
    //   case "contact": 
    //   return <Contact></Contact>
    //   case "portfolio":
    //   return  <Projects></Projects>
    //   default:
    //     return <About></About>
    
  //https://reactrouter.com/web/guides/quick-start
  return (
    <Router basename={process.env.PUBLIC_URL}>
            <Nav />
            <main className="body">
                <div>
                    <Switch>
                        <Route exact path="/"component={ About }></Route>
                        <Route exact path="/portfolio"component={ Cards }></Route>
                        <Route exact path="/contact" component={ Contact }></Route>
                        <Route path="*" component={ About }></Route>
                    </Switch>
                </div>
            </main>
            <Footer/>
            
        </Router>
);
}

export default App;

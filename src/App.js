import logo from './logo.svg';
import Nav from '../Nav';
import About from '../About';
import Cards from '../Cards';
import Contact from '../Contact';
import Resume from '../Resume'; // won't need this will I?
import './App.css';

function App() {

  const displayPage = () => {
    switch(currentPage) {
      case "about": 
      return <About></About>
      case "contact": 
      return <Contact></Contact>
      case "portfolio":
      return  <Cards></Cards>
      default:
        return <About></About>
    }
  }
  return (
    <div>
    <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    <div>
      {
        // conditional rendering
        displayPage()
      }
    </div>
  </div>
);
}

export default App;

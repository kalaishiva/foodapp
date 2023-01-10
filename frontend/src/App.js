import  './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Dishesbtn from './components/Dishesbtn';
import DishesCard from './components/DishesCard';
import BestSeller from './components/BestSeller';
import OurStory from './components/OurStory';

function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <Hero />
     <Dishesbtn />
     <DishesCard />
     <BestSeller />
     <OurStory />
    </div>
  );
}

export default App;



import Navbar from './components/Navbar.js';
import Landingpage from './components/Landingpage.js';
import Nationality from './components/Nationality.js';
import Services from './components/Services.js';
import Customer from './components/Customer.js';
import Restaurant from './components/Restaurant.js';
import Comingsoon from './components/Comingsoon.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Landingpage /> 
      <Nationality />
      <Services />
      <Customer />
      <Restaurant />
      <Comingsoon />
      <Footer />     
    </div>
  );
}

export default App;

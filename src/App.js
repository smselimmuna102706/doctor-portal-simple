import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Website from './Comonents/Website/Website';
import Home from './Comonents/Pages/Home';
import Activities from './Comonents/Pages/Activities';
import News from './Comonents/Pages/News';
import Footer from './Comonents/Pages/Footer';

function App() {
  return (
    <div>
       <Website />
       <Home />
       <Activities />
       <News />
       <Footer />

    </div>
  );
}

export default App;

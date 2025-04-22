import './App.css';
import Footer from './component/Footer';
import Navbar from './component/navbar/Navbar';
import News2 from './component/news/News2';
import SnuNumbers from './component/snuNumbers/SnuNumbers';

function App() {
  return (
    <div>
      {/* <UtilityBar/> */}
      <Navbar />
      <SnuNumbers />

      <News2 />
      <Footer />

    </div>
  );
}

export default App;

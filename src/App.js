import './App.css';
import Footer from './component/Footer';
import ImageSlider from './component/ImageSlider';
import Navbar from './component/navbar/Navbar';
import News2 from './component/news/News2';
import Repost from './component/Repost';
import SnuNumbers from './component/snuNumbers/SnuNumbers';

function App() {
  return (
    <div>
      {/* <UtilityBar/> */}
      <Navbar />
      <SnuNumbers />
<Repost/>
      <News2 />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;

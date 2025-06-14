import './App.css';
import HomeCarrocel from './compoments/home-carrocel';
import HomeText from './compoments/home-text';
import MidleCard from './compoments/midle-card';
import MultilpeCards from './compoments/multilpe-cards';
function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-cyan-400 to-blue-700 ">
        <div className='py-48'>
          <HomeCarrocel />
          <HomeText />
        </div>
      </div>
      <div className='flex flex-col bg-white justify-center items-center'>
        <MidleCard />
       <MultilpeCards/>
      </div>
    </>
  );
}
export default App;

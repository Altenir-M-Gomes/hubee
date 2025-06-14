import './App.css';
import HomeCarrocel from './compoments/home-carrocel';
import HomeText from './compoments/home-text';
import MidleCard from './compoments/midle-card';
import MultilpeCards from './compoments/multilpe-cards';
import MultipleBusCards from './compoments/multiple-bus';
import bus from './assets/bus.svg';

function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-cyan-400 to-blue-700">
        <div className='py-48'>
          <HomeCarrocel />
          <HomeText />
        </div>
      </div>
      <div className='flex flex-col bg-white justify-center items-center'>
        <MidleCard />
        <MultilpeCards />
        <h1 className='text-center text-blue-700 text-2xl p-16'>
          Conteúdos atualizados sobre o que<br /> importa pra você — descubra o que<br /> está acontecendo na cidade!
        </h1>
      </div>
      <div className='bg-gradient-to-b from-blue-700 to-cyan-400 rounded-t-[2vw] w-full flex flex-col justify-center items-center'>
        <h1 className='font-bold text-4xl text-white pt-10 mb-4'>Para onde você vai?</h1>
        <img
          src={bus}
          alt="Imagem de um ônibus"
          className=''>
        </img>
      </div>
      <div className='px-[500px] py-10 '>
        <MultipleBusCards />
      </div>
      <div className='flex flex-col justify-center items-center bg-white'>
        <h1  className='text-blue-700 text-2xl p-16 justify-center items-center text-center'>
          Confira as rotas de cada linha - agora é <br/>só escolher o melhor caminho
        </h1>
      </div>
    </>
  );
}
export default App;

import logo from './logo.svg';
import './App.css';
import HomeCarrocel from './compoments/home-carrocel';

function App() {
  return (
    <div className="bg-gradient-to-r from-cyan-400 to-blue-700 ">
      <div className='py-48'>
        <HomeCarrocel />
        <div className="block text-center">
          <div className='py-8'>
            <h1 className='font-bold text-8xl text-white pt-10'>
              Bem-vindos
            </h1>
            <p className="italic text-yellow-200 text-xl mt-2">
              a cidade em movimento com você no centro
            </p>
          </div>
          <p className="text-white justify-center text-2xl mt-10  py-8">
            Conectando a comunidade à <br />
            cultura, serviços e negócios locais <br />
            por meio da interatividade.
          </p>
        </div>
      </div>

    </div>
  );
}
export default App;

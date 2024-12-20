import './App.css';
import TransferList from './TransferList';

function Hero() {
  return (
    <div className="hero py-6 text-center shadow-lg w-full text-xl font-semibold">
      <h1>Transfer List</h1>
    </div>
    );
}

function App() {
  return (
    <div>
      <Hero></Hero>
      <div className='flex justify-center items-center'>
        <TransferList></TransferList>
      </div>
    </div>
  );
}

export default App;

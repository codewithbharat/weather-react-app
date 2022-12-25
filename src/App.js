import './App.css';
import CurrentWeather from './components/currentWeather/currentWeather';
import Search from './components/search/Search';



function App() {

  const handelOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className='container'>
      <Search onSearchChange={handelOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './common/Header'
import Footer from './common/Footer'
import TypesExample from './common/example';
import BasicExample from './common/loading'



function App() {
  return (
    <div className="App">
      <Header/>
      <TypesExample/>
      <BasicExample/>
      <Footer/>
    </div>
  );
}

export default App;
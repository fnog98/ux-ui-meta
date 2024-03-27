import logo from './logo.svg';
import './App.css';
import Nav from './componets/Nav.js'
import Header from './componets/Header.js';
import Main from './componets/Main.js';
import Footer from './componets/Footer.js';

function App() {
  return (
    <>
    {/* <header></header> */}
    <Header/>
    <Nav/>
    <Main/>
    <Footer/>
    {/* <main></main>
    <footer></footer> */}
    </>
  );
}

export default App;

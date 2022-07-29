import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {

  const monga = 'test';
  const DATA = [
    { id: 1, name: 'test1' },
    { id: 2, name: 'test2' },
    { id: 3, name: 'test3' },
    { id: 4, name: 'test4' }
  ]
  return (
    <>
      <Header monga={monga} member={DATA} />
      <Main />
      <Footer />
    </>
  );
}

export default App;

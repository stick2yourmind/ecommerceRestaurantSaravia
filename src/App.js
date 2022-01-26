import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <section>
          <ItemListContainer list='Lista de productos' />
        </section>
      </main>
    </>
  );
}

export default App;

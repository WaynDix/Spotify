import Album from "./components/Album";
import MenuBar from "./components/MenuBar";
import MusicsList from "./components/MusicsList";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <MainRoutes />
      <MenuBar />
      <Album/>
      <MusicsList/>
    </>
  );
}

export default App;

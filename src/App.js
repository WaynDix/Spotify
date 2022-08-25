import Album from "./components/Album";
import MenuBar from "./components/MenuBar";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <MainRoutes />
      <MenuBar />
      <Album/>
    </>
  );
}

export default App;

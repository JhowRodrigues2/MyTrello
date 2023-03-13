import Board from "./components/Board";
import { Header } from "./components/Header";
import GlobalStyle from "./styles/GlobalStyle";
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Board />
    </>
  );
}

export default App;

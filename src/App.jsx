import Board from "./components/Board";
import { MyTrelloContextProvider } from "./components/context";
import { Header } from "./components/Header";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <MyTrelloContextProvider>
      <GlobalStyle />
      <Header />
      <Board />
    </MyTrelloContextProvider>
  );
}

export default App;

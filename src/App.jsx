import Board from "./components/Board";
import { Header } from "./components/Header";
import GlobalStyle from "./styles/GlobalStyle";
import { DragDropContext } from "react-beautiful-dnd";
function App() {
  return (
    <DragDropContext>
      <GlobalStyle />
      <Header />
      <Board />
    </DragDropContext>
  );
}

export default App;

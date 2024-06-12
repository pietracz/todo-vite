import * as React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import TodoList from "./components/todolist";

function App() {
  return (
    <>
      <Header />
      <TodoList />
      <Footer />
    </>
  );
}

export default App;

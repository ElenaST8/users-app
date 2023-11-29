import "./app.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext, useState } from "react";
// import Footer from "./components/Footer/Footer";

export const UsersContext = createContext();

const App = () => {
  const [usersCount, setUsersCount] = useState(0);
  // const numberToPass = 10;

  return (
    <UsersContext.Provider value={{ usersCount, setUsersCount }}>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </UsersContext.Provider>
  );
};

export default App;

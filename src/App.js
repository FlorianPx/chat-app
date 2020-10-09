import React from "react";
import "./App.css";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        picture="https://randomuser.me/api/portraits/men/39.jpg"
        firstName="Murray"
        name="Paul"
        online={true}
      />
      <Contact
        picture="https://randomuser.me/api/portraits/men/3.jpg"
        firstName="Mcdona"
        name="Loren"
        online={false}
      />
      <Contact
        picture="https://randomuser.me/api/portraits/men/11.jpg"
        firstName="Alvarez"
        name="Luis"
        online={true}
      />
    </div>
  );
}

export default App;

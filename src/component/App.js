import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";



function App() {
  const [notes,setNotes] = useState([]);

  function addNotes(noteContent){
    setNotes (prevNotes =>{
      return [...prevNotes,noteContent];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea  onAdd = {addNotes}/>
      {notes.map((item) => { 
        return (
        <Note key={item.key} title={item.title} content={item.content} />);
      })}
      <Footer />
    </div>
  );
}

export default App;

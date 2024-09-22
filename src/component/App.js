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

  function deleteNotes (id){
    setNotes (prevNotes =>{
      return prevNotes.filter((noteItem ,index)=>{
        return index !== id
      })
    });
  }

  return (
    <div>
      <Header />
      <CreateArea  onAdd = {addNotes}/>
      {notes.map((item,index) => { 
        return (
        <Note id = {index} key={index} title={item.title} content={item.content} onDelete = {deleteNotes}/>);
      })}
      <Footer />
    </div>
  );
}

export default App;

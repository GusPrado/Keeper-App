import React, {useState} from "react";

export default function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function handleChange(event){
    const {name, value} = event.target
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function handleAddNote(event){
    props.onAdd(note)
    event.preventDefault()
    setNote({
      title: "",
      content: ""
    })
  }

  return (
    <div>
      <form>
        <input value={note.title} onChange={handleChange} name="title" placeholder="Title" />
        <textarea value={note.content} onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={handleAddNote}>Add</button>
      </form>
    </div>
  );
}

import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom'

export default function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false)


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
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault() 
  }

  function handleExpand(){
    setExpanded(true)
  }

  return (
    <div> 
      <form className="create-note">
        { isExpanded && (<input 
          value={note.title} 
          onChange={handleChange} 
          name="title" 
          placeholder="Title" 
        />
        )}
        <textarea
          onClick={handleExpand}
          value={note.content} 
          onChange={handleChange} 
          name="content" 
          placeholder="Take a note..." 
          rows={isExpanded ? 3 : 1} 
        />
        <Zoom in={isExpanded}>
          <Fab onClick={handleAddNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

import { useContext, useState } from 'react';
import './App.css';
import NotiesLogo from './photo/Noties3.png';
import Note from './components/Note';
import { noteContext } from './context/noteContext';

function App() {
  const [showcard, setSetShowCard] = useState(false);
  const [newText, setNewText] = useState("");
  const { notes, addNote } = useContext(noteContext);

  const renderNotes = () => {
    return notes?.map((note, idx) => <Note text={note.text} date={note.date} id={idx}/>);
  };

  const handleAdd = () => {
    const newCard = {
      text: newText,
      date: Date.now()
    };

    setNewText("");
    setSetShowCard(false);

    addNote(newCard);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <img src="/photo/Noties3.png" alt="Noties Logo" />
        {/* <h3>Noties</h3> */}

        <div className="addNotes">
          <p>Tambah Catatan</p>
          <button className='btn' onClick={() => setSetShowCard(!showcard)}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>

      <div className="content">
        <h1>Catatan Kamu</h1>
        <p>Yuk, mulai nulis catatan seru kamu! Jangan sampai ada yang kelewat</p>

        <div className="notes-container">
          {showcard && (     
              <div className="new-note note">
                <textarea 
                  value={newText} 
                  onChange={(e) => setNewText(e.target.value)} 
                  cols={50} 
                  rows={20}>
                </textarea>

                <button className="btn" onClick={handleAdd}>
                  <i className="fa-solid fa-check"></i>
              </button>
          </div>
          )}

          {renderNotes()}
        </div>
      </div>
    </div>
  );
}

export default App

import React, { useEffect, useState } from "react";
import "../Styles/ViewNote.css";
import { useParams } from "react-router-dom";
import logo from "../images/logo.png";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function ViewNote() {
  const NotesCollection = collection(db, "notes");

  const [NoteData, setNoteData] = useState(null);

  const route = useParams();

  const getNotes = async () => {
    const data = await getDocs(NotesCollection);
    let notesArr = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    let finalArr = notesArr.filter((res) => res.user === route.user);

    return finalArr;
  };

  useEffect(() => {
    (async function () {
      await getNotes()
        .then((res) => {
          console.log(res);
          setNoteData(res);
        })
        .catch((err) => {
          setNoteData("error");
          console.log(err);
        });
    })();
  }, []);

  if (NoteData !== null) {
    return (
      <div className="View_div">
        <div className="Note_bar">
          <img src={logo} alt="logo" />
          <h2>Your Notes</h2>
        </div>

        <div className="note_array">
          {NoteData.map((val, index) => (
            <div className="note" key={index}>
              <h4
                style={{
                  fontWeight: val.titleBold === true ? "bold" : "initial",
                  textTransform: val.titleCapital === true ? 'capitalize' : val.titleUpper === true ? 'uppercase' : 'lowercase',
                  fontSize: val.titleFont
                }}
              >
                {val.title}
              </h4>
              <p style={{
                fontWeight: val.paraBold === true ? "bold" : "initial",
                textTransform: val.paraCapital === true ? 'capitalize' : val.paraUpper === true ? 'uppercase' : 'lowercase',
                fontSize: val.paraFont
              }} >{val.para}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100vh' }}>
        <img className="rotate" src={logo} />
      </div>
    )
  }
}

export default ViewNote;

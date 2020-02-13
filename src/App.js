import React, { useState } from "react";

import Entries from "./components/Entries/Entries";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [entries, modifyEntries] = useState({
    subject: "",
    text: "",
    entryArray: []
  });

  const addToEntries = () => {
    const entry = {
      text: entries.text,
      subject: entries.subject
    };
    modifyEntries({
      text: "",
      subject: "",
      entryArray: [...entries.entryArray, entry]
    });
  };

  const modifyText = e => {
    modifyEntries({ ...entries, [e.target.name]: e.target.value });
  };

  const deleteFromArray = id => {
    modifyEntries({
      ...entries,
      entryArray: entries.entryArray.filter(
        entry => entry !== entries.entryArray[id]
      )
    });
  };

  return (
    <div className="App">
      <Header>
        <Form
          entryText={entries.text}
          entrySub={entries.subject}
          update={modifyText}
          add={addToEntries}
        />
      </Header>
      <Main>
        {entries.entryArray.length === 0 ? (
          <h1 className="text-center">Nothing to show - Add someting</h1>
        ) : (
          <Entries
            deleteFromArray={deleteFromArray}
            entries={entries.entryArray}
          />
        )}
      </Main>
    </div>
  );
}

export default App;

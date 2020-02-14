import React, { useState } from "react";

import Entries from "./components/Entries/Entries";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  // Initializing state with react hooks
  const [entries, modifyEntries] = useState({
    subject: "",
    text: "",
    entryArray: []
  });

  //function to add entry to entry array
  //and clearing out text
  const addToEntries = () => {
    const entry = {
      text: entries.text,
      subject: entries.subject
    };
    //modifyEntries is the only function that can
    //change the state using react hooks
    modifyEntries({
      text: "",
      subject: "",
      entryArray: [...entries.entryArray, entry]
    });
  };

  //modify text is used to change either text or subject
  //depending on the input "name" attribute
  const modifyText = e => {
    modifyEntries({ ...entries, [e.target.name]: e.target.value });
  };

  //create an empty array and use a for loop
  //to copy every item EXCEPT the item we want to
  //delete, then overwrite array in state
  const deleteFromArray = id => {
    let entryArrayCopy = [];
    let itemToDelete = entries.entryArray[id];

    for (let i = 0; i < entries.entryArray.length; i++) {
      if (entries.entryArray[i] !== itemToDelete) {
        entryArrayCopy.push(entries.entryArray[i]);
      }
    }

    modifyEntries({ ...entries, entryArray: entryArrayCopy });
  };

  return (
    <div className="App">
      <Header>
        <Form
          //props passed down to children
          subject={entries.subject}
          text={entries.text}
          update={modifyText}
          add={addToEntries}
        />
      </Header>
      <Main>
        {/*
          show a message saying to add something if
          there is nothing in the array
        */}
        {entries.entryArray.length === 0 ? (
          <h1 className="text-center">Nothing to show - Add something</h1>
        ) : (
          //entries will loop through entryArray andd
          //display an Entry for each
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

/*
        ,----,
      ,/   .`|
    ,`   .'  :  ,---,                        ____
  ;    ;     /,--.' |                      ,'  , `.
.'___,/    ,' |  |  :       ,---.       ,-+-,.' _ |
|    :     |  :  :  :      '   ,'\   ,-+-. ;   , ||             .--.--.
;    |.';  ;  :  |  |,--. /   /   | ,--.'|'   |  || ,--.--.    /  /    '
`----'  |  |  |  :  '   |.   ; ,. :|   |  ,', |  |,/       \  |  :  /`./
    '   :  ;  |  |   /' :'   | |: :|   | /  | |--'.--.  .-. | |  :  ;_
    |   |  '  '  :  | | |'   | .; :|   : |  | ,    \__\/: . .  \  \    `.
    '   :  |  |  |  ' | :|   :    ||   : |  |/     ," .--.; |   `----.   \
    ;   |.'   |  :  :_:,' \   \  / |   | |`-'     /  /  ,.  |  /  /`--'  /
    '---'     |  | ,'      `----'  |   ;/        ;  :   .'   \'--'.     /
              `--''                '---'         |  ,     .-./  `--'---'
                                                  `--`---'

*/

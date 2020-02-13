import React from "react";

import Entry from "./Entry/Entry";

function Entries(props) {
  return (
    <div>
      {props.entries.map((entry, index) => (
        //loops through entries array and shows a
        //an entry for each
        <Entry
          //props
          key={index}
          _id={index}
          updateEntry={props.updateEntry}
          deleteFromArray={props.deleteFromArray}
          subject={entry.subject}
          text={entry.text}
        />
      ))}
    </div>
  );
}

export default Entries;

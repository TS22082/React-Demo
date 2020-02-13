import React from "react";

import Entry from "./Enrty/Entry";

function Entries(props) {
  return (
    <div>
      {props.entries.map((element, index) => (
        <Entry
          key={index}
          _id={index}
          updateEntry={props.updateEntry}
          deleteFromArray={props.deleteFromArray}
          subject={element.subject}
          text={element.text}
        />
      ))}
    </div>
  );
}

export default Entries;

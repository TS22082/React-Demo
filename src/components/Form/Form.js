import React from "react";

function Form(props) {
  //if the category is empty it will make the border red, otherwise
  //it will be green
  function checkNotEmpty(category) {
    if (category.length > 0) {
      return "form-control border border-success";
    } else {
      return "form-control border border-danger";
    }
  }

  //this function will disable or enable the button
  //based on whether or not text or sub values are empty
  function verifySubmit() {
    if (!props.text || !props.subject) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <form>
      <div class="form-group">
        <label>Subject</label>
        <input
          onChange={props.update}
          placeholder="Add Subject"
          name="subject"
          value={props.subject}
          type="text"
          class={checkNotEmpty(props.subject)}
        />
      </div>
      <div class="form-group">
        <label>Text</label>
        <textarea
          onChange={props.update}
          placeholder="Add Text"
          name="text"
          value={props.text}
          class={checkNotEmpty(props.text)}
          rows="3"
        ></textarea>
      </div>
      <button
        onClick={() => props.add()}
        type="button"
        class={"btn btn-primary"}
        disabled={verifySubmit()}
      >
        Submit
      </button>
    </form>
  );
}

export default Form;

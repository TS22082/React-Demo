import React from "react";

function Form(props) {
  function checkNotEmpty(category) {
    if (category.length > 0) {
      return "form-control border border-success";
    } else {
      return "form-control border border-danger";
    }
  }

  function verifySubmit() {
    if (!props.entryText || !props.entrySub) {
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
          value={props.entrySub}
          type="text"
          class={checkNotEmpty(props.entrySub)}
        />
      </div>
      <div class="form-group">
        <label>Text</label>
        <textarea
          onChange={props.update}
          placeholder="Add Text"
          name="text"
          value={props.entryText}
          class={checkNotEmpty(props.entryText)}
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

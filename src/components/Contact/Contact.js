import React from "react";

const Contact = () => {
  return (
    <div>
      <div class="input-group mb-1 p-3">
        <span class="input-group-text">First and last name</span>
        <input type="text" aria-label="First name" class="form-control" />
        <input type="text" aria-label="Last name" class="form-control" />
      </div>
      <div class="mb-1 p-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="p-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Comment or Message
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="button" class="btn btn-primary">
        Submit
      </button>
    </div>
  );
};

export default Contact;

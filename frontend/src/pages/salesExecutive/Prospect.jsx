import React from "react";
import "../../style/salesExecutive/prospect.css";

function Prospect() {
  // const handleSubmit = () => {}; TODO  form submission handling

  return (
    <>
      {/* <h1>Prospect Page Under Construction</h1> */}
      <main>
        <div id="prospect-container">
          <div id="card">
              <h1>Prospect</h1>
            <form id="prospect-form">
{/* <div id="form-box"></div> */}
              <div id="form-row">
                <label for="form-row">Company Name</label>
                <input type="text" id="company" name="company" />
              </div>

              <div id="form-row">
                <label for="client">Client Name</label>
                <input type="text" id="client" name="client" />
              </div>

              <div id="form-row">
                <label for="email">Email_id</label>
                <input type="email" id="email" name="email" />
              </div>

              <div id="form-row">
                <label for="contact">Contact no.</label>
                <input type="text" id="contact" name="contact" />
              </div>

              <div id="form-row">
                <label for="reminder">Reminder Date</label>
                <input type="text" id="reminder" name="reminder" />
              </div>

              <div id="form-row">
                <label for="comment">Comment</label>
                <textarea id="comment" name="comment" rows="4"></textarea>
              </div>

              <div
                id="form-row"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <button type="submit" id="update-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Prospect;

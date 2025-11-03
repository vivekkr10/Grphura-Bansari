import React, { useState } from "react";
import "../../style/salesExecutive/userData.css";

const UserData = () => {
  const [showUpdatePopup, setShowUpdatepopup] = useState(false);

  const openUpdatePopup = () => setShowUpdatepopup(true);
  const closeUpdatePopup = () => setShowUpdatepopup(false);
  return (
    <main>
      <section id="userData-container">
        <div id="container">
          <div id="clients">
            <h1>User Data</h1>
            <div id="client-list">
              <table>
                <thead>
                  <th> </th>
                  <th>Company Name</th>
                  <th>Client Name</th>
                  <th>Email_id</th>
                  <th>Contact no.</th>
                  <th>Reminder Date</th>
                  <th>Activity</th>
                  <th>Last Update</th>
                </thead>
                <tr>
                  <td>1</td>
                  <td>Graphura India</td>
                  <td>Vivek Kumar</td>
                  <td>vivek@gmail.com</td>
                  <td>0123456789</td>
                  <td>10/10/25</td>
                  <td>
                    <button onClick={openUpdatePopup}>Update</button>
                  </td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Graphura India</td>
                  <td>Vivek Kumar</td>
                  <td>vivek@gmail.com</td>
                  <td>0123456789</td>
                  <td>10/10/25</td>
                  <td>
                    <button onClick={openUpdatePopup}>Update</button>
                  </td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Graphura India</td>
                  <td>Vivek Kumar</td>
                  <td>vivek@gmail.com</td>
                  <td>0123456789</td>
                  <td>10/10/25</td>
                  <td>
                    <button onClick={openUpdatePopup}>Update</button>
                  </td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Graphura India</td>
                  <td>Vivek Kumar</td>
                  <td>vivek@gmail.com</td>
                  <td>0123456789</td>
                  <td>10/10/25</td>
                  <td>
                    <button onClick={openUpdatePopup}>Update</button>
                  </td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Graphura India</td>
                  <td>Vivek Kumar</td>
                  <td>vivek@gmail.com</td>
                  <td>0123456789</td>
                  <td>10/10/25</td>
                  <td>
                    <button onClick={openUpdatePopup}>Update</button>
                  </td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Graphura India</td>
                  <td>Vivek Kumar</td>
                  <td>vivek@gmail.com</td>
                  <td>0123456789</td>
                  <td>10/10/25</td>
                  <td>
                    <button onClick={openUpdatePopup}>Update</button>
                  </td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
              </table>
              {showUpdatePopup && (
                <div id="popup-overlay" onClick={closeUpdatePopup}>
                  <div id="popup-box" onClick={(e) => e.stopPropagation()}>
                    <div id="popup-header">
                      <h3>Update Call Details</h3>
                      <button id="close-btn" onClick={closeUpdatePopup}>
                        Close
                      </button>
                    </div>

                    <div id="popup-content">
                      <div className="radio-group">
                        <label>
                          <input type="radio" name="status" value="talk" /> Talk
                        </label>
                        <label>
                          <input type="radio" name="status" value="not-talk" />{" "}
                          Not Talk
                        </label>
                        <label>
                          <input type="radio" name="status" value="delete" />{" "}
                          Delete Client’s Profile
                        </label>
                      </div>

                      <div className="comment-section">
                        <label htmlFor="comment">Comment</label>
                        <textarea id="comment" placeholder=""></textarea>
                      </div>

                      <button id="update-btn">Update</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserData;

import React from 'react'
import './SalesExecutiveProspect.css'


function SalesExecutiveProspect() {


    // const handleSubmit = () => {}; TODO  form submission handling



  return (
    <>
    {/* <h1>Prospect Page Under Construction</h1> */}
    <div className='prospect-container'>
    <div className="card">
      <form className="prospect-form">
    <h1>Prospect</h1>

        <div className='form-row'>
            <label for="form-row">Company Name</label>
            <input type="text" id="company" name="company" />
        </div>

        <div className='form-row'>
            <label for="client">Client Name</label>
            <input type="text" id="client" name="client" />
        </div>

        <div className="form-row">
          <label for="email">Email_id</label>
          <input type="email" id="email" name="email"/>
        </div>

        <div className="form-row">
          <label for="contact">Contact no.</label>
          <input type="text" id="contact" name="contact" />
        </div>

        <div className="form-row">
          <label for="reminder">Reminder Date</label>
          <input type="text" id="reminder" name="reminder" />
        </div>

        <div class="form-row">
          <label for="comment">Comment</label>
          <textarea id="comment" name="comment" rows="4"></textarea>
        </div>

        <div class="form-row" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button type="submit" class="update-btn">Submit</button>
        </div>

      </form>
    </div>
    </div>

    </>
  )
}

export default SalesExecutiveProspect
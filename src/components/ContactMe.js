import React from 'react';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    document.getElementById('alertMessage').innerText = 'Thank you for contacting us! We will get back to you soon.';
    
    const modal = new window.bootstrap.Modal(document.getElementById('customAlert'));
    modal.show();
  };

  return (
    <div className="section-margin" id="contact">
      <section className="my-5">
        <h1 className="text-center">Contact Me</h1>
        <form id="form" className="contact-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="mess" className="form-label">Message</label>
            <textarea className="form-control" id="mess" rows="3" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </section>

      {/* Modal Alert */}
      <div className="modal fade" id="customAlert" tabIndex="-1" aria-labelledby="customAlertLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="customAlertLabel">Alert</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" id="alertMessage"></div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

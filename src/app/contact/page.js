import React from "react";
const Contact = () => {
  return (
    <div className="contact ">
      <br />
      <br />
      <br />
      <br />
      <div className="contact__form">
        <div className="form__title">
          <h1>Get in touch</h1>
          <div className="datas">
            <h2>contact@e-comm.ng</h2>
            <h2>+234 4556 6665 34</h2>
            <h2>
              20 Prince Hakerem <br /> Lekki Phase 1, Lagos.
            </h2>
          </div>
        </div>
        <form action="">
          <div className="name">
            {" "}
            <label htmlFor="name">Fullname</label>
            <input type="text" placeholder="Fullname" />
          </div>
          <div className="email">
            <label htmlFor="name">Email</label>
            <input type="text" placeholder="Gmail" />
          </div>
          <div className="message">
            <label htmlFor="name">Subject</label>
            <textarea></textarea>
          </div>
        </form>
      </div>
      <div className="submit">
        <input type="text" placeholder="Search query" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Contact;

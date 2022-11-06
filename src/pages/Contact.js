/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';

const Contact = () => {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [check, setCheck] = useState(false);
  const name = 'name';

  // //   checkbox handler
  // const handleCheck = () => {
  //   setCheck((prev) => !prev);
  // };

  // //   submit handler
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const registerValues = {
  //     first_name: firstName,
  //     last_name: lastName,
  //     email,
  //     message,
  //     check,
  //   };
  //   console.log(registerValues);
  //   // function to submit form to database
  //   setFirstName('');
  //   setLastName('');
  //   setEmail('');
  //   setMessage('');
  // };

  return (
    <form className="form">
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <div className="form-group">
        <div className="form-control first">
          <label htmlFor="first_name">First name</label>
          <input
            type="text"
            name="first_name"
            // value={firstName}
            // onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
            id="first_name"
          />
        </div>
        <div className="form-control">
          <label htmlFor="last_name">Last name</label>
          <input
            type="text"
            // value={lastName}
            // onChange={(e) => setLastName(e.target.value)}
            name="last_name"
            placeholder="Enter your last name"
            id="last_name"
          />
        </div>
      </div>

      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="yourname@email.com"
        />
      </div>

      <div className="form-control">
        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          name="message"
          // value={message}
          // onChange={(e) => setMessage(e.target.value)}
          id="message"
          rows={6}
          placeholder="Send me a message and I'll reply you as soon as possible...'"
        ></textarea>
      </div>

      <div className="checkbox-control">
        <input
          type="checkbox"
          name="name"
          // value={check}
          // onChange={handleCheck}
        />
        <label htmlFor="checkbox">
          You agree to providing your data to "{name}" who may contact you.
        </label>
      </div>
      <button type="submit" id="btn_submit">
        Send message
      </button>
    </form>
  );
};

export default Contact;

import React from 'react';
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
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
            placeholder="Enter your first name"
            id="first_name"
          />
        </div>
        <div className="form-control">
          <label htmlFor="last_name">Last name</label>
          <input
            type="text"
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
          type="email"
          name="name"
          placeholder="yourname@email.com"
        />
      </div>

      <div className="form-control">
        <label htmlFor="email">Message</label>
        <textarea
          type="text"
          name="name"
          id="message"
          rows={6}
          placeholder="Send me a message and I'll reply you as soon as possible...'"
        ></textarea>
      </div>

      <div className="checkbox-control">
        <input type="checkbox" name="name" />
        <label htmlFor="email">
          You agree to providing your data to {name} who may contact you.
        </label>
      </div>
      <button id="btn_submit" type="submit">
        Send message
      </button>
    </form>
  );
};

export default Contact;

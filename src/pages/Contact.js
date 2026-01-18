import { useState } from 'react';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      firstName,
      lastName,
      email,
      comments,
    });

    setFirstName('');
    setLastName('');
    setEmail('');
    setComments('');
  };

  return (
    <div className="card">
      <h2 className="pageTitle">Contact Zillionaire Tech HQ</h2>

      <form className="missionForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          required
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;

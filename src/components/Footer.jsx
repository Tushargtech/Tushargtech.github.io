import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="Select a Course" />
        <input type="text" placeholder="Select a Branch" />
        <button>Submit</button>
        <p>&copy; 2024 Ducat. All Rights Reserved.</p>
      </form>
    </footer>
  );
};

export default Footer;
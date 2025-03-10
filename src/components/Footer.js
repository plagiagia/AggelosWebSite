import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="container">
        <p>&copy; {currentYear} Aggelos. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
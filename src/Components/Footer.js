import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <p>Mady By Rasa ⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;
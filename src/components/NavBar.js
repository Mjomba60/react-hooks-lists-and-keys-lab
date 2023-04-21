import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const singleLink = links.map((link, index) => {
    const ref = `#${link}`
    return <a
      key={index} 
      href= {ref}>
        {link}</a>
  })

  return <nav>{singleLink}</nav>;
}

export default NavBar;

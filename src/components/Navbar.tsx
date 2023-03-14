import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [logindialog, setLoginDialog] = useState(false);
  const [signup, setSignup] = useState(false);

  const handleSignup = () => {
    setSignup(true);
  };
  const closeSignup = () => {
    setSignup(false);
  };

  const handleOpen = () => {
    setLoginDialog(true);
  };

  const handleClose = () => {
    setLoginDialog(false);
  };

  const links = [
    {
      name: "React",
      link: "/react-notlari",
      textcolor: "text-info",
    },
    {
      name: "TypeScript",
      link: "/ts-notlari",
      textcolor: "text-blue-500",
    },
  ];
  return (
    <div>
      ajshdajskd
    </div>
  );
}

export default Navbar;

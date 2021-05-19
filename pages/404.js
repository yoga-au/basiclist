import React from "react";
import Link from "next/link";
// styled component
import { BackLink404 } from "../styles/styledComponents";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Page Not Found...</h1>
      <h2>Seems like the page you try to access doesn't exist</h2>
      <Link href="/">
        <BackLink404>Go to Homepage</BackLink404>
      </Link>
    </div>
  );
};

export default NotFound;

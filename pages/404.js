import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// styled component
import { BackLink404 } from "../styles/styledComponents";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go to move in between browser history
      router.push("/");
    }, 5000);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Page Not Found</h1>
      <h2>Seems like the page you try to access doesn't exist</h2>
      <p>We will redirect you to Homepage in 5 seconds or click link below</p>
      <Link href="/">
        <BackLink404>Go to Homepage</BackLink404>
      </Link>
    </div>
  );
};

export default NotFound;

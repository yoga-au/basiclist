// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corporis
        veritatis consectetur asperiores fugiat delectus voluptates ducimus vel
        illo laborum ipsum atque, sit ratione suscipit architecto magnam
        deleniti, quis distinctio?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corporis
        veritatis consectetur asperiores fugiat delectus voluptates ducimus vel
        illo laborum ipsum atque, sit ratione suscipit architecto magnam
        deleniti, quis distinctio?
      </p>
      <Link href="/staffs">See staffs list</Link>
    </div>
  );
}

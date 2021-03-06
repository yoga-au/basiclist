import Link from "next/link";
import Head from "next/head";
import { Homepage } from "../styles/styledComponents";

export default function Home() {
  return (
    <>
      <Head>
        <title>Basic List | Home</title>
        <meta name="keywords" content="basiclist" />
      </Head>
      <div>
        <Homepage.title>Homepage</Homepage.title>
        <Homepage.text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corporis
          veritatis consectetur asperiores fugiat delectus voluptates ducimus
          vel illo laborum ipsum atque, sit ratione suscipit architecto magnam
          deleniti, quis distinctio?
        </Homepage.text>
        <Homepage.text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corporis
          veritatis consectetur asperiores fugiat delectus voluptates ducimus
          vel illo laborum ipsum atque, sit ratione suscipit architecto magnam
          deleniti, quis distinctio?
        </Homepage.text>
        <Link href="/staffs">
          <Homepage.button>See staffs list</Homepage.button>
        </Link>
      </div>
    </>
  );
}

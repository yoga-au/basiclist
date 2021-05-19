import React from "react";
import Head from "next/head";
import axios from "axios";
import styled from "styled-components";

// we need to export getStaticProps to fetch data at buildtime
export const getStaticProps = async () => {
  // define data variable to hold response.data from axios promise
  let data;

  await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      data = response.data;
    });

  // required to return an object that have props key
  // props key value is an object
  return {
    props: { staffs: data },
  };
};

const StaffLink = styled.a`
  padding: 2px 16px;
  background: #fff;
  display: block;
  margin: 20px 10px 20px 0;
  border-left: 8px solid #fff;

  &:hover {
    border-left: 8px solid #4979ff;
  }
`;

const Staffs = ({ staffs }) => {
  return (
    <>
      {/* {console.log(staffs)} */}
      <Head>
        <title>Basic List | Staffs</title>
        <meta name="keywords" content="basiclist" />
      </Head>
      <div>
        <h1>Staff list</h1>
        {staffs.map(({ id, name }) => {
          return (
            <div key={id}>
              <StaffLink>
                <h3>{name}</h3>
              </StaffLink>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Staffs;

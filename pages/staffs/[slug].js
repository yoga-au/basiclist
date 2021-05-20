import React from "react";
import axios from "axios";

export const getStaticPaths = async () => {
  // define paths to pass it as return value later
  let paths;

  await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      const data = response.data;
      // map over data from API because return value of getStaticPaths
      // is a array of object (required)
      paths = data.map((staff) => {
        return {
          // params: [name] in [name].js
          params: { slug: staff.id.toString() },
        };
      });
    })
    .catch((error) => {
      console.error(error);
    });

  return {
    // same as paths: paths
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  // get the slug from context that passed from getStaticPaths
  const id = context.params.slug;
  let data;

  await axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => {
      data = response.data;
    });

  return {
    props: {
      staff: data,
    },
  };
};

const StaffDetail = ({ staff }) => {
  return (
    <div>
      <h1>{staff.name}</h1>
      <p>{staff.phone}</p>
      <p>{staff.website}</p>
    </div>
  );
};

export default StaffDetail;

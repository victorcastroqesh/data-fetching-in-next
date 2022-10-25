import React from "react";
import Link from "next/link";
const Home = () => {
  return (
    <>
      <h1>Fetching Data</h1>
      <ul>
        <li>
          getStaticProps :<Link href={"/albums"}>albums Page</Link>
        </li>
        <li>
          getStaticPaths :<Link href={"/users/1"}>User 1</Link>
        </li>
        <li>
          getServerSideProps :<Link href={"/posts"}>Posts Page</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;

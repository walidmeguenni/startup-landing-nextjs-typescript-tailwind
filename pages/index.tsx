import type { NextPage } from "next";
import { Fragment } from "react";
import { Footer, Navbar } from "../components";
import {
  Banner,
  Blog,
  CustomerSupport,
  Faq,
  Features,
  Pricing,
  Support,
  Client,
} from "../sections";

const Home: NextPage = () => (
  <Fragment>
    <Navbar />
    <main>
      <Banner />
      <Features />
      <CustomerSupport />
      <Pricing />
      <Support />
      <Client />
      <Blog />
      <Faq />
    </main>
    <Footer />
  </Fragment>
);
export default Home;

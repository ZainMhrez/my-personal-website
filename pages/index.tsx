import { NextPage } from "next";
import Head from "next/head";
import ReactGA from "react-ga4";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  ReactGA.initialize("G-DGYCT8XMGY");
  return (
    <div>
      <Head>
        <title>Zain Mhrez | Frontend Reactjs developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="Passionate self-taught front-end developer with a desire to learn and grow in a collaborative team environment. Skilled in React js."
        />
        <meta
          name="keywords"
          content="frontend developer, reactjs developer, front-end developer, front end developer, javascript, typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-slate-300">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Home;

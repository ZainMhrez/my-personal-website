import Image from "next/image";
import heroImg from "../public/Hero.svg";

const Hero = () => {
  return (
    <section className="h-[90vh] container m-auto flex flex-col justify-evenly items-center py-8 text-center lg:flex-row lg:gap-8">
      <div className="lg:w-[50%]">
        <h1 className="text-lg leading-8 text-slate-300 lg:text-3xl">
          Hi my name is{" "}
          <span className="text-primary font-bold">Zain Mhrez</span> And
          I&apos;m a{" "}
          <span className="text-primary font-bold">
            Frontend React Js Developer
          </span>
          .
        </h1>
        <p className="text-md leading-8 text-slate-300 mt-8 lg:text-2xl">
          Passionate self-taught developer with a desire to learn and grow in a
          collaborative team environment. Learning about web3.
        </p>
      </div>
      <div className="relative w-60 h-60 bg-gradient-to-b from-primary to-secondary rounded-full lg:w-80 lg:h-80">
        <Image src={heroImg} alt="Front end developer" priority fill />
      </div>
    </section>
  );
};

export default Hero;

import Link from "next/link";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="py-12">
      <div className="container m-auto">
        <h2 className="text-primary font-bold text-2xl text-center">Contact</h2>
        <p className="mt-6 text-xl font-bold text-center">
          Let&apos;s keep in touch
        </p>
        <ul className="flex justify-evenly items-center mt-8">
          <li className=" rounded-full p-4 bg-secondary cursor-pointer hover:opacity-60">
            <Link
              href="mailto:zain.mhrez97@gmail.com"
              target="_blank"
              aria-label="Email"
            >
              <MdEmail fontSize="1.75rem" />
            </Link>
          </li>
          <li className=" rounded-full p-4 bg-secondary cursor-pointer hover:opacity-60">
            <Link
              href="https://www.linkedin.com/in/zain-mhrez/"
              target="_blank"
              aria-label="Linkedin"
            >
              <BsLinkedin fontSize="1.75rem" />
            </Link>
          </li>
          <li className=" rounded-full p-4 bg-secondary cursor-pointer hover:opacity-60">
            <Link
              href="https://github.com/ZainMhrez/"
              target="_blank"
              aria-label="Github"
            >
              <BsGithub fontSize="1.75rem" />
            </Link>
          </li>
          <li className=" rounded-full p-4 bg-secondary cursor-pointer hover:opacity-60">
            <Link
              href="https://twitter.com/zainmhrez1"
              target="_blank"
              aria-label="Twitter"
            >
              <BsTwitter fontSize="1.75rem" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;

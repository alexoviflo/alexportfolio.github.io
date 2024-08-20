import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { alex } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col">
      {/* Container for text */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center px-6">

        <div>
          <div/>
          <div className="w-1 sm:h-50 h-10 violet-gradient" />
          </div>

        <div className="mt-8"> {/* Adjusted margin to move text higher */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hei, jeg heter <span className="text-[#915EFF]">Alexander</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Jeg er nyutdannet innen IT og informasjonssystemer, der jeg har fokusert på utvikling, både front-end og back-end. Jeg liker informasjonsikkerhet og å jobbe med Microsoft 365.
            <br className="sm:block hidden" />
          </p>
        </div>
      </div>

      <div className=" w-full flex justify-center h-130">
        <img
          src={alex}
          alt="Alex"
          className="object-cover max--wfull h-auto"
          style={{ maxHeight: '500px' }}  
        />
      </div>
    </section>
  );
};

export default Hero;

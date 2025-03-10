import { motion, useInView } from "framer-motion";
import Image from "next/image";

const ButtomComp = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1], delay: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <button className="flex items-center justify-center hover:translate-x-[5px] transition-transform duration-[400ms] gap-3 group">
        <Image
          src="/buttonarrows/redarico.svg"
          width={0}
          height={0}
          className="group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-[400ms] ease-in-out  h-10 w-10 rotate-45 hover:rotate-0 cursor-pointer"
          alt="Red Arrow Icon"
        />
        <p className="text-[#092241] fsans-600">Learn More About KSH Infra</p>
      </button>
    </motion.div>
  );
};

export default ButtomComp;

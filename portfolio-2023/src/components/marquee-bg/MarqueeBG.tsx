import { motion } from "framer-motion";
import "./MarqueeBG.css";

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};

export const MarqueeBg = () => {
  return (
    <div>
      <motion.div
        className="track"
        variants={marqueeVariants}
        animate="animate"
      >
        <h1 className="font-semibold text-black text-[220px] whitespace-nowrap">
          ART BY JACOB SEXTON <span className="my-auto">*</span>
        </h1>
      </motion.div>
      <h1 className="black-shadow font-semibold text-white text-[220px] whitespace-nowrap">
        ART BY JACOB SEXTON <span className="my-auto">*</span>
      </h1>
      <h1 className="black-shadow font-semibold text-white text-[220px] whitespace-nowrap">
        ART BY JACOB SEXTON <span className="my-auto">*</span>
      </h1>
    </div>
  );
};

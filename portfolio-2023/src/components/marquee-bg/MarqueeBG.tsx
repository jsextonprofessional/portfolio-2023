// import { motion } from "framer-motion";
import "./MarqueeBG.css";

// const marqueeVariants = {
//   animate: {
//     x: [0, -1100],
//     transition: {
//       x: {
//         repeat: Infinity,
//         repeatType: "loop",
//         duration: 5,
//         ease: "linear",
//         delay: 0, // Add a delay to allow the text to fully exit before re-entering
//       },
//     },
//   },
// exit: {
//   x: [1200, 0], // Reverse the x values to move the text to the other side of the screen
//   transition: {
//     x: {
//       duration: 0, // Set duration to 0 to make the transition instant
//     },
//   },
// },
// };

export const MarqueeBG = () => {
  return (
    <div>
      {/* <motion.div
        className="track"
        variants={marqueeVariants}
        animate="animate"
      >
        <h1 className="black-shadow font-semibold text-white text-[220px] whitespace-nowrap">
          ART BY JACOB SEXTON <span className="my-auto">*</span> ART BY JACOB
          SEXTON <span className="my-auto">*</span>
        </h1>
      </motion.div> */}
      {/* <h1 className="black-shadow font-semibold text-white text-[220px] whitespace-nowrap RightToLeft">
        ART BY JACOB SEXTON <span className="my-auto">*</span>
      </h1>
      <h1 className="black-shadow font-semibold text-white text-[220px] whitespace-nowrap LeftToRight">
        JACOB SEXTON <span className="my-auto">*</span> ART BY
      </h1>
      <h1 className="black-shadow font-semibold text-white text-[220px] whitespace-nowrap RightToLeft">
        SEXTON <span className="my-auto">*</span> ART BY JACOB
      </h1> */}
      <div className="marquee">
        <div className="marquee__inner" aria-hidden="true">
          <span>
            <h1 className="black-shadow font-semibold text-white text-[220px] whitespace-nowrap">
              ART BY JACOB SEXTON <span className="my-auto">*</span>
            </h1>
          </span>
          <span>
            <h1 className="black-shadow font-semibold text-white text-[220px] whitespace-nowrap">
              ART BY JACOB SEXTON <span className="my-auto">*</span>
            </h1>
          </span>
          <span>
            <h1 className="black-shadow font-semibold text-white text-[220px] whitespace-nowrap">
              ART BY JACOB SEXTON <span className="my-auto">*</span>
            </h1>
          </span>
          <span>
            <h1 className="black-shadow font-semibold text-white text-[220px] whitespace-nowrap">
              ART BY JACOB SEXTON <span className="my-auto">*</span>
            </h1>
          </span>
        </div>
        <div className="marquee__inner" aria-hidden="true">
          <span>
            <h1 className="black-shadow font-semibold text-white text-[220px] whitespace-nowrap">
              JACOB SEXTON <span className="my-auto">*</span> ART BY
            </h1>
          </span>
          <span>
            <h1 className="black-shadow font-semibold text-white text-[220px] whitespace-nowrap">
              JACOB SEXTON <span className="my-auto">*</span> ART BY
            </h1>
          </span>
          <span>
            <h1 className="black-shadow font-semibold text-white text-[220px] whitespace-nowrap">
              JACOB SEXTON <span className="my-auto">*</span> ART BY
            </h1>
          </span>
          <span>
            <h1 className="black-shadow font-semibold text-white text-[220px] whitespace-nowrap">
              JACOB SEXTON <span className="my-auto">*</span> ART BY
            </h1>
          </span>
        </div>
        <div className="marquee__inner" aria-hidden="true">
          <span>
            <h1 className="black-shadow font-semibold text-white text-[220px] whitespace-nowrap">
              SEXTON <span className="my-auto">*</span> ART BY JACOB
            </h1>
          </span>
          <span>
            <h1 className="black-shadow font-semibold text-white text-[220px] whitespace-nowrap">
              SEXTON <span className="my-auto">*</span> ART BY JACOB
            </h1>
          </span>
          <span>
            <h1 className="black-shadow font-semibold text-white text-[220px] whitespace-nowrap">
              SEXTON <span className="my-auto">*</span> ART BY JACOB
            </h1>
          </span>
          <span>
            <h1 className="black-shadow font-semibold text-white text-[220px] whitespace-nowrap">
              SEXTON <span className="my-auto">*</span> ART BY JACOB
            </h1>
          </span>
        </div>
      </div>
    </div>
  );
};

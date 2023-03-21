import "./MarqueeBG.css";

export const MarqueeBg = () => {
  return (
    <div>
      <h1 className="black-shadow font-semibold text-white text-[220px] whitespace-nowrap RightToLeft">
        ART BY JACOB SEXTON <span className="my-auto">*</span>
      </h1>
      <h1 className="black-shadow font-semibold text-white text-[220px] whitespace-nowrap LeftToRight">
        JACOB SEXTON <span className="my-auto">*</span> ART BY
      </h1>
      <h1 className="black-shadow font-semibold text-white text-[220px] whitespace-nowrap RightToLeft">
        SEXTON <span className="my-auto">*</span> ART BY JACOB
      </h1>
    </div>
  );
};

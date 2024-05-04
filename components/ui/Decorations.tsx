import Image from "next/image";
import React from "react";

const Decorations = ({ src, css }: { src: string; css: string }) => {
  return (
    <div>
      <Image src={src} alt="Decorations" height={500} width={500} className={css} />
    </div>
  );
};

export default Decorations
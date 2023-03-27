import Halo from "components/Halo";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import list from "public/projects/tracklib/list.png";
import hero from "public/projects/hero.png";

import { useRef } from "react";

export default function TracklibGraphic() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [70, 0]);
  const { resolvedTheme } = useTheme();

  return (
    <div
      className="relative overflow-hidden from-neutral-700 bg-gradient-to-b to-neutral-900 h-[283px] rounded-xl"
      ref={ref}
    >
      <Halo strength={resolvedTheme === "light" ? 15 : 8}>
        <motion.div
          className="w-[350px] absolute -right-20 z-10 bottom-0"
          style={{ y }}
        >
          <Image
            src={hero}
            alt="Tracklib listing"
            width={350}
            height={268}
            sizes="350px"
            className="scale-125"
          />
        </motion.div>
        <svg
          width="158"
          height="19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-10 hidden -translate-y-1/2 top-1/2 left-12 sm:block"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 4.449V.284h19.823v4.165h-7.507v14.267h-4.81V4.449H0Zm32.991-.198c.855 0 3.157 0 3.157 2.191 0 1.306-.836 2.111-3.032 2.111h-6.469V4.251h6.344Zm3.157 10.413c0 1.372.038 4.052.038 4.052l4.826.014v-4.568c0-1.708-.49-3.01-3.008-3.602v-.265c2.239-.819 3.008-2.532 3.008-4.331 0-2.925-2.018-5.68-7.948-5.68H21.78v18.432h4.867V12.52h6.344c2.388 0 3.157.857 3.157 2.144ZM53.862 4.478l2.643 6.934h-6.094l2.658-6.934h.793Zm-4.974 10.891h9.131l1.303 3.347h5.252L56.991.284H49.98l-7.604 18.432h5.2l1.312-3.347ZM75.141 0c-6.502 0-11.308 3.659-11.308 9.5 0 5.836 4.787 9.5 11.308 9.5 4.94 0 8.959-2.253 10.476-5.912l-4.526-1.534c-.909 2.007-3.182 3.21-5.95 3.21-3.676 0-6.468-1.922-6.468-5.264 0-3.342 2.792-5.264 6.468-5.264 2.768 0 5.041 1.198 5.95 3.205l4.526-1.529C84.099 2.253 80.081 0 75.141 0Zm17.296 14.234 4.473-4.27 4.552 8.752h5.67l-6.646-12.151 6.608-6.281h-6.142l-8.515 8.132V.284h-4.864v18.432h4.864v-4.482ZM113.956.284h-4.863v18.432h14.729v-4.18h-9.866V.284Zm12.263 0h4.815v18.431h-4.815V.283Zm21.853 12.448c0-1.723-1.755-1.723-2.884-1.723h-7.064v3.664h7.117c.961 0 2.816 0 2.816-1.927l.015-.014Zm-9.934-8.506v3.275h7.165c.712 0 2.312 0 2.312-1.65 0-1.626-1.525-1.625-2.49-1.625h-6.987Zm14.912 9.027c0 3.124-1.744 5.49-6.886 5.49h-12.711V.283h12.711c4.118 0 6.151 1.723 6.151 4.946a4.337 4.337 0 0 1-.521 2.2 4.425 4.425 0 0 1-1.56 1.653c1.692.668 2.816 1.837 2.816 4.142v.03Zm1.141-12.16a2.011 2.011 0 0 0-.311 1.147 1.985 1.985 0 0 0 .618 1.4c.39.368.908.57 1.443.56.41 0 .811-.121 1.153-.348.339-.225.603-.547.758-.923a2.016 2.016 0 0 0-.48-2.221 2.088 2.088 0 0 0-2.271-.394 2.06 2.06 0 0 0-.91.779Zm3.154.225c.172.276.255.597.24.922-.01.42-.189.818-.497 1.108-.308.29-.721.449-1.147.44a1.68 1.68 0 0 1-.924-.277 1.638 1.638 0 0 1-.608-.74 1.603 1.603 0 0 1 .39-1.78 1.67 1.67 0 0 1 1.822-.304c.299.133.551.353.724.63Zm-2.091-.134v2.13a.046.046 0 0 0 .002.026.053.053 0 0 0 .016.02.047.047 0 0 0 .049.006h.322a.054.054 0 0 0 .041-.013.05.05 0 0 0 .017-.04V2.41h.226l.524.904a.072.072 0 0 0 .028.028.08.08 0 0 0 .039.01h.375c.038 0 .062-.023.038-.061l-.581-.924a.619.619 0 0 0 .427-.577.679.679 0 0 0-.37-.582.712.712 0 0 0-.422-.076h-.678a.05.05 0 0 0-.021.003.044.044 0 0 0-.018.01.043.043 0 0 0-.011.019.035.035 0 0 0-.003.02Zm1.091.625c0 .152-.115.27-.317.27h-.327v-.554h.288c.221 0 .356.133.356.284Z"
            fill="#fff"
          />
        </svg>
      </Halo>
    </div>
  );
}

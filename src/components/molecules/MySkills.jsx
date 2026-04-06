import { Skills } from "../data/Skills";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(0, -55, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap tracking-tighter leading-[0.8]">
      <motion.div
        className="font-semibold uppercase text-xl flex flex-nowrap whitespace-nowrap gap-7"
        style={{ x }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function MySkills() {
  const repeatedSkills = [...Skills, ...Skills, ...Skills, ...Skills];

  return (
    <section className="py-10">
      <ParallaxText baseVelocity={2}>
        {repeatedSkills.map((skill, index) => (
          <span key={index} className="mx-1 flex gap-1">
            <img src={skill.img} alt={skill.name} className="w-5" />
            {skill.name}
          </span>
        ))}
      </ParallaxText>
    </section>
  );
}

import type { Transition, Variants } from "framer-motion";

export const revealViewport = {
  once: false,
  amount: 0.28,
  margin: "0px 0px -12% 0px",
};

export const revealUp: Variants = {
  hidden: {
    opacity: 0,
    y: 46,
    scale: 0.985,
    filter: "blur(7px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },
};

export const revealSoft: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

export const revealLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 32,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  },
};

export const revealTransition: Transition = {
  duration: 0.58,
  ease: [0.22, 1, 0.36, 1],
};

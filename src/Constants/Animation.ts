import type { Variants } from "framer-motion"

export const headerVariants: Variants = {
    initial: {
        y: -100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
}


// HERO ANIMATIONS
export const heroVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3    
        }
    }
};

export const heroItemVariants: Variants = {
    initial: { y: 30, opacity: 0 },
    animate: {
        y: 0, 
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

export const heroImageVariants: Variants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
        scale: 1,
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" }
    }
};

// BRANDS ANIMATIONS
export const brandContainerVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.5
        }
    }
};

export const brandItemVariants: Variants = {
    initial: { 
        y: 20, 
        opacity: 0 
    },
    animate: { 
        y: 0, 
        opacity: 1,
        transition: { 
            duration: 0.5, 
            ease: "easeOut" 
        }
    }
};
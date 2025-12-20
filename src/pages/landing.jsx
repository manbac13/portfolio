import { Box, Divider } from "@mui/material";
import Credit from "components/landing/credit";
import Description from "components/landing/description";
import Experience from "components/landing/experience";
import Footer from "components/landing/footer";
import GetInTouch from "components/landing/getInTouch";
import IntroSection from "components/landing/introSection";
import Location from "components/landing/location";
import Projects from "components/landing/projects";
import SocialSection from "components/landing/social";
import ThemeToggle from "components/landing/themeToggle";
import Tools from "components/landing/tools";
import { ColorModeContext } from "contexts/themeContext";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";

const pageTransition = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.4, ease: "easeOut" },
};

const Landing = () => {
  const { page } = useContext(ColorModeContext);
  return (
    <>
      <AnimatePresence mode="wait">
        {page === "home" ? (
          <motion.div key="home" {...pageTransition}>
            <Box>
              <Location />
              <Divider light={true} />
              <ThemeToggle />

              <IntroSection />

              <Divider light={true} />
              <SocialSection />
              <Divider light={true} />
              <Description />
              <Divider light={true} />
              <Projects />
              <Divider light={true} />
              <Experience />
              <Divider light={true} />
              <Tools />
              <Divider light={true} />
              <Footer />
              <Credit />
            </Box>
          </motion.div>
        ) : (
          <motion.div key="contact" {...pageTransition}>
            <GetInTouch />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Landing;

import ReactGA from "react-ga4";

const GA_ID = import.meta.env.VITE_GA_ID;

export const initGA = () => {
  ReactGA.initialize(GA_ID);
};

export const trackPageView = (path) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};
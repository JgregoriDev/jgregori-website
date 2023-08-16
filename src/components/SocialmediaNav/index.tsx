import curriculum from "@/assets/curriculum.pdf";
import { Link } from 'react-router-dom'

import Style from "./SocialMediaNav.module.scss";
const SocialmediaNav = () => {
  return (
    <nav className={Style.social__media}>
      <Link
        to={curriculum}
        title="jgregori curriculum en pdf"
        className={`${Style.social__link}  ${Style.social__pdf}`}
      >
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pdf" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z"></path>
        <path d="M3 12h2a2 2 0 1 0 0 -4h-2v8"></path>
        <path d="M17 12h3"></path>
        <path d="M21 8h-4v8"></path>
      </svg>
      </Link>
      <Link
        to="#"
        title="jgregori canal de youtube"
        className={`${Style.social__link} ${Style.social__youtube}`}
        target="_blank"
      >
      <svg xmlns="http://www.w3.org/2000/svg" className="social__youtube icon icon-tabler icon-tabler-brand-youtube-filled" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" strokeWidth="0" fill="currentColor"></path>
      </svg>
      </Link>
      <Link
        to="https://linkedin.com/in/jgregori"
        title= "jgregori página de linkedin"
        className={`${Style.social__link} ${Style.social__linkedin}`}
      >
      </Link>
      <Link
        to="https://github.com/jgregoridev"
        className={`${Style.social__link} ${Style.social__github}`}
        title="jgregori página de github"
      >
      <svg xmlns="http://www.w3.org/2000/svg" className="social__github icon icon-tabler icon-tabler-brand-github-filled" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" strokeWidth="0" fill="currentColor"></path>
      </svg>
      </Link>
    </nav>
  );
};

export default SocialmediaNav;

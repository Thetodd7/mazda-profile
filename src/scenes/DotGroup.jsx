import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        href="#home"
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("home")}
      />

      <AnchorLink
        href="#info"
        className={`${
          selectedPage === "info" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("info")}
      />

          {/* <AnchorLink
        href="#testimonials"
        className={`${
          selectedPage === "testimonials" ?  className="p-5 bg-gradient-to-r from-slate-300 to-slate-500 font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500" : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("testimonials")}
      /> */}
  
    </div>
    
  );
};

export default DotGroup;
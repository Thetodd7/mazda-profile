import SocialMediaIcons from "../components/SocialMediaIcons";
// import LineGradient from "../components/LineGradient";

const Footer = () => {
  return (
    <section id="footer">
      {" "}
      <footer className="h-64 bg-slate-400 pt-10">
        <div className="w-10/12 mx-auto">
          <SocialMediaIcons />
          <div className="md:flex justify-center md:justify-between text-center ">
            <p className="font-playfair font-semibold text-2xl text-white">
              Sport Mazda North
            </p>
            <p className="font-playfair text-md text-white">
              ©2023 T.G. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

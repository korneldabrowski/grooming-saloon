import React from "react";
import NavIcons from "app/components/LandingPage/(Hero)/NavIcons";

const Footer = () => {
  return (
    <>
      <footer className="footer z-50 mx-auto place-items-center bg-neutral p-10 text-lg text-neutral-content ">
        <div>
          <h4 className="footer-title">Services</h4>
          <a className="link-hover link">Shop</a>
          <a className="link-hover link">Grooming</a>
          <a className="link-hover link">Day care</a>
          <a className="link-hover link">Special care</a>
        </div>
        <div>
          <h4 className="footer-title">Company</h4>
          <a className="link-hover link">Who we are</a>
          <a className="link-hover link">Contact us</a>
          <a className="link-hover link">Work with us!</a>
          <a className="link-hover link">Press kit</a>
        </div>
        <div>
          <h4 className="footer-title">Legal</h4>
          <a className="link-hover link">Terms of use</a>
          <a className="link-hover link">Privacy policy</a>
          <a className="link-hover link">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer footer-center prose mt-0   max-w-none  gap-y-4 bg-accent pb-4 pt-0 text-accent-content ">
        <div className=" mb-0 grid-flow-col items-center">
          <p>
            <span className="text-primary">Barktiful Grooming.</span> <br />
            Providing reliable services since 2000.
          </p>
        </div>
        <div className="mx-auto mt-0 md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <NavIcons size={24} color="fill-primary" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

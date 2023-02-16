import React from "react";
import NavIcons from "./NavIcons";

const Footer = () => {
  return (
    // <footer className="footer bg-base-200 p-10 text-base-content">
    //   <div className="flex items-center justify-center  px-6  pt-6 lg:justify-between">
    //     <div className="footer-title mr-6 hidden lg:block">
    //       <span>Get connected with us on social networks:</span>
    //     </div>
    //     <div className="flex justify-center ">
    //       <NavIcons size={20} />
    //     </div>
    //   </div>
    //   <div className="mx-6 pt-4 pb-10 text-center md:text-left">
    //     <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
    //       <div className="">
    //         <h6 className="mb-4  flex items-center justify-center font-semibold uppercase text-accent md:justify-start">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth={1.5}
    //             className="h-6 w-6"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
    //             />
    //           </svg>
    //           Barktiful Grooming
    //         </h6>
    //         <p>
    //           Expert dog grooming services by Karolina. Transforming your pup
    //           from shaggy to chic.
    //         </p>
    //       </div>
    //       <div className="">
    //         <h6 className="footer-title mb-4 flex justify-center text-lg font-bold uppercase md:justify-start">
    //           Products
    //         </h6>
    //         <p className="mb-4">
    //           <a href="#!">Shop</a>
    //         </p>
    //         <p className="mb-4">
    //           <a href="#!">Grooming</a>
    //         </p>
    //         <p className="mb-4">
    //           <a href="#!">Special Care</a>
    //         </p>
    //         <p>
    //           <a href="#!">Day care</a>
    //         </p>
    //       </div>
    //       <div className="">
    //         <h6 className="footer-title mb-4 flex justify-center text-lg font-bold uppercase md:justify-start">
    //           Useful links
    //         </h6>
    //         <p className="mb-4">
    //           <a href="#!">Pricing</a>
    //         </p>
    //         <p className="mb-4">
    //           <a href="#!">Book appointment</a>
    //         </p>
    //         <p className="mb-4">
    //           <a href="#!">Orders</a>
    //         </p>
    //         <p>
    //           <a href="#!">Help</a>
    //         </p>
    //       </div>
    //       <div className="">
    //         <h6 className="footer-title mb-4 flex justify-center text-lg font-bold uppercase md:justify-start">
    //           Contact
    //         </h6>
    //         <p className="mb-4 flex items-center justify-center md:justify-start">
    //           <svg
    //             aria-hidden="true"
    //             focusable="false"
    //             data-prefix="fas"
    //             data-icon="home"
    //             className="mr-4 w-4"
    //             role="img"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 576 512"
    //           >
    //             <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
    //           </svg>
    //           Torun, Poland
    //         </p>
    //         <p className="mb-4 flex items-center justify-center md:justify-start">
    //           <svg
    //             aria-hidden="true"
    //             focusable="false"
    //             data-prefix="fas"
    //             data-icon="envelope"
    //             className="mr-4 w-4"
    //             role="img"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 512 512"
    //           >
    //             <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
    //           </svg>
    //           info@barktifulgrooming.com
    //         </p>
    //         <p className="mb-4 flex items-center justify-center md:justify-start">
    //           <svg
    //             aria-hidden="true"
    //             focusable="false"
    //             data-prefix="fas"
    //             data-icon="phone"
    //             className="mr-4 w-4"
    //             role="img"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 512 512"
    //           >
    //             <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
    //           </svg>
    //           +44 873 672 728
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="divider"></div>
    //   <div className="grid grid-flow-col pb-4 text-center">
    //     <span>© 2023 Copyright:</span>
    //     <span className="font-semibold">
    //       {" "}
    //       Barktiful Grooming / Kornel Dabrowski
    //     </span>
    //   </div>
    // </footer>
    <>
      {" "}
      <footer className="footer mx-auto place-items-center bg-neutral p-10 text-lg text-neutral-content ">
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

import React from "react";

const Footer = () => {
  return (
    <div className="relative mt-36">
      <div className="fixed bottom-0 bg-gradient-to-t from-teal-700 to-transparent w-screen">
        <div className="flex flex-row">
          <button href="https://github.com/Garret-Gallant" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              className="h-6 w-6"
            />
          </button>
          <button
            href="https://www.linkedin.com/in/garret-gallant/"
            target="_blank"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

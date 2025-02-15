import React from "react";

const Footer = () => {
  return (
    <footer className=" mt-10 border-t border-gray-300 m">
      <div className="flex items-center justify-center  bg-gradient-to-r from-amber-200 to-white-400">
        <div>
          <img
            src="./image/footerlogo.png"
            alt=""
            className="size-44  left-0 -top-[18px] ml-4"
          />
        </div>
        <div className="ml-9">
          <p className="text-2xl font-semibold text-slate-900">
            Follow us on{" "}
            <span className="font-bold italic text-orange-900">GitHub</span> and
            be part of the evolution of modern{" "}
            <span className="font-bold text-orange-900 italic">UI</span> design.
          </p>
          <div className="flex items-center justify-center">
            <a
              href="https://github.com"
              target="_blank"
              className="mt-4 flex items-center gap-3 bg-amber-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md transition-transform duration-300 hover:scale-110 hover:bg-amber-700"
            >
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub Logo"
                class="w-8 h-8"
              />
              Follow on GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative">
          <img
            src="./image/logo.png"
            alt=""
            className="size-20 absolute left-0 -top-[18px]"
          />
          <p className="ml-14 lg:text-xl text-sm italic font-semibold">
            Cookie UI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

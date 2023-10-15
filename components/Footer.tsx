import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="max-container sticky bottom-0 w-full cursor-pointer mb-[5px] p-10">
      <div className="flex items-center justify-center">
        <h3 className="absolute uppercase tracking-[20px] text-gray-500 text-sm">
          Byron Rodriguez
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
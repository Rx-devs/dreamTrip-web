import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiTwitterXLine,
} from "@remixicon/react";

export default function Infobar() {
  return (
    <div className="container-fluid hidden md:block px-2 sm:px-6 lg:px-8 mx-auto bg-black py-3">
      <div className="grid grid-cols-[4fr_1fr] text-white">
        {/* contacts info */}
        <div className="flex gap-5 items-center text-sm">
          {contactsInfo.map((info) => (
            <div key={info.name} className="flex gap-2 items-center">
              {info.icon} {info.content}
            </div>
          ))}
        </div>
        {/* social contacts */}
        <div className="flex justify-end items-center gap-3">
          <RiFacebookBoxFill
            size={20} // set custom `width` and `height`
            // color="" // set `fill` color
            className="" // add custom class name
          />
          <RiInstagramFill
            size={20} // set custom `width` and `height`
            // color="" // set `fill` color
            className="" // add custom class name
          />
          <RiLinkedinBoxFill
            size={20} // set custom `width` and `height`
            // color="" // set `fill` color
            className="" // add custom class name
          />
          <RiTwitterXLine
            size={20} // set custom `width` and `height`
            // color="" // set `fill` color
            className="" // add custom class name
          />
        </div>
      </div>
    </div>
  );
}

const contactsInfo = [
  {
    name: "mail",
    icon: <RiMailLine size={20} />,
    content: "dreamtrip@gmail.com",
  },
  {
    name: "phone",
    icon: <RiPhoneLine size={20} />,
    content: "12310345",
  },
  {
    name: "location",
    icon: <RiMapPinLine size={20} />,
    content: "Broadway & Morris St, New York.",
  },
];

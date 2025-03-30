import React from "react";
import blub from "../assets/image/blub.jpg";
import { Accordion, AccordionItem } from "@nextui-org/react";

function Card() {
  const defaultContent  = 
    "I appreciate your skepticism. This program is designed to simplify your financial obligation and potentially reduce what you owe.It's tailored to fit your unique sitution and could offer relief that may not be immediately apparent. "

  return (
    <div className="rounded-lg text-white  border-4 border-solid border-[#0d6efd]"> 
     <div className="flex items-center  pb-4 border-b-3 border-black gap-2 ">
     <img src={blub} alt="" className="w-7 h-7" />
     <h5 className=" my-2 text-base font-bold text-[#212529]">REBUTTALS</h5>
     </div>
     <Accordion className="px-0">
      <AccordionItem className=" text-sm font-bold border-b-2  border-black px-2" key="1" aria-label="Accordion 1" title={<h6 className="text-sm font-black">Explanation of Clarity Program Objection: "I Don't see how this program canhelp me"</h6>}>
        <p  className="text-zinc-400 pb-3 ">{defaultContent}</p> {/* Change text color here */}
      </AccordionItem>
      <AccordionItem className="text-sm font-bold border-b-1 border-t-1 mt-6 border-black px-2" key="2" aria-label="Accordion 2" title={<h6 className="text-sm font-black">Explanation of Clarity Program Objection: "I Don't see how this program canhelp me"</h6>}>
        <p className="text-zinc-400">{defaultContent}</p> {/* Another color */}
      </AccordionItem>
      <AccordionItem  className="text-sm font-bold border-b-1 border-t-1 mt-6 border-black px-2" key="3" aria-label="Accordion 3" title={<h6 className="text-sm font-black">Explanation of Clarity Program Objection: "I Don't see how this program canhelp me"</h6>}>
        <p className="text-zinc-400">{defaultContent}</p> {/* Another color */}
      </AccordionItem>
      <AccordionItem className="text-sm font-bold border-b-1 border-t-1 mt-6 border-black px-2"  key="4" aria-label="Accordion 4" title={<h6 className="text-sm font-black">Explanation of Clarity Program Objection: "I Don't see how this program canhelp me"</h6>}>
        <p className="text-zinc-400">{defaultContent}</p> {/* Another color */}
      </AccordionItem>
    </Accordion>
    </div>

  );
}

export default Card;

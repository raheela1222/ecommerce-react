import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Setting() {
  return (
    <>
      <div>
        <div className="py-7 px-6">
          <h1 className=" text-base font-bold text-black mb-3 ">
            Coming back from the hold - setting up the close
          </h1>
          <p className="text-xs font-medium  pb-6">
            {" "}
            Hi are you still with me? I have great news, based on your tax issue
            and your file, it looks like you're pre-eligible for our
            
            specialized Tax Help Services. That's great news! (Pause)
          </p>
          <p className="text-xs font-medium  pb-4">
            Let me tell you how our process works and we can move forward from
            there.
          </p>
          <p className="text-xs font-medium  pb-6">
            We are a family-owned and operated tax firm with over 13 years of
            experience handling cases against the IRS. That is
            
            ALL we do, we resolve IRS tax issues, and we only take on cases that
            we KNOW we can resolve.
          </p>
          <p className="text-xs font-medium  pb-4">
            You're going to be represented by federally licensed enrolled
            agents, CPA's and a tax preparer. Combined, they have 
            over 35 years of experience handling cases just like yours, against
            the IRS.
          </p>
          <h1 className=" text-base font-bold text-black  ">
            TWO PHASES - CLOSE
          </h1>
          <p className="text-xs font-medium pt-2 pb-4">
            Now we work in a simple two-phase process. We have 2 phases and,
            therefore, have two sets of costs.
          </p>
          <p className="text-xs font-medium pb-4 ">
            We are going to file our Power of Attorney and establish
            professional representation for you against the IRS TODAY.
          </p>
          <p className="text-xs font-medium pb-4 ">
            At that point, we are going to order all of your transcripts from
            the IRS so we can identify exactly how much they claim 
            that you owe in principle, penalties, and interest. We will also
            find out if you have any pending liens, levys or wage 
            garnishments against you.
          </p>
          <p className="text-xs font-medium  pb-4 ">
            Once we get the documents, my professional tax team will devise a
            plan of action specific to resolving your IRS case.
            
            We will utilize every program at our disposal to ensure you do not
            pay a penny over what is legally required of you.
          </p>
          <p className="text-xs font-medium pb-4">
            Do you have any questions about Phase 1?
          </p>
          <h1 className=" text-base font-bold text-black mb-2">PHASE 2</h1>
          <p className="text-xs font-medium pb-4">
            This will bring us to phase 2 which is the Resolution.
          </p>
          <p className="text-xs font-medium pb-4">
            One of my resolution specialists will call you as soon as we
            complete the investigation to set up an appointment to go
            
            over the resolution plan with you.
          </p>
          <p className="text-xs font-medium pb-4">
            They will go over everything the IRS has told us about your case, as
            well as the plan of action my tax team devised to 
            resolve your specific IRS tax case.
          </p>
          <p className="text-xs font-medium pb-4">
            They will go over everything the IRS has told us about your case, as
            well as the plan of action my tax team devised to 
            resolve your specific IRS tax case.
          </p>
          <p className="text-xs font-medium pb-4">
            Let me go over some of the programs we use to help our clients
            reduce or eliminate their IRS tax problems.
          </p>
          <div>
            <h1 className="pb-3 text-base font-bold text-black">
              Phase 2 Programs
            </h1>

            <p className="text-xs font-medium pb-4">
              <FaArrowAltCircleRight className="inline-block mr-1" />
              <span className="font-bold">Currently Non Collectable </span>is a
              permanent hold status with the IRS where you end up paying them $0
            </p>
            <p className="text-xs font-medium pb-4">
              <FaArrowAltCircleRight className="inline-block mr-1" />
              <span className="font-bold">PPIA </span>is a partial payment plan
              where you could be paying the IRS as low as $25 a month
            </p>
            <p className="text-xs font-medium pb-4">
              <FaArrowAltCircleRight className="inline-block mr-1" />
              <span className="font-bold">Penalty abatement </span>allows us to
              remove all of the penalties and interest that have been accruing
              on your tax debt.
              
              Interest rates vary between 7-10% per month, which means there are
              probably a lot of penalties and interest we can
               remove to get this reduced.
            </p>
            <p className="text-xs font-medium pb-4">
              <FaArrowAltCircleRight className="inline-block mr-1" />
              <span className="font-bold">Offer in Compromise </span>allows us
              to settle your tax debt for less than the full amount owed. The
              IRS reviews your
              
              financial situation, including your income, expenses, and assets,
              to determine a reasonable settlement amount. This 
              program can significantly reduce your total tax liability, giving
              you a fresh start by paying only a portion of what you
               owe.
            </p>
            <p className="text-xs font-medium pb-4">
              Keep in mind, that we do not know which programs we will be using
              for 
              your case until phase 1 is complete and we get all of your
              documents
              directly from the IRS.
              Does that make sense?
              
              
              Okay, if you do not have any other questions I will get into the
              payment.
            </p>
          </div>

          <div>
            <div className="pt-8  grid grid-cols-2">
              <div>
                <button className="py-2 px-20 rounded-full text-black bg-[#F6F3F3] border-solid border border-black ">
                  back
                </button>
              </div>
              <div className="text-right">
                <button className="py-2 px-20 rounded-full text-white  bg-[#0d6efd]">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Setting;

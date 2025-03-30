import React from "react";

function Review() {
  return (
    <div className="pt-7 px-6">
      <h1 className=" text-base font-bold text-black mb-3 ">Documents</h1>
      <p className="text-xs font-medium  pb-4 ">
        I just sent you an email with the documents, it should say (whatever the
        subject line for the document email is)
      </p>
      <p className="text-xs font-medium  pb-4 ">
        Can you click on the green button that says “Review and Sign Documents”
      </p>
      <p className="text-xs font-medium  pb-4 ">
        Once you’ve opened the email, you’ll find the contract attached. Please
        review the document to ensure all information
        
        is correct. Let me know if you have any questions as you go through it.
      </p>
      <p className="text-xs font-medium  pb-4 ">
        If everything looks good, there should be a 'Sign Here' button within
        the document. Clicking that will guide you through 
        the process of electronically signing the contract.
      </p>
      <p className="text-xs font-medium  pb-4 ">
        Have you completed the signing process? Once you’ve signed it, I will
        receive a confirmation on my end.
      </p>
      <p className="text-xs font-medium  pb-4 ">
        Thank you for signing the contract. You will receive a copy of the
        signed document for your records. Your automatic
        
        payments are now set up to start on the agreed date.
      </p>
      <h2 className="text-xs font-bold text-black pt-5">
        Signature Status: Pending
      </h2>
      <div className="text-center pt-4 ">
        <button className="py-2 w-full rounded-full text-white  bg-lime-600">
          Recent contract
        </button>
      </div>
      <p className="text-xs font-medium  pt-6 ">
        Once you get into the documents it will ask for some signatures and
        initials, let me know if you need help signing the 
        documents.
      </p>
      <h1 className="text-base font-bold text-black pt-4">
        After docs are signed
      </h1>
      <p className="text-xs font-medium  pt-2">
        Alright I see the documents were signed and submitted. We are good to go
        for today. Your resolution officer will call you
        
        within the next 1-3 business days with your tax investigation results.
        Before we hangup, I need to go over some
         verification questions with you.
      </p>
      <h1 className="text-base font-bold text-black pt-3">
        Verification questions
      </h1>
      <p p className="text-xs font-medium  pt-2">
        Do you understand that you are hiring our company to perform a tax
        investigation on your behalf and you are not 
        making direct payments to the IRS?
      </p>
      <p p className="text-xs font-medium  pt-4">
        Do you understand the $79.99 retainer that you are paying is the cost to
        perform the tax investigation and will be
         applied as a credit towards the cost of phase 2?
      </p>
      <p p className="text-xs font-medium  pt-4">
        Do you understand that we work in a 2-phase process and therefore, have
        2 sets of costs?
      </p>
      <p p className="text-xs font-medium  pt-4">
        Wonderful i want to thank you for taking the time out of your day today,
        and a member of our team will reach out after
         we complete our tax investigation.
      </p>
      <div className="text-center pt-8">
        <button className="py-2 w-full rounded-full text-white  bg-lime-500">
          Finaliz andSumit
        </button>
      </div>
    </div>
  );
}

export default Review;

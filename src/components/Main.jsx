import React from "react";

function Main() {
  return (
    <div className="py-7 px-6">
      <h1 className="text-base font-bold text-black mb-3">Outbound:</h1>
      <h2 className="text-xs font-medium px-7 pb-4">
        - Hello, this is (Agent Name) with Tax Relief Group. How are you doing
        today?
      </h2>
      <p className="text-xs font-medium px-7 pb-5">
        I'm reaching out to you today about the IRS Fresh Start programs that
        can help reduce or eliminate your IRS tax debt.
      </p>
      <div className="w-full">
        <form>
          <p className="text-xs font-medium px-2 pt-3">
            Can you verify your first and last name for me?
          </p>
          <div className="grid grid-cols-2 gap-8 mt-3">
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="bg-[#F6F3F3] p-2 w-full"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                className="bg-[#F6F3F3] p-2 w-full"
              />
            </div>
          </div>
          <p className="text-xs font-medium px-2 pt-3">
            I’m reaching out to you today about the IRS Fresh Start programs
            that can help reduce or eliminate your IRS tax debt.
          </p>
        </form>
      </div>
      <div className="pt-9 w-full">
        <h1 className="text-lg font-bold text-black">
          Eligibility and Engagement:
        </h1>
        <p className="text-xs px-3 pt-2 font-medium">
          Do you still have unpaid taxes that you owe to the IRS? (Pause for
          confirmation)
        </p>
        <div className="pt-8 grid grid-cols-2 gap-3">
          <div>
            <button className="w-full rounded-md text-white bg-[#0d6efd] px-2 py-2">
              Yes
            </button>
          </div>
          <div>
            <button className="w-full rounded-md border-solid border-2 border-zinc-400 bg-[#F6F3F3] px-2 py-2">
              No
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="pt-4">
          <p className="text-xs font-medium">
            What is the total amount you currently owe to the IRS?
          </p>
        </div>
        <div>
          <form>
            <input
              type="text"
              placeholder="Tax debt amount"
              className="bg-[#F6F3F3] p-2 w-full mt-3"
            />
            <h1 className="text-base font-bold text-black pt-2">
              Info on the process
            </h1>
            <p className="text-sm font-medium text-[#212529] pt-3">
              Okay, I want to let you know that this is a manageable amount with
              the IRS. The average tax debt amounts that we work with here are
              about $67,000, although we have clients of all sizes. Your case is
              something we can definitely handle. Our firm utilizes tax
              preparers to help our clients with their tax debt. We use what is
              called the Fresh Start program, which is an IRS program that
              allows us to reduce or completely eliminate our clients' tax debt.
            </p>
            <p className="text-sm font-medium text-[#212529] pt-7">
              Do you have any unfiled tax years?
            </p>
            <div className="flex items-center mt-2">
              <input
                type="radio"
                id="unfiledYes1"
                name="unfiledTaxYears"
                value="Yes"
                className="mr-2"
              />
              <label htmlFor="unfiledYes1" className="text-xs font-medium">
                Yes
              </label>
            </div>
            <div className="flex items-center mt-2">
              <input
                type="radio"
                id="unfiledNo1"
                name="unfiledTaxYears"
                value="No"
                className="mr-2"
              />
              <label htmlFor="unfiledNo1" className="text-xs font-medium">
                No
              </label>
            </div>
            <label>How many unfiled tax years do you have?</label>
            <input
              type="number"
              placeholder="Number of years"
              className="bg-[#F6F3F3] w-full py-1 pl-3 rounded-lg border-solid border-2 border-zinc-200"
            />

            <div className="flex items-center mt-2">
              <input
                type="radio"
                id="unfiledYes2"
                name="TaxYears"
                value="Yes"
                className="mr-2"
              />
              <label htmlFor="unfiledYes2" className="text-xs font-medium">
                Yes
              </label>
            </div>
            <div className="flex items-center mt-2">
              <input
                type="radio"
                id="unfiledNo2"
                name="TaxYears"
                value="No"
                className="mr-2"
              />
              <label htmlFor="unfiledNo2" className="text-xs font-medium">
                No
              </label>
            </div>
            <p className="text-sm font-medium text-[#212529] pt-7">
              Ok, we can help you with this situation. We have tax preparers in
              our office who specialize in filing back taxes. After we file the
              taxes, we can get you into the Fresh Start program to reduce or
              eliminate how much you are going to owe to the IRS.
            </p>
          </form>
        </div>
        <div className="pt-3 text-right">
          <button className="py-2 px-20 rounded-full text-white bg-[#0d6efd]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;

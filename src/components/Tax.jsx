import React from "react";

function Tax() {
  return (
    <div className="py-7 px-6 ">
      <h1 className=" text-base font-bold text-black mb-3 ">
        Tax Qualifier Questions
      </h1>
      <p className="text-xs font-medium  pb-4 ">
        Let's get some basic information to see if you qualify for tax debt
        relief. (Pause) This process should take less than
         5 minutes.
      </p>
      <p className="text-xs font-medium">
        Before we start, what's the best phone number to contact you at if we
        lose connection?
      </p>
      <form>
        <div className="grid grid-cols-4 mt-2">
          <div>
            <input
              type="number"
              placeholder="Phone Number"
              className="bg-[#F6F3F3] w-full py-1 pl-3 rounded-lg border-solid border-2 border-zinc-200"
            />
          </div>
        </div>
        <p className="text-xs font-medium pt-3">
          Is this a personal or business tax issue?
        </p>
      </form>
      <form>
        <div className="grid grid-cols-3 mt-2">
          <div>
            <select
              className="bg-[#F6F3F3] w-full py-2 pr-4 rounded-lg border-solid border-2 border-zinc-200"
              name="personal"
            >
              <option value=" (personal or businessor both)" disabled selected>
                personal or businessor both
              </option>
              <option value="Personal">Personal</option>
              <option value="Business">Business</option>
              <option value="Both">Both</option>
            </select>
          </div>
        </div>
        <p className="text-xs font-medium pt-2">
          -if client is unsure: Is this tax debt attached to a business EIN
          number or your social security number?
        </p>
        <p className="text-xs font-medium text-[#212529] pt-4">
          How did you get into this tax situation?
        </p>
      </form>
      <form>
        <div className="grid grid-cols-5">
          <div className="pt-3 col-span-4 ">
            <textarea
              className="w-full bg-[#F6F3F3]  text-start pl-3 rounded-lg border-solid border-2 border-zinc-200"
              placeholder="Note regarding tax sitution "
            ></textarea>
          </div>
        </div>
      </form>
      <p className="text-xs font-medium  pt-3 text-[#212529]">
        When was the last time you received a letter from the IRS?
      </p>
      <form>
        <div className="grid grid-cols-5">
          <div className="pt-3 col-span-4 ">
            <textarea
              className="w-full bg-[#F6F3F3]  text-start pl-3 rounded-lg border-solid border-2 border-zinc-200"
              placeholder=" Estimate of last letter"
            ></textarea>
          </div>
        </div>

        <p className="text-xs font-medium  pt-3">
          What is your current tax filing status? (Single, married filing
          jointly, married filing separately,
           widow)
        </p>
      </form>

      <div className="grid grid-cols-3 mt-2">
        <div className="col-span-2">
          <select
            className="bg-[#F6F3F3] w-full py-2 pr-4 rounded-lg border-solid border-2 border-zinc-200"
            name="Drop Down -(Single, married filing jointly, married filing separately, Wido)"
          >
            <option
              value=" (Drop Down -(Single, married filing jointly, married filing separately, Wido))"
              disabled
              selected
            >
              {" "}
              Drop Down - (Single, married filing jointly, married filing
              separately, Wido){" "}
            </option>
            <option value="Personal">Single</option>
            <option value="Business">married filing jointly</option>
            <option value="Both">married filing separately</option>
            <option value="Both">Wido</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <p className="text-xs font-medium pt-4">
            How many dependents will you be claiming on your
             next tax return?
          </p>
        </div>
        <div>
          <p className="text-xs font-medium pt-4">Are you currently working?</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-3">
        <form>
          <div>
            <input
              type="number"
              placeholder="Dependents"
              className="bg-[#F6F3F3] p-2 w-full rounded-lg border-solid border-2 border-zinc-200"
            />
          </div>
        </form>
        <select
          className="bg-[#F6F3F3] p-2 w-full rounded-lg border-solid border-2 border-zinc-200"
          name="yes/no"
        >
          <option value="yes/no" disabled selected>
            Yes/No
          </option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <div className=" grid grid-cols-2">
          <div>
            <p className="text-xs font-medium pt-5">
              If yes- Are you a w2 employee or 1099 employee or retired {" "}
              employee?
            </p>
          </div>
          <div>
            <p className="text-xs font-medium pt-5">
              What is your monthly gross income? (Before taxes, 
              estimates are fine)
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div>
            <select className="bg-[#F6F3F3] p-2 w-full rounded-lg border-solid border-2 border-zinc-200">
              <option value="enployment type" disabled selected>
                (enployment type)
              </option>
              <option value="1099">1099</option>
              <option value="W2">W2</option>
              <option value="retired">retired</option>
            </select>
          </div>
          <form>
            <div>
              <input
                type="text"
                placeholder="(monthly income)"
                className="bg-[#F6F3F3] p-2 w-full rounded-lg border-solid border-2 border-zinc-200"
              />
            </div>
          </form>
        </div>
      </div>
      <div>
        <p className="text-xs font-medium pt-4">
          What’s your current home address?
        </p>
        <form>
          <div className="pt-1">
            <div>
              <input
                type="number"
                placeholder="(address)"
                className="bg-[#F6F3F3] p-2  pl-5 w-full rounded-lg border-solid border-2 border-zinc-200"
              />
            </div>
          </div>
        </form>
        <div>
          <p className="text-xs font-medium  pt-5">
            Thank you for sharing that information. I am going to ask you about
            your monthly expenses next. If you don’t know 
            exact numbers that is fine. We can go off approximates.
          </p>
        </div>
      </div>

      <div className="pt-7">
        <h1 className=" text-base font-bold text-black mb-3 ">
          Monthly expenses
        </h1>
        <div>
          <div className="grid grid-cols-2  pt-3">
            <div>
              <p className="text-xs font-medium">
                Do you have a mortgage or do you pay rent?
              </p>
            </div>
            <div>
              <p className="text-xs font-medium">
                How much are you paying every month?
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-2">
            <div>
              <select className="bg-[#F6F3F3] p-2 w-full rounded-lg border-solid border-2 border-zinc-200">
                <option value="owns home renting" disabled selected>
                  (owns home, renting)
                </option>
                <option value="owns home">owns home</option>
                <option value="Renting">Renting</option>
              </select>
            </div>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="(monthly income)"
                  className="bg-[#F6F3F3] p-2 w-full rounded-lg border-solid border-2 border-zinc-200"
                />
              </div>
            </form>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2  pt-5">
            <div>
              <p className="text-xs font-medium">
                How much would you estimate your utility cost each
                 month?
              </p>
            </div>
            <div>
              <p className="text-xs font-medium">
                Do you have any cars that you are currently making 
                payments on?
              </p>
            </div>
          </div>
          <form>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <input
                  type="number"
                  placeholder="(utility bills astimate )"
                  className="bg-[#F6F3F3] p-2 w-full rounded-lg border-solid border-2 border-zinc-200"
                />
              </div>

              <div>
                <input
                  type="number"
                  placeholder="(number of cars paymentbeing made)"
                  className="bg-[#F6F3F3] p-2 w-full rounded-lg border-solid border-2 border-zinc-200"
                />
              </div>
            </div>
          </form>
        </div>
        <div>
          <p className="text-xs font-medium pt-7">
            How much are those car payments?
          </p>
          <form>
            <div className="pt-1  grid grid-cols-3">
              <div className="col-span-2">
                <input
                  type="number"
                  placeholder="(payment amount. Couldbe for multiple cars)"
                  className="bg-[#F6F3F3] p-2  pl-5 w-full rounded-lg border-solid border-2 border-zinc-200"
                />
              </div>
            </div>
          </form>
        </div>
        <div>
          <p className="text-xs font-medium pt-7">
            Are you paying for health insurance out of pocket? How much is that
            costing you?
          </p>
          <form>
            <div className="pt-2">
              <div>
                <input
                  type="number"
                  placeholder="(health insurance payment amount)"
                  className="bg-[#F6F3F3] p-2  pl-5 w-full rounded-lg border-solid border-2 border-zinc-200"
                />
              </div>
            </div>
          </form>
          <div>
            <p className="text-xs font-medium  pt-4">
              Alright last question before I can submit your file for approval.
              Do you have any other big expenses you are paying for
              
              monthly such as medical bills or credit card bills?
            </p>
          </div>
        </div>
        <div>
          <div className="pt-4">
            <div>
              <p className="text-xs font-medium">
                If yes- How much are you paying into those bills each month?
              </p>
            </div>
            <form>
              <div className="grid grid-cols-2 gap-3  mt-2">
                <div>
                  <input
                    type="number"
                    placeholder="(Payment amount for medical bill )"
                    className="bg-[#F6F3F3] p-2 w-full rounded-lg border-solid border-2 border-zinc-200"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="(Payment amount for creadit card )"
                    className="bg-[#F6F3F3] p-2 w-full rounded-lg border-solid border-2 border-zinc-200"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="pt-9">
            <div>
              <h1 className=" text-base font-bold text-black mb-3 ">
                Setting up the hold
              </h1>
              <p className="text-xs font-medium">
                Great that is all of the information I need I am going to put
                you on a brief 2-3 minute hold while I submit your file to my{" "}
                
                tax professionals for approval. If you do qualify, I will go
                over the next steps with you when I get back on the line.
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
      </div>
    </div>
  );
}

export default Tax;

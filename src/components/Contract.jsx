import React from "react";
import { DatePicker } from "@nextui-org/date-picker";

function Contract() {
  return (
    <div className="py-7 px-6">
      <p className="text-xs font-medium  pb-6">
        The fee for the first phase of service which is the tax investigation is
        $79.99. By paying in full today I can expedite your
        <br />
        case and your resolution officer will call you with the results as early
        as tomorrow.
      </p>
      <p className="text-xs font-medium  pb-6">
        Is this payment going to be with a debit or credit card?
      </p>
      <div className="mt-7">
        <h1 className=" text-3xl font-medium text-black ">
          Payment for Tax Investigation - $79.99
        </h1>
        <form className="pt-3 ">
          <div>
            <label className="text-base text-zinc-600">Cardholder's Name</label>
            <input
              type="number"
              placeholder="Cardholder's Name"
              className="bg-[#F6F3F3] p-2 w-full rounded-lg border-solid border-2 border-zinc-200"
            />
          </div>
          <div className="mt-3">
            <label className="text-base text-zinc-600">
              Credit or debit card
            </label>
            <input
              type="number"
              placeholder="Credit or debit  card"
              className="bg-[#F6F3F3] p-1 w-full rounded-lg border-solid border-2 border-zinc-200"
            />
          </div>
          <div className="pt-5 flex w-max gap-1 ">
            <button className="py-2 px-3 rounded-lg text-white  bg-[#0d6efd] ">
              Process Payment
            </button>

            <button className="py-2 px-3 rounded-lg text-white  bg-[#0d6efd]">
              Skip Payment
            </button>
          </div>
        </form>
      </div>
      <div className="py-7">
        <h1 className=" text-base font-bold text-black mb-3">
          Finishing off the profile for the documents
        </h1>
        <p className="text-xs font-medium  pb-4">
          Let me fill out your profile so I can send over documents for your
          signature.
        </p>
        <div className="flex flex-col">
          <label className="text-xs font-medium mb-2">
            {" "}
            What is the best email to send these documents to?
          </label>
          <input
            type="number"
            placeholder="Enter Email Here "
            className="bg-[#F6F3F3] p-2 w-72 rounded-lg border-solid border-2 border-zinc-200"
          />
        </div>
        <div className="mt-2">
          <form>
            <div className="grid grid-cols-2 gap-3 ">
              <div>
                <label className="text-xs font-medium">
                  {" "}
                  What is your date of birth?
                </label>
                <DatePicker className="w-full rounded-lg border-solid border-2 border-zinc-200 " />
              </div>
              <div>
                <label className="text-xs font-medium">
                  What is your social security number?
                </label>
                <input
                  type="number"
                  placeholder="____ ← (SSN)"
                  className="bg-[#F6F3F3] p-2 w-full rounded-lg border-solid border-2 border-zinc-200"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="pt-3">
          <form>
            <p className="text-xs font-medium text-center pt-3">
              What’s your Spouses Name?
            </p>
            <div className="grid grid-cols-2 gap-8 mt-3">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-[#F6F3F3] p-2 w-full rounded-lg border-solid border-2 border-zinc-200"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-[#F6F3F3] p-2 w-full rounded-lg border-solid border-2 border-zinc-200"
                />
              </div>
            </div>
          </form>

          <form>
            <div className="grid grid-cols-2 gap-3 pt-3 ">
              <div>
                <label className="text-xs font-medium">
                  {" "}
                  What is your spouses date of birth?
                </label>
                <DatePicker className="w-full rounded-lg border-solid border-2 border-zinc-200 " />
              </div>
              <div>
                <label className="text-xs font-medium">
                  What is your spouse's social security number?
                </label>
                <input
                  type="number"
                  placeholder="___-__-____"
                  className="bg-[#F6F3F3] p-2 w-full rounded-lg border-solid border-2 border-zinc-200"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="text-center pt-5 ">
          <button className="py-2 px-20  w-full rounded-full text-white  bg-lime-600">
            Send contract
          </button>
        </div>
      </div>
    </div>
  );
}
export default Contract;

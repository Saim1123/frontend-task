import { UserData } from "@/app/page";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

interface Step2Props {
  nextStep: () => void;
  setUserData: Dispatch<SetStateAction<UserData>>;
}

const Step2 = ({ nextStep, setUserData }: Step2Props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    setUserData({ name, email, phone, message });
    nextStep();
  };

  return (
    <div className="w-[90%] md:w-[520px] mx-auto mt-8">
      <h2 className="mb-2 md:mb-4 text-[28px] font-semibold text-center">Step # 2</h2>
      <h2 className="mb-2 md:mb-4 text-[28px] font-semibold text-center">Details</h2>
      <p className="mb-2 md:mb-4 text-[#6B7280] text-center">
        We&apos;re thrilled at the opportunity to help you grow your business online. Please let us know the best way to
        reach you.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            id="name"
            className="border h-[48px] px-2"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2 mb-2">
          <div className="flex flex-col w-full md:w-[50%]">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              id="email"
              className="border h-[48px] px-2"
              required
            />
          </div>
          <div className="flex flex-col w-full md:w-[50%]">
            <label htmlFor="number">Phone Number</label>
            <input
              type="text"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              id="number"
              className="border h-[48px] px-2"
              required
            />
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="textarea">Anything else you’d like to share?</label>
          <textarea
            id="textarea"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="p-2 h-[112px]"
          />
        </div>
        <button
          className="flex items-center justify-center w-[160px] h-12 text-white bg-[#019f44] hover:opacity-95 mx-auto my-6"
          type="submit"
        >
          Send Request
        </button>
        <p className="text-[#6B7280] text-center">We promise never to share your information or spam your inbox</p>
      </form>
    </div>
  );
};

export default Step2;

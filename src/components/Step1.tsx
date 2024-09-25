interface Step1Props {
  nextStep: () => void;
}

const Step1 = ({ nextStep }: Step1Props) => {
  const budgetOptions = [
    "< $1,000/mo",
    "$1,000 - $2,000",
    "$2,500 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 +",
  ];

  return (
    <div className="w-[480px] mx-auto mt-8 text-center">
      <h2 className="mb-8 text-[28px] font-semibold">Step # 1</h2>
      <h2 className="mb-8 text-[28px] font-semibold">What is your monthly digital marketing budget?</h2>
      {budgetOptions.map((budget, index) => (
        <div className="w-full mb-3" key={index}>
          <button onClick={nextStep} className="w-full bg-white p-6">
            {budget}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Step1;

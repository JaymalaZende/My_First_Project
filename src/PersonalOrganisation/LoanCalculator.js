import React, { useState } from 'react';

function LoanCalculator() {
  // State to manage input values
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  // Function to handle calculation
  const calculateLoan = () => {
    const principalFloat = parseFloat(principal);
    const interestRateFloat = parseFloat(interestRate) / 100 / 12;
    const loanTermFloat = parseFloat(loanTerm);

    const monthlyPaymentCalc =
      (principalFloat * interestRateFloat) /
      (1 - Math.pow(1 + interestRateFloat, -loanTermFloat));

    const totalInterestCalc = monthlyPaymentCalc * loanTermFloat - principalFloat;
    const totalCostCalc = principalFloat + totalInterestCalc;

    setMonthlyPayment(monthlyPaymentCalc.toFixed(2));
    setTotalInterest(totalInterestCalc.toFixed(2));
    setTotalCost(totalCostCalc.toFixed(2));
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-4">Loan Calculator</h1>

      <div className="flex flex-col space-y-4">
        <div>
          <label htmlFor="principal" className="block">Principal Amount:</label>
          <input
            type="number"
            id="principal"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="border p-2 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="interestRate" className="block">Annual Interest Rate (%):</label>
          <input
            type="number"
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="border p-2 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="loanTerm" className="block">Loan Term (months):</label>
          <input
            type="number"
            id="loanTerm"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            className="border p-2 rounded-md"
          />
        </div>

        <button onClick={calculateLoan} className="bg-blue-500 text-white p-2 rounded-md">
          Calculate
        </button>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Results</h2>
        <p>Monthly Payment: Rs {monthlyPayment}</p>
        <p>Total Interest: Rs {totalInterest}</p>
        <p>Total Cost: Rs {totalCost}</p>
      </div>
    </div>
  );
}

export default LoanCalculator;

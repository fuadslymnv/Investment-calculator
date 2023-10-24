import { calculateInvestmentResults, formatter } from "../util/investment";

const Results = ({ input }) => {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;
  console.log(resultsData);

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment value</th>
            <th> Interest Year</th>
            <th>Total Year</th>
            <th> Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map((resultYear) => {
            const totalInterest =
              resultYear.valueEndOfYear -
              resultYear.annualInvestment * resultYear.year -
              initialInvestment;
            const totalAmountInvested =
              resultYear.valueEndOfYear - totalInterest;

            return (
              <tr key={resultYear.year} className="center">
                <td>{resultYear.year}</td>
                <td>{formatter.format(resultYear.valueEndOfYear)}</td>
                <td>{formatter.format(resultYear.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Results;

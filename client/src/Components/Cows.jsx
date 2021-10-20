import Cow from "./Cow";

function Cows({ cows, dateFormat,deleteCow,updateCow }) {
  return (
    <div className="cows-container">
      {cows.map((item) => (
        <Cow key={item.id} cow={item} dateFormat={dateFormat} updateCow={updateCow} deleteCow={deleteCow}></Cow>
      ))}
    </div>
  );
}
export default Cows;

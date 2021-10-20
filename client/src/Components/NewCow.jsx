import { useState } from "react";

function NewCow({ addCow }) {
  const [cowName, setCowName] = useState("");
  const [cowWeight, setCowWeight] = useState("");
  const [cowDate, setCowDate] = useState("");

  const inputController = (event, value) => {
    switch (value) {
      case "name":
        setCowName(event.target.value);
        break;
      case "weight":
        setCowWeight(event.target.value);
        break;
      case "date":
        setCowDate(event.target.value);
        break;
    }
  };

  const collectData = () => {
    let data = {
      cowName: cowName,
      cowWeight: parseInt(cowWeight),
      cowDate: cowDate
    };
    addCow(data);
  };
  return (
    <section>
      <div className="container ">
        <div className="row new-cow">
          <div className="col-12  col-xl-4">
            <div className="new-name">
              <span>Name:</span>
              <input
                type="text"
                onChange={(event) => inputController(event, "name")}
              />
            </div>
          </div>
          <div className="col-12  col-xl-4 ">
            <div className="new-weight">
              <span>Weight:</span>
              <input
                type="number"
                onChange={(event) => inputController(event, "weight")}
              />
            </div>
          </div>
          <div className="col-12  col-xl-4 ">
            <div className="new-date" >
                <span>Date:</span>
              <input
                type="date"
                onChange={(event) => inputController(event, "date")}
              />
            </div>
          </div>
          <div className="col-12">
              <div className="new-button">
            <button onClick={collectData}>Done!</button>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default NewCow;

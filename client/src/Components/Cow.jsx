import { useState } from "react";

function Cow({ cow, dateFormat, deleteCow,updateCow }) {
  const [newWeight, setNewWeight] = useState(cow.weight)
  const [newTotalMilk, setNewTotalMilk] = useState(0)
  const [newMilkingTime, setNewMilkingTime] = useState(cow.last_milking_time)
    const inputController = (event, value)=> {
        switch (value) {
            case "weight":
                setNewWeight(event.target.value)
                break;
                case "totalMilk":
                setNewTotalMilk(event.target.value)
                break;
                case "lastMilkingTime":
                setNewMilkingTime(event.target.value)
                break;
        }
    }

    const collectData =() => {
        let data = {
            newWeight: newWeight,
            newTotalMilk: parseInt(newTotalMilk) + cow.total_milk,
            newMilkingTime:dateFormat(newMilkingTime),
        }
        updateCow(data,cow.id)
    }
    
  return (
    <>
      <div className="one-cow-container">
        <div className="one-cow-id">
          <div>ID: {cow.id}</div>
        </div>
        <div className="one-cow-name">
          <div>Name: {cow.name}</div>
        </div>
        <div className="one-cow-weight">
          Weight: {cow.weight}
          <input value={newWeight} onChange={(event)=> inputController(event, "weight")} />
        </div>
        <div className="one-cow-milk">
          <div>Pieno kiekis: {cow.total_milk} l
          </div>
          <input type="text" value={newTotalMilk} onChange={(event)=> inputController(event, "totalMilk")} />
        </div>
        <div className="one-cow-milking-time">
          Date: {dateFormat(cow.last_milking_time)}
          <input type="date" value={dateFormat(newMilkingTime)} onChange={(event)=> inputController(event, "lastMilkingTime")} />
        </div>
        <div className="col-12 button-container ">
          <div>
            <button
              onClick={() => deleteCow(cow.id)}
              className="trinimo-mygtukas"
            >
              Trinti
            </button>
          </div>
          <button onClick={collectData} className="redagavimo-mygtukas">Redaguoti</button>
        </div>
      </div>
    </>
  );
}

export default Cow;

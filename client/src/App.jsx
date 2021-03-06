import { useEffect, useState } from "react"
import Cows from "./Components/Cows"
import axios from "axios";
import NewCow from "./Components/NewCow";
import Statistika from "./Components/Statistika";
import Sorting from "./Components/Sorting";
function App() {

  const [cows, setCows] = useState([])
  const [cowsCount, setCowsCount] = useState(0)
  const [cowsTotalMilk, setCowsTotalMilk] = useState(0)
  const [postuKeitimoLaikas, setPostuKeitimoLaikas] = useState(Date.now());


  useEffect(() => {
    axios
      .get("http://localhost:3002/cows")
      .then(function (response) {
        // handle success4
        console.log(response.data);
        setCows(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [postuKeitimoLaikas]);

  const addCow = (data) => {
    console.log(data);
    axios
    .post("http://localhost:3002/cows", data)
    .then(function (response) {
      // handle success4
      setPostuKeitimoLaikas(Date.now())
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  const deleteCow = (id) => {

    axios
    .delete("http://localhost:3002/cows/" + id)
    .then(function (response) {
      // handle success4
      setPostuKeitimoLaikas(Date.now())
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  const updateCow = (data,id) => {

    axios
    .put("http://localhost:3002/cows/" + id, data)
    .then(function (response) {
      // handle success4
      setPostuKeitimoLaikas(Date.now())
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  const getCount = () => {
    axios
    .get("http://localhost:3002/cows/count")
    .then(function (response) {
      // handle success4
      setCowsCount(response.data[0].cowCount)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }
  const getCowsTotalMilk = () => {
    axios
    .get("http://localhost:3002/cows/totalMilk")
    .then(function (response) {
      // handle success4
      setCowsTotalMilk(response.data[0].totalMilk)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }

  useEffect(() => {
    getCount()
    getCowsTotalMilk()
  }, [])


  const crud = {
    add:addCow,
    delete: deleteCow,
    edit: updateCow,
  }


  const dateFormat = (d) => {
    d = new Date(d)
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    let day = d.getDate();
    if (day < 10) {
      day = "0" + day;
    }
    return (`${year}-${month}-${day}`)
  }
  
  // Sukurkite r????iavimo galimyb?? pagal gyvulio svor?? ir pieno kiek?? (sukurkite du mygtukus,
  //   kuriuos paspaudus gyvuli?? apra??ai i??sirikiuot?? atitinkama tvarka). Tam panaudokite
  //   Angular ar React galimybes (ne serverio).


  const sortByWeight = () => {
    let cowsCopy = cows.slice()
    cowsCopy = cowsCopy.sort((a,b)=> b.weight - a.weight)
    setCows(cowsCopy)
  }

  const sortByMilk = () => {
    let cowsCopy = cows.slice()
    cowsCopy = cowsCopy.sort((a,b)=> b.total_milk - a.total_milk)
    setCows(cowsCopy)
  }
  return (
    <>
    <Statistika count={cowsCount} total={cowsTotalMilk} sortByWeight={sortByWeight}  sortByMilk={sortByMilk} ></Statistika>
    <NewCow addCow={crud.add} ></NewCow>
    <Cows updateCow={crud.edit} dateFormat={dateFormat} cows={cows} deleteCow={crud.delete} ></Cows>
    </>
  )
}

export default App
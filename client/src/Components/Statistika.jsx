function Statistika({count,total,sortByWeight,sortByMilk}) {
    return (
        <div className="container">
            <div className="row statistika" >
                <div className="col-12" > <h1>Gyvuliu kiekis: {count} </h1> </div>
                <div className="col-12"><h1>Bendras pieno kiekis: {total} l</h1></div>
                <div className="col-12" ><button className="button-weight" onClick={sortByWeight}  >Sort by weight</button></div>
                <div className="col-12" ><button className="button-milk" onClick={sortByMilk}  >Sort by milk</button></div>
            </div>
        </div>
    )
}
export default Statistika
// Sukurkite statistikos laukelius, kuriuose būtų atvaizduojamas gyvulių kiekis ir bendras
// pieno kiekis (duomenys gaunami iš serverio duomenų bazės) Keičiantis duomenų bazės
// įrašams automatiškai turi keistis ir statistika.
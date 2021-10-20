function Statistika({count,total}) {
    return (
        <div className="container">
            <div className="row statistika" >
                <div className="col-12" >Gyvuliu kiekis: {count} </div>
                <div className="col-12">Bendras pieno kiekis: {total} l</div>
            </div>
        </div>
    )
}
export default Statistika
// Sukurkite statistikos laukelius, kuriuose būtų atvaizduojamas gyvulių kiekis ir bendras
// pieno kiekis (duomenys gaunami iš serverio duomenų bazės) Keičiantis duomenų bazės
// įrašams automatiškai turi keistis ir statistika.
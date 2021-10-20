function Sorting({sortByWeight,sortByMilk}) {
    return (
        <div className="container" >
            <div className="row" >
                <div className="col-12" ><button onClick={sortByWeight}  >Sort by weight</button></div>
                <div className="col-12" ><button onClick={sortByMilk}  >Sort by milk</button></div>
            </div>
        </div>
    )
}

export default Sorting
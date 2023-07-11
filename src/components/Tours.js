import Card from './Card'
function Tours({tours, removeTour}){ 
    return(
        <div className='container'>
            <div className="title">               
                <h2>Place to GO...</h2>
            </div>
            <div className='card'> 
               {
                tours.map((tour) => <Card {...tour} removeTour={removeTour} ></Card> )
                }
            </div>
        </div>
    )
}
export default Tours;
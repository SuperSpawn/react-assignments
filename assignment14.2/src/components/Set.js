
import '../styles/Set.css'
import Map from './Map'



function Set({filterString, number}) {

    const GetUsers = () => {
        let array = [];
        for(let i = 0; i < number; ++ i) {
            array.push(<Map key={i}/>);
        }
        if(!filterString) {
            array.forEach((user) => {
                  
            })
        }
        return array;
    }
    
    return (
        <div className='Set'>
            <GetUsers/>
        </div>
    )
}

export default Set;
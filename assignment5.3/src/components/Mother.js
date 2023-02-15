
import './Mother.css'
import Son from './Son'

function SonArray() {
    const kids= [
        { name: 'Ori', color: 'red' },
        { name: 'Ron', color: 'blue' },
        { name: 'Sigalit', color: 'green' },
        { name: 'Ruti', color: 'yellow' },
        { name: 'Alon', color: 'purple' },
    ]
    
    
    return (   
        kids.map(function(child) {
            return (
                <Son name={child.name} color={child.color}/>
            );
        })
    )
}

function Mother(props) {
    
    return (
        <div className="Mother">
            <h1>A Tale of 5 bloons</h1>
            <div className='SonArray'>
                <SonArray/>
            </div>
        </div>
    )

    
}

export default Mother;
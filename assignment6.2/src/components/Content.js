
import './Content.css'

function Content(props) {
    if(props.visible === true) {
        return (
            <div className='Content'></div>
        )
    }
    else return (
        <div></div>
    )
}

export default Content;

import './player.css'
function Player(props)
{
        const {name,match,runs,age} = props;
        return(
            <ul className='PlayerList'>
                <li className='item'>Name {name}</li>
                <li className='item'>Match {match}</li>
                <li className='item'>runs {runs}</li>
                <li className='item'>age {age}</li>
            </ul>
        )
}
export default Player;
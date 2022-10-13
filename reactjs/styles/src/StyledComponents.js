import styled from 'styled-components'
const Ul = styled.ul`
border:2px solid green;
margin:10px;
list-style-type: none;
padding:10px;
background-color: gray;
box-shadow:3px 3px 5px yellow
`
const Li = styled.li`
font-size: 1.5rem;
border-bottom: 1px solid blue;
color:white;
padding-bottom: 5px;
`
function Player(props)
{
        const {name,match,runs,age} = props;
        return(
            <Ul>
                <Li>Name {name}</Li>
                <Li>Match {match}</Li>
                <Li>runs {runs}</Li>
                <Li>age {age}</Li>
            </Ul>
        )
}
export default Player;
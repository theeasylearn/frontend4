function ListExample(props)
{
    const states = props.states;
    var StateList = states.map((item) => <li>{item}</li>);
    return(
        <div>
            <h3>List in Reactjs</h3> <hr/>
            <ul>
                {StateList}
            </ul>
        </div>
    )
}
export default ListExample
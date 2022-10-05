function ListExample2(props)
{
    const states = props.states;
    var StateList = states.map((item) => <li key={item.id}>{item.name}</li>);
    return(
        <div>
            <h3>List in Reactjs part 2</h3> <hr/>
            <ul>
                {StateList}
            </ul>
        </div>
    )
}
export default ListExample2
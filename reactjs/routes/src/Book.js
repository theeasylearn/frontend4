import { useParams } from "react-router-dom";

function Book()
{
    const {id} = useParams() 
    return(
        <h1>this is single Book with id = {id}</h1>
    )
}
export default Book;
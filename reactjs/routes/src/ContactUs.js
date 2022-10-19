import { useParams } from "react-router-dom"

function ContactUs(){
    const {mobile,email} = useParams()
    return(
        <div>
            <h1>Contact us</h1>
            <hr/>
            <b>Email </b> {email}<br/>
            <b>Mobile </b> {mobile}
        </div>
    )
}
export default ContactUs
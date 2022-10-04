function ConditionalRendering2(props)
{
    const messages = props.messages;
    return(
        <div>
            {messages.length>0 && <h2>Your have {messages.length} unread message</h2>}
            {messages.length==0 && <h2>Your have no new message</h2>}
        </div>
    );
}   
export default ConditionalRendering2;
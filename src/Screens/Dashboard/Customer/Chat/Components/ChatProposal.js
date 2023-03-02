const ChatProposal = ({message}) => {
    return (<>
        {message.data.description}
        {message.data.budget}
    </>)
}

export default ChatProposal;

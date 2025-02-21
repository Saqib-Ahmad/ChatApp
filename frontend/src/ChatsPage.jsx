import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage=(props)=>{
    const chatProps = useMultiChatLogic('e631e0a5-4cad-400d-a36e-169fa1c291b9', props.user.username, props.user.secret);
    return <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
    </div>
}

export default ChatsPage
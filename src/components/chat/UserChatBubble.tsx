import React from 'react'
import { userO } from 'react-icons-kit/fa/userO'
import { Icon } from 'react-icons-kit'
import BubbleDocumentBadge from './BubbleDocumentBadge'
import {chevronUp} from 'react-icons-kit/fa/chevronUp'
import DocumentCollapse from './DocumentCollapse'
import ChatTextBox from './ChatTextBox'
type Props = {
    text: string,
    type: number,
    docs:any,
    chat_id:number,
    message_id:number,
    favourite:boolean,

}




const UserChatBubble = ({ text, type, docs, chat_id, message_id, favourite }: Props) => {
   

    return (
        <div className='flex flex-row bg-secondary  py-4 items-center'>
            <div className='container flex items-center mx-auto'>
                <div className="avatar placeholder pl-8 pr-7">
                    <div className="bg-neutral-focus text-white rounded-full w-12 h-12">
                        <Icon size={32} icon={userO} />
                    </div>
                </div>
                <div className='flex mt-4 flex-col w-full  mr-28'>
                    <div style={{whiteSpace: 'pre-line'}} className='font-medium  '>
                     { <Text text={text}></Text>}
                    </div>
                    <DocumentCollapse type={type} documents={docs}></DocumentCollapse>                


                </div>

            </div>

        </div>
    )
}

const Text = ({text}:{text:string})=>{
    return(
        text.split('\\n').map(i => 
            <div>{i}{"\n"}</div>
        )
    )
}

export default UserChatBubble
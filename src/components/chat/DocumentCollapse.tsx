import React,{useRef,useState} from 'react'
import { Icon } from 'react-icons-kit'
import BubbleDocumentBadge from './BubbleDocumentBadge'
import {chevronDown} from 'react-icons-kit/fa/chevronDown'


type document={
    id:number,
    name:string
}


const DocumentCollapse = ({documents, type}:{documents:Array<document>|null, type:number}) => {
    const ref = useRef<HTMLInputElement|undefined>();
    const [open, setOpen] = useState(false)

const collapse = ()=>{
    setOpen(false)
}

const display = ()=>{
    setOpen(true)
}

const handleClick=()=>{
        if(ref?.current?.checked){
            display()
        }else{
            collapse()
        }
}

  return (
   
    <div tabIndex={0} className={`${type?"bg-gray-200":"bg-base-200"} collapse w-fit  mt-4 `}>
    <input ref={ref} onClick={handleClick} type="checkbox" className="peer" defaultChecked={false} /> 
        <div  className="collapse-title w-full px-2 text-md font-medium flex items-center justify-between">
            <span className='font-bold'>{type?"Sources":"Selected Files"}</span>
            <Icon className={`${open?"rotate-180":"rotate-0"} `} size={16} icon={chevronDown} />
        </div>
        <div className="collapse-content space-y-2">
            {documents?.map((doc, index)=><BubbleDocumentBadge key={index + 1} id={index+1}  name={doc.name} link={doc.file}></BubbleDocumentBadge>)}
        </div>
    </div>
  )
}

export default DocumentCollapse
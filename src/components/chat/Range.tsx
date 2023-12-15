import React, {useState,ChangeEvent, useEffect } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import {  useLLMTemperatureMutation } from '../../stores/chats/messages';
import { useQuery } from '@tanstack/react-query';

const Range = () => {
    const queryClient = useQueryClient()

    const mutation = useLLMTemperatureMutation()
    const temperature = queryClient.getQueryData(["Temperature"])
  
    const [rangeVal,setRangeVal] = useState( temperature)
    

    

   

    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
     
        setRangeVal(parseFloat(e.target.value))
        mutation.mutate(parseFloat(e.target.value))
    }
    return (
        <div>
            <label
                htmlFor="customRange3"
                className="mb-1 mt-2 inline-block text-black"
            >Temperature : {typeof rangeVal!="undefined" ?rangeVal:"0.5"}</label>

            <input
                type="range"
                onChange={(e)=>handleChange(e)}
                className="range range-primary"
                defaultValue={0.5}
                min="0"
                max="2"
                value={rangeVal}
                step="0.1"
                id="customRange3" />
        </div>
    )
}

export default Range
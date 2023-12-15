import React, { Fragment, useState, ChangeEvent } from 'react';
import { Icon } from 'react-icons-kit';
;
import { ic_help_outline_twotone } from 'react-icons-kit/md/ic_help_outline_twotone';
import { ic_settings } from 'react-icons-kit/md/ic_settings';
import { shareSquareO } from 'react-icons-kit/fa/shareSquareO'
import { close } from 'react-icons-kit/fa/close'
import { Menu, Transition, Popover } from '@headlessui/react';
import { filePdfO } from 'react-icons-kit/fa/filePdfO';
import ProfileDropdownIcon from '../auth/ProfileDropdownIcon';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getProject } from '../../stores/projectState';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from '../../config/axiosConfig';
import { API_ENDPOINTS } from '../../config/apiConfig';
import { setSelectedChatMutation } from '../../stores/chats/chats';
import Range from './Range';
import { useSelectedLLM } from '../../stores/chats/messages';

const NavBar = () => {

  const navigate = useNavigate();
  const { project_id } = useParams()
  const { data, isSuccess } = useQuery(["projectState"], () => getProject(project_id))


  return (
    <div className=' flex justify-between  h-14  w-full bg-base-100 '>
      <div className='flex  items-center w-full text-bold'>
        <div className=' text-xl sm:text-md font-bold text-primary ml-6'>{isSuccess && data.name} </div>
      </div>
      <div className='flex mr-5 items-center '>
        {/*<div className="btn btn-xs btn-outline btn-accent">AI Prompts</div>
        
     */}
        <SettingsDropdown></SettingsDropdown>
        <DownloadFileDropdown></DownloadFileDropdown>
        <Icon
          className="text-primary hover:scale-105 cursor-pointer mr-2 -mt-1"
          size={25}
          icon={ic_help_outline_twotone}
          onClick={() => { navigate("/dashboard/introduction") }}
        />

        <ProfileDropdownIcon></ProfileDropdownIcon>
      </div>
    </div>
  )
}



type IconProps = {
  iconObj: any
  size?: number
}

const NavBarIcon = ({ iconObj, size }: IconProps) => {
  return (
    <div className={`relative flex items-center justify-center h-10 w-10 mt-2 mb-2  hover:bg-secondary  text-primary  hover:rounded-xl  transition-all duration-300 ease-linear cursor-pointer  `}>
      <Icon size={size ? size : 26} icon={iconObj}></Icon>
    </div>
  )
}



const SettingsDropdown = () => {
  let queryClient = useQueryClient()
  const currentLLM = queryClient.getQueryData(["selectedLLM"])
  const AnswerLength = queryClient.getQueryData(["AnswerLength"])
  const [selectedLLMOption, setSelectedLLMOption] = useState(currentLLM)
  const [selectedAnswerLengt, setSelectedAnswerLengt] = useState(AnswerLength)
  

  const handleChangeLLM=(e:ChangeEvent<HTMLSelectElement>)=>{

    queryClient.setQueryData(["selectedLLM"], e.target.value)
    setSelectedLLMOption(e.target.value)

  }

  const handleChangeAnswerLength=(e:ChangeEvent<HTMLSelectElement>)=>{

    queryClient.setQueryData(["AnswerLength"], e.target.value)
    setSelectedAnswerLengt(e.target.value)
  }

  return (
    <div className="flex ">
      <Menu  as="div" className="relative z-20  text-left">
        <div className='tooltip tooltip-primary tooltip-bottom ' data-tip="LLM settings">
          <Menu.Button >
            <NavBarIcon iconObj={ic_settings}></NavBarIcon>
          </Menu.Button>
        </div>
        
          <Menu.Items  unmount={false} className="absolute right-0 mt-2 w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none ">
            <div className=" py-2 flex flex-col px-4 ">
              <Menu.Item>

                <div className="flex justify-between  ">
                  <div className="font-bold text-sm ">Large Language Model Settings</div>
                  <Icon className='cursor-pointer' size={16} icon={close}></Icon>
                </div>
              </Menu.Item>

              <hr className='mt-1 mb-1' />
              <div className='flex flex-col'>
               
                <Range></Range>
                <span className='mt-6'>Select Large Language Model</span>
                <select value={selectedLLMOption} defaultValue={"gpt-3.5-turbo-16k"} onChange={(e)=>handleChangeLLM(e)} className="select select-primary mb-4 w-full max-w-xs ">
                  <option value={"gpt-3.5-turbo-16k"} >GPT-3.5-16k</option>
                  <option value={"gpt-4"}>GPT-4</option>

                </select>

                <span className='mt-2'>Select Answer Length</span>
                <select value={selectedAnswerLengt} defaultValue={"medium"} onChange={(e)=>handleChangeAnswerLength(e)} className="select select-primary mb-4 w-full max-w-xs ">
                  <option value={"short"} >short</option>
                  <option value={"medium"}  >medium</option>
                  <option value={"long"}>long</option>
                </select>
              </div>

            </div>


          </Menu.Items>
        
      </Menu>
    </div>
  )

}



const DownloadFileDropdown = () => {
  const [error, setError] = useState<string>("")
  const { isLoading } = setSelectedChatMutation()

  let queryClient = useQueryClient()


  const downloadPDF = () => {
    let chat_id: string | null | undefined = queryClient.getQueryData(["selectedChat"])
    if (chat_id != null) {
      axios.get(`${API_ENDPOINTS.getPDF}${chat_id}/`, {
        withCredentials: true,
        responseType: 'blob',
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(res => {
          const url = URL.createObjectURL(res.data);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'file.pdf';
          link.click();
          setError("")
        })
        .catch(error => {
          console.error('Error downloading PDF:', error);
          setError(error)
        })

    } else {
      setError("Please select a chat and try again!")
    }
  }



  return (
    <div className="flex ">
      <Menu as="div" className="relative inline-block text-left">
        <div className='tooltip tooltip-primary tooltip-bottom ' data-tip="share chat">
          <Menu.Button >
            <NavBarIcon size={23} iconObj={shareSquareO}></NavBarIcon>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none ">
            <div className=" py-2 flex flex-col px-4 ">
              <Menu.Item>

                <div className="flex justify-between  ">
                  <div className="font-bold text-sm ">Download this chat</div>
                  <Icon className='cursor-pointer' size={16} icon={close}></Icon>
                </div>
              </Menu.Item>

              <hr className='mt-1 mb-1' />
              {/*
              <div className='font-bold mt-2 mb-1'>Link sharing</div>
              <div className="pt-1  bg-base-100 rounded-xl">
                <label className="label cursor-pointer  text-sm">
                  Public link
                  <input type="checkbox" className="toggle toggle-primary toggle-sm" />
                </label>
              </div>
              <button className="btn btn-primary btn-outline btn-sm rounded-xl mt-4 mx-2 ">
                <Icon size={16} icon={ic_share_outline}></Icon>
                Copy Public Link
              </button>

              <div className='font-bold mt-4 mb-1'>Download</div>
              <button className="flex items-center gap-1 py-2 px-2 bg-base-100 rounded-xl my-1 hover:bg-secondary transition-color cursor-pointer ">
                <Icon size={16} icon={fileWordO}></Icon>
                Microsoft word
              </button>
              */}

              <button onClick={() => downloadPDF()} className="flex items-center gap-1 py-2 px-2 bg-base-100 rounded-xl my-1 hover:bg-secondary transition-color cursor-pointer">
                <Icon size={16} icon={filePdfO}></Icon>
                PDF
              </button>

              {error != "" && (<div className='text-error'>{error}</div>)}

            </div>


          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
export default NavBar
import React,{useEffect} from 'react'
import { Link ,useLocation} from 'react-router-dom'


const logout = () => {
 
  const {state} = useLocation();
  const { data } = state
    

  return (
    <div style={{ padding: 20 }}>
    <h2>{data}</h2>
    <p>Go back to <Link to="/" className="list link">Home</Link></p>
  </div>
  )
}

export default logout
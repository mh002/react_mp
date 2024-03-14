import React,{useState,useEffect} from 'react'
import CardVideo from './CardVideo'
import { getVideos } from '../services/allApis'

function Videos({addStatus}) {

  const [allVideos,setAllVideos]=useState([])
  const [delStatus,setDelStatus]=useState({})

  useEffect(()=>{
    getData()
  },[addStatus,delStatus])

  const getData=async()=>{
    const res=await getVideos()
    //console.log(res.data)
    setAllVideos(res.data)
    //console.log(allVideos)
  }

  return (
    <div className='bg-light row border border-2 border-dark p-1'>
      {
        allVideos?
        allVideos.map(item=>(
          <CardVideo video={item} setDelStatus={setDelStatus}/>
        ))
        :
        <h1>No Videos</h1>
      }
      
    </div>
  )
}

export default Videos
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { deleteVideo } from '../services/allApis';
import { toast } from 'react-toastify';
import { addHistory } from '../services/allApis';


function CardVideo({ video,setDelStatus,cat }) {

  const handleDelete=async(id)=>{
    // console.log(id)
    const res=await deleteVideo(id)
    // console.log(res)
    if(res.status>=200 && res.status<300){
      setDelStatus(res)
      toast.success("Video Deleted Successfully!!")
    }
    else{
      toast.error("Video Deletion Failed!!")
    }
  }

  const [show, setShow] = useState(false);
  const [history,setHistory]=useState({
    caption: video.caption,url: video.url,datetime:''
  })

  const handleOnDrag=(e,id)=>{
    console.log("Video is Dragging:id"+id)
    e.dataTransfer.setData("VideoId",id)
  }

  

  const handleClose = () => {
    addHistory(history)
    setShow(false)};
  const handleShow = () =>{ 
    const dt=new Date()
    setHistory({...history,datetime:new Date()})
    setShow(true)};
  return (
    <>
      <Card style={cat?{width:'90%'}:{ width: '18rem' }} className='ms-3 mb-3' draggable onDragStart={(e)=>{handleOnDrag(e,video?.id)}}>
        <Card.Img variant="top" src={video.image} onClick={handleShow} />
        <Card.Body className='d-flex flex-row justify-content-between'>
          <Card.Title>{video.caption}</Card.Title>
          {
            !cat &&
            <i className='fa-solid fa-trash' onClick={()=>{handleDelete(video.id)}} style={{ color: '#f00a0a' }}></i>

          }
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="315" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>


    </>
  )
}

export default CardVideo
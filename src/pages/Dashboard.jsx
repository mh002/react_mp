import React,{useState} from 'react'
import{Row,Col} from 'react-bootstrap'
import Addvideos from '../components/Addvideos'
import Categories from '../components/Categories'
import Videos from '../components/Videos'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function Dashboard() {
  const [addStatus,setAddStatus]=useState({})

  return (
    <>
    <div className='p-5'>
      <h3>DASHBOARD</h3>
      <Row>
        <Col sm='1' md='2'>
          <Addvideos setAddStatus={setAddStatus}/>
        </Col>
        <Col sm='4' md='6'>
          <Videos addStatus={addStatus}/>
        </Col>
        <Col sm='2' md='4'>
          <Categories/>
        </Col>
      </Row>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Dashboard
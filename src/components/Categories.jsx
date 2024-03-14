import React,{useState}from 'react'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import { Form } from 'react-bootstrap';
import { addCategory } from '../services/allApis';
import { toast } from 'react-toastify';
import CategoryList from './CategoryList';

function Categories() {
  const [addStatus,setAddStatus]=useState({})
  // const [delStatus,setDelStatus]=useState({})
  // const [delCat, setDelCat] = useState({})

  
  
  const [show, setShow] = useState(false);
  const [category,setCategory]=useState({
    name:'',videos:[]
  })
  const getCategory = (val) => {
    
    if (val) {
      setCategory({...category, name: val })
    }

  }
  const handleUpload = async() => {
    // const {caption}=
    console.log(category)

    if (category.name) { 
      const res = await addCategory(category)
      //console.log(res)
      if(res.status>=200 && res.status<300){
        toast.success("Category Added Successfully!!!")
        handleClose()
        setAddStatus(res.data)
      }
      else{
        toast.error("Category Adding Failed!!!")
      }
    }
    else{
      toast.info("Enter Valid Data!!!")
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <div className='d-grid'>
     <button variant='primary' className='btn' onClick={handleShow}Add Category></button>


     </div>
     <Button className=' flex-row justify-content-between p-9 btn-warning' variant="primary" onClick={handleShow}>
        Add Category
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>{getCategory(e.target.value)}}/>
      </Form.Group>
     
      </Form>

        </Modal.Body>
        <Modal.Footer className='justify-content-center'>
          <Button variant='secondary' onClick={handleClose}>Close</Button>
          <Button  variant="primary" onClick={handleUpload}>ADD</Button>
        </Modal.Footer>
      </Modal>
      <CategoryList status={addStatus} />
    </>
   
  )
}

export default Categories
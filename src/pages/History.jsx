import React, { useEffect, useState } from 'react'
import { getHistory } from '../services/allApis'
import { deleteHistory } from '../services/allApis'
import { toast } from 'react-toastify'

function History() {
  const [delHis, setDelHis] = useState({})
  const [his, setHis] = useState([])
  


  useEffect(() => {
    getData()
  }, [delHis])

  const getData = async () => {
    const res = await getHistory()
    setHis(res.data)
    console.log(res.data)
  }

  const handleDelete = async (id) => {
    console.log(id)
    const res = await deleteHistory(id)
    console.log(res)
    if (res.status >= 200 && res.status < 300) {
      setDelHis(res)
      toast.success("Deleted Successfully!!")
    }
    else {
      toast.error("Deletion Failed!!")
    }
  }

  return (
    <>
      <div className='p-5'>
        <h1>WATCH HISTORY</h1>
        <table className='table table-bordered'>
          <tr>
            <th>CAPTION</th>
            <th>URL</th>
            <th>DATE & TIME</th>
            <th></th>
          </tr>
          {
            his ?
              his.map(item => (
                <tr>
                  <td>{item.caption}</td>
                  <td>{item.url}</td>
                  <td>{item.datetime}</td>
                  <td>
                    <i className="fa-solid fa-trash float-end" onClick={() => { handleDelete(item.id) }}></i>
                  </td>
                </tr>
              ))
              :
              <tr>
                <p className='text-danger'>NO WATCH HISTORY!!</p>
              </tr>
          }

        </table>
      </div>
    </>
  )
}

export default History
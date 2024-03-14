import React, { useEffect, useState } from 'react'
import { getCategory, getSpecificVideo, updatecategory } from '../services/allApis'
import { deleteCategory } from '../services/allApis'
import { toast } from 'react-toastify'
import CardVideo from './CardVideo'


function CategoryList({ status }) {
    const [cat, setCat] = useState([])
    const [delStatus, setDelStatus] = useState({})





    useEffect(() => {
        getCat()
    }, [status, delStatus])

    const getCat = async () => {
        const res = await getCategory()
        console.log(res.data)
        setCat(res.data)
    }

    const handleDelete = async (id) => {
        // console.log(id)
        const res = await deleteCategory(id)
        // console.log(res)
        if (res.status >= 200 && res.status < 300) {
            setDelStatus(res)
            toast.success("Video Deleted Successfully!!")
        }
        else {
            toast.error("Video Deletion Failed!!")
        }
    }

    const handleDrop = async (e, id) => {
        console.log("category id:" + id)
        const vid = e.dataTransfer.getData("VideoId")
        console.log("Dropped VIdeo ID:" + vid)
        let category = cat.find(item => item.id == id)
        console.log(category)
        const res = await getSpecificVideo(vid)
        console.log(res.data)
        category.videos.push(res.data)
        console.log(category)
        const rescat = await updatecategory(category, id)
        if (rescat.status >= 200 && rescat.status < 300) {
            toast.success(`${res.data.caption} is added to ${category.name}!!`)
            getCat()
        }
        else {
            toast.error("Adding to Category Failed!!!")
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        console.log("Dragging Over Category")
    }

    return (
        <>
            <div className='border border-dark p-3 mt-3'>
                {
                    cat ?
                        cat.map(item => (
                            <div className='bg-secondary mb-3 p-3 rounded shadow' onDragOver={e => { handleDragOver(e) }} droppable onDrop={e => { handleDrop(e, item?.id) }}>
                                <div>
                                    <span>{item.name}</span>
                                    <i className="fa-solid fa-trash float-end" onClick={() => { handleDelete(item.id) }} style={{ color: "#ff0000" }}></i>
                                </div>
                                <div>
                                    {
                                        item?.videos.map(v=>(
                                            <CardVideo video={v} cat={true}/>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                        :
                        <h1>No Categories</h1>
                }
            </div>
        </>

    )
}

export default CategoryList
import React, {useRef, useState } from 'react'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_CATEGORY_PENDING, POST_CATEGORY_PENDING, UPDATE_CATEGORY_PENDING } from '../action';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Category = () => {

    let category = useSelector((state) => state.adminReducer)
    let name = useRef();
    let desc = useRef();
    const [view, setview] = useState({})
    let dispatch = useDispatch();

    // add category
    let addCategory = () => {
        let category = {
            name: name.current.value,
            desc: desc.current.value,
        }
        dispatch({ type: POST_CATEGORY_PENDING, payload: category })
        name.current.value = "";
        desc.current.value = ""
    }

    // delete category
    let removeCategory = (category) => {
        dispatch({ type: DELETE_CATEGORY_PENDING, payload: category })
    }

    // update category
    let viewCategory = (category) => {
        setview(category)
    }
    let handleview = (e) => {
        setview({ ...view, [e.target.name]: e.target.value })
    }
    let saveCategory = () => {
        dispatch({ type: UPDATE_CATEGORY_PENDING, payload: view })
    }

    return (
        <>
            <section className="category">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <Sidebar />
                        </div>
                        <div className="col-lg-10">
                            <div className="category-data">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="category-card">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h4 className='mb-0'>Create Categories</h4>
                                                </div>
                                                <div className="card-body">
                                                    <label>Category Title*<input type="text" ref={name} name='name' className='form-control' placeHolder='enter title' /></label>
                                                    <label>description*<input type="text" ref={desc} name='desc' className='form-control' placeHolder='enter description' /></label>
                                                    <button className='button mt-3' onClick={addCategory} >add Category</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <table border="1px" cellPadding="15px">
                                            <thead>
                                                <tr>
                                                    <th>category name</th>
                                                    <th>description</th>
                                                    <th>delete</th>
                                                    <th>update</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    category.category?.map((val, ind) => (
                                                        <React.Fragment key={ind}>
                                                            <tr>
                                                                <td>{val.name}</td>
                                                                <td>{val.desc}</td>
                                                                <td> <button className='cate-btn' onClick={() => removeCategory(val._id)}><i className="fa-solid fa-trash-can pe-1"></i></button></td>
                                                                <td><button className='cate-btn' onClick={() => viewCategory(val)} data-bs-target="#exampleModal" data-bs-toggle="modal" ><i className="fa-regular fa-pen-to-square"></i></button></td>
                                                            </tr>
                                                        </React.Fragment>
                                                    ))
                                                }
                                            </tbody>
                                        </table>

                                        <div className="modal fade" id="exampleModal" tabIndex="-1">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5">category</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <form>
                                                            <label className='mt-0'>Category Title*<input type="text" value={view.name || ''} onChange={handleview} name='name' className='form-control' /></label>
                                                            <label>description*<input type="text" value={view.desc || ''} onChange={handleview} name='desc' className='form-control' /></label>
                                                        </form>
                                                        <button className='button mt-3' data-bs-dismiss="modal" onClick={saveCategory} >save Category</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    )
}

export default Category

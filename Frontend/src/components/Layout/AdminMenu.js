import React from 'react'
import { NavLink } from 'react-router-dom'
const AdminMenu = () => {
    return (
        <>
            <div className='text-center'>
                <div className="list-group">
                    <h4>Admin Panel</h4>
                    <NavLink
                        to="/dashboard/admin/uplode-video"
                        className="list-group-item list-group-item-action">
                        Upload Video
                    </NavLink>
                    <NavLink
                        to="/dashboard/admin/add-lecture"
                        className="list-group-item list-group-item-action">
                        Add new Leacture
                    </NavLink>
                    <NavLink
                        to="/dashboard/admin/users"
                        className="list-group-item list-group-item-action">
                        Users
                    </NavLink>
                </div>
            </div>


        </>
    )
}

export default AdminMenu
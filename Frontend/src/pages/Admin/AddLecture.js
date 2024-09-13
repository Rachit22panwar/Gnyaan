import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'

const AddLecture = () => {
    return (
        <Layout title={'Dashboard - Add Lecture'}>
            <div className='contain-fluid m-3 p-3'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminMenu />
                    </div>
                    <div className='col-md-9'>
                        <h1>Add Lecture</h1>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default AddLecture
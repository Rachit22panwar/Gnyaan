import React from 'react'
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import AdminMenu from '../../components/Layout/AdminMenu'

const AdminDashboard = () => {
  return (
    <div>
     <Header />
      <div className='contain-fluid m-3 p-3'>
        <div className='row'>
          <div className='col-md-3'>
            <AdminMenu />
          </div>
        </div>
      </div>
      <Footer />  
    </div>
  )
}

export default AdminDashboard
import React from 'react'
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import UserMenu from '../../components/Layout/UserMenu';

const Order = () => {
    return (
        <div>
        <Header />
        <div title={"Your Orders"}>
            <div className="container-flui p-3 m-3">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu />
                    </div>
                    <div className="col-md-9">
                        <h1>All Orders</h1>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>

    )
}

export default Order
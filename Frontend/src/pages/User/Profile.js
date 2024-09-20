import React from 'react'
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import UserMenu from '../../components/Layout/UserMenu'

const Profile = () => {
    return (
        <div>
        <Header />
        <div title={"Your Profile"}>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu />
                    </div>
                    <div className="col-md-9">
                        <h1>Your Profile</h1>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Profile
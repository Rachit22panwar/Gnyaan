
import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import UserMenu from '../../components/Layout/UserMenu';
//import { useAuth } from '../../context/auth';
const Dashboard = () => {
  //const[auth] = useAuth();
  return (
    <div>
     <Header />
    <div title={"Dashboard"}>
   
       <div className="container-flui m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
         {/* <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.address}</h3>
            </div>
          </div>*/}
        </div>
      </div>
     
    </div>
    <Footer />
    </div>
   
  );
};

export default Dashboard;

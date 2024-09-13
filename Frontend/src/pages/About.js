import React from 'react';
import Layout from '../components/Layout/Layout';

const About = () => {
    return (
        <Layout>
            <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/image/aboutus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
           We are here to Create Your Resume 
          </p>
        </div>
      </div>
        </Layout>
    );
};

export default About;
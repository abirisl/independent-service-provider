import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-5 p-3'>
            <div className='border border-3 m-3 p-4'>
                <h3>##. Difference between authorization and authentication?</h3>
                <h5>Answer: Authentication</h5>
                <p> 1. Authentication verifies who the user is.</p>
                <p> 2. Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</p>
                <p> 3. Authentication is the first step of a good identity and access management process.</p>
                <p>4. Authentication is visible to and partially changeable by the user.</p>
                <h5>Authorization</h5>
                <p>1. Authorization determines what resources a user can access.</p>
                <p> 2. Authorization works through settings that are implemented and maintained by the organization.</p>
                <p>3. Authorization always takes place after authentication.</p>
                <p>  4. Authorization is not visible to or changeable by the user.</p>
            </div>
            <div className='border border-3 m-3 p-4'>
                <h3>##.Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.
                    You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.
                    As a Google Cloud service, it also gives you access to other Google products and features, like Google Drive and Sheets. For instance, you can import dummy data from Google Sheets and use it temporarily to serve your app.</p>
                <br />
                <p>At this moment i have lot of firebase alternative for implement authentication
                    for example :</p>
                   <h6>1. Paese</h6>
                   <h6>2. Back4App</h6>
                  <h6> 3. AWS Amplify</h6>
                  <h6> 4. Kuzzle</h6>
                   <h6>5. Couchbase</h6>
                     <p>Here are just five examples but there are many more Firebase Alternative for implement authentication !!</p>
                     <br />
                <h3>##.What other services does firebase provide other than authentication?</h3>
                <p>Firebase provide Lot of things First of all you can host website fully free in firebase and second of all firebase has real time database you can use firebase as a database and firebase provide cloud you can used cloud function And firbase provide lot of extenstion that you can used in your project</p>
            </div>


        </div>
    );
};

export default Blogs;
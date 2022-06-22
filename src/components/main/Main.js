import React from 'react';
import './main.css';
import { FaFile} from 'react-icons/fa'
function Main(props) {
    const data = [{
      "damName": "Shirawata Dam",
      "projectId": "ER31-MA-DM-1-49820CH/1",
      "inspectionStartDate": "Feb 22, 2022",
      "inspectionEndDate": "Mar 03, 2022",
      "river": "Indrayani River",
      "location": "Maval, Pune District in the State of Maharashtra",
      "damImage": "https://storage.googleapis.com/eyerov-hiring-tasks/dam.jpeg",
      "diverImage": "https://storage.googleapis.com/eyerov-hiring-tasks/diver.jpg",
      "rovImage": "https://storage.googleapis.com/eyerov-hiring-tasks/rov.jpg"
      }];
    
    return (
        <div className="main">
          {data.map(key =>{
      
      return(
        <div className='datas' key={key}>
        <p><h6>damName</h6>{key.damName}</p>
      <p><h6>projectId</h6>{key.projectId}</p>
      <p><h6>inspectionStartDate</h6>{key.inspectionStartDate}</p>
      <p><h6>inspectionEndDate</h6>{key.inspectionEndDate}</p>
      <p><h6>river</h6>{key.river}</p>
      <p><h6>location</h6>{key.location}</p>

        <button className="button1"><FaFile color='white' /><a href="https://storage.googleapis.com/eyerov-hiring-tasks/testReport.pdf">Open Soft-Copy Report</a></button>
      </div>
      )}
    )}
    
    {data.map(key =>{
      return(
        <div className='imges' key={key}>
              <img src={key.damImage} />
              </div>
      )}
    )}
    </div>
    );
}

export default Main;
import React from 'react';
import './card.css';
import { FaFile,FaFileImage} from 'react-icons/fa'

function Card(props) {
    const Pictures = [
        {
        "diverImage": "https://storage.googleapis.com/eyerov-hiring-tasks/diver.jpg",
        "rovImage": "https://storage.googleapis.com/eyerov-hiring-tasks/rov.jpg"
        }
    ]
    return (
        <div>
            {Pictures.map(key =>{
      return(
        <div className='card' key={key}>
            <div className="card1">
            <h2>EyeROV Inspection</h2>
              <img src={key.diverImage} />
              <div className='buttons'>
              <button className="button2"><FaFileImage color='white' /><a href="#">Open Project</a></button>
              <button className="button3"><FaFile color='white' /><a href="#">Report Outcome</a></button>
              </div>
              </div>
            <div className="card1">
                <h2>Diver's Inspection</h2>
              <img src={key.rovImage} />
              <div className='buttons'>
              <button className="button2"><FaFileImage color='white' /><a href="#">Open Project</a></button>
              <button className="button3"><FaFile color='white' /><a href="#">Report Outcome</a></button>
              </div>
              </div>

              </div>
      )}
    )}
        </div>
    );
}

export default Card;
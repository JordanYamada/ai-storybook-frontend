import React from 'react';
// import axios, { AxiosResponse } from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import Form from '../components/Form.tsx';
// import SaveButton from '../components/SaveButton.tsx';


// interface FormData {
//   method: string;
//   description: string;
//   title: string;
// }


const Home: React.FC = () => {


  return (
    <React.Fragment>
      <h2>Home</h2>
      <section>

            <Link to="adventure/">
        <Button>Embark on a New Adventure</Button>
        </Link>
        <Link to="resume/">
        <Button>Resume Unfinished Story</Button>
        </Link>
        <Link to="memories/">
        <Button>View Past Tales</Button>
        </Link>
        <Link to="collection/">
        <Button>View Favorite Memories</Button>
        </Link>


      </section>
    </React.Fragment>
  );
}


export default Home;
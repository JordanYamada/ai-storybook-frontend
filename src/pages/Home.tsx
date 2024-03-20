import React from 'react';
// import axios, { AxiosResponse } from 'axios';
import Button from 'react-bootstrap/Button';
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

        <Button>Embark on a New Adventure</Button>
        <Button>Resume Unfinished Story</Button>
        <Button>View Past Tales</Button>
        <Button>View Favorite Memories</Button>


      </section>
    </React.Fragment>
  );
}


export default Home;
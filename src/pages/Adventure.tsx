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


const Adventure: React.FC = () => {


  return (
    <React.Fragment>
      <h2>Embark on a New Adventure</h2>
      <section>

        <Button>Choose Theme</Button>
        <Button>Choose Character Role</Button>
        <Button>Embark</Button>
        <Button>Random</Button>


      </section>
    </React.Fragment>
  );
}


export default Adventure;
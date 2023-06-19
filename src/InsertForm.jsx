import React, { useState } from 'react';
import Button from './Button';
import InputLabel from './InputLabel';
import Table from './Table';

function InsertForm() {
  const [inputData, setInputData] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    bio: '',
    image: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleInsert = () => {
    setInputData((prevData) => [...prevData, formData]);
    setFormData({
      firstName: '',
      lastName: '',
      bio: '',
      image: '',
    });
  };

  const deleteActor = (index) => {
    setInputData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  return (
    <div className="RegisterForm">
      <h2>Add an actor</h2>
      <InputLabel inputRow="First Name" name="firstName" onChange={handleChange} value={formData.firstName} />
      <InputLabel inputRow="Last Name" name="lastName" onChange={handleChange} value={formData.lastName} />
      <InputLabel inputRow="Bio" name="bio" onChange={handleChange} value={formData.bio} />
      <InputLabel inputRow="Image" name="image" onChange={handleChange} value={formData.image} />
      <Button text="Insert actor" onClick={handleInsert} />
      {inputData.length !== 0 && <Table data={inputData} onDelete={deleteActor} />}
    </div>
  );
}

export default InsertForm;

import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [name, setName] = useState({ FirstName: '', LastName: '', Email: '' });
  const [skills, setSkills] = useState([{ experienceYears: '', experienceMonths: '', skill: '' }]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setName(prevState => ({
      ...prevState,
      [name]: value.trim(),
    }));
  };

  const handleSkillChange = (e, index) => {
    const { name, value } = e.target;
    const updatedSkills = [...skills];
    updatedSkills[index][name] = value.trim();
    setSkills(updatedSkills);
  };

  const addNewSkill = () => {
    let data = { experienceYears: '', experienceMonths: '', skill: '' };
    setSkills([...skills, data]);
  };

  const handleSubmit = () => {
    const submitData = {
      name,
      skills,
    };
    console.log('submitData', submitData);
  };

  return (
    <div className="container">
      <h1>Fill the form</h1>

      <div className="input-group">
        <label className="label" htmlFor="FirstName">First Name</label>
        <input
          type="text"
          placeholder="First Name"
          name="FirstName"
          value={name.FirstName}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label className="label" htmlFor="LastName">Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          name="LastName"
          value={name.LastName}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label className="label" htmlFor="Email">Email</label>
        <input
          type="text"
          placeholder="Email"
          name="Email"
          value={name.Email}
          onChange={handleChange}
        />
      </div>

      <div className="skill-group">
        <h2>Skills</h2>
        {skills.map((data, index) => (
          <div key={index}>
            <label className="label" htmlFor={`Skill-${index}`}>Skill</label>
            <input
              type="text"
              placeholder="Skill"
              name="skill"
              value={data.skill}
              onChange={(e) => handleSkillChange(e, index)}
              list={`skills-${index}`}
            />
            <datalist id={`skills-${index}`}>
              <option value="ReactJS" />
              <option value="JavaScript" />
              <option value="HTML" />
              <option value="CSS" />
              {/* Add more options as needed */}
            </datalist>

            <label className="label" htmlFor={`Experience-${index}`}>Experience</label>
            <div className="experience-group">
              <select
                name="experienceYears"
                value={data.experienceYears}
                onChange={(e) => handleSkillChange(e, index)}
              >
                <option value="">Select Years</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                {/* Add more options as needed */}
              </select>

              <select
                name="experienceMonths"
                value={data.experienceMonths}
                onChange={(e) => handleSkillChange(e, index)}
              >
                <option value="">Select Months</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
        ))}
      </div>

      <button onClick={addNewSkill}>Add Skill</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

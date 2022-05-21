import React, { useState } from 'react';
import "./Form.css"

export default function Form() {

  const [data, setData] = useState({
    Name: '',
    Department: '',
    Rating: '',
    show: true
  });

  const [record, setRecord] = useState([])

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
    console.log(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecord = { ...data }
    setRecord([...record, newRecord]);
    setData({ Name: "", Department: "", Rating: "", show: !true });
  };

  const back = ()=>{
    setData({show:true});
  }
  return (
    <>
      {data.show ? (
        <form onSubmit={handleSubmit}>
          <br />
          <div><h1> EMPLOYEE FEEDBACK FORM </h1></div>
          <br /> <br />
          <label> <b>Name  : </b>
          <input type="text" placeholder='Enter your name' name="Name" value={data.Name} onChange={handleChange} />
          </label><br /> <br />
          <label><b>Department  : </b>
          <input type="text" placeholder='Enter department' name="Department" value={data.Department} onChange={handleChange} />
          </label><br /> <br />
          <label> <b>Rating  : </b>
          <input type="number" placeholder='Rate here' name="Rating" value={data.Rating} onChange={handleChange} />
          </label><br /> <br /> <br />
          <button > <b>Submit</b> </button>

        </form>
      ) :
      (<>
        <h1>EMPLOYEE FEEDBACK DATA</h1>
        <div className='result'>
          <br />
          {
            <div>
              {record.map((elements) => {
                return (
                  <div className='data'>
                    <b> Name : </b><p> {elements.Name} </p>
                    <b>Department :</b><p>{elements.Department} </p>
                    <b>Rating : </b><p>{elements.Rating}</p>
                  </div>
                )
              })
              }
            </div>
          }
          <br />
        </div>
        <button onClick={back}>Go Back</button>
      </>)}
    </>
  );
}



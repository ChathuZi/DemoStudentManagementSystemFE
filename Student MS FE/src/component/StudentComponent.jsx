import React,{useState} from 'react'
import { addStudent } from '../services/StudentServices'
import { useNavigate } from 'react-router-dom'

const StudentComponent = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [address, setAddress] = useState('')

  const navigator = useNavigate();

  function handleFirstName(e){
    setFirstName(e.target.value);
  }

  function handleSecName(e){
    setlastName(e.target.value);
  }

  function handleAddress(e){
    setAddress(e.target.value);
  }

  function saveStudent(e){
    e.preventDefault();
    const student = {firstName,lastName,address}
    console.log();
  }



  function saveStudent(e){
    e.preventDefault();
    const student = {firstName,lastName,address}
    console.log(student)

    addStudent(student).then((Response) => {
      console.log(Response.data);
      //clearInputs();
      navigator('/add-student')
    })
  }

  return (
    <div className='container'>
      <div className='row'>
      <div className='card' style={{ width: '50%', margin: '0 auto' }}>

          <div className='text-center'> Add Student</div>
          <div className='card-body'>
            <form>
              <div className='form-group-mb-3'>
                <label className='form-label'>First Name : </label>
                <input
                    type='text'
                    placeholder='Enter First Name '
                    name='firstName'
                    value={firstName}
                    className='form-control custom-input'
                    onChange={handleFirstName}  
                      >
                </input>
              </div>
              <div className='form-group-mb-2'>
                <label className='form-label'>Second Name : </label>
                <input
                    type='text'
                    placeholder='Enter Second Name '
                    name='lastName'
                    value={lastName}
                    className='form-control custom-input'
                    onChange={handleSecName}  
                      >
                </input>
              </div>
              <div className='form-group-mb-2'>
                <label className='form-label'>City : </label>
                <input
                    type='text'
                    placeholder='Enter City '
                    name='address'
                    value={address}
                    className='form-control custom-input'
                    onChange={handleAddress}  
                      >
                </input>
              </div>

              <button className='btn btn-success' onClick={saveStudent}>Submit</button>
            </form>

          </div>

        </div>

      </div>
      
    </div>
  )
}

export default StudentComponent
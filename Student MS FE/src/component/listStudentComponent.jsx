import React,{useEffect, useState} from 'react'
import { listEmployees } from '../services/StudentServices'
import { useNavigate } from 'react-router-dom'

const listEmployeeComponent = () => {

    // const dummyData = [
    //     {
    //       "employeeId":1, 
    //       "employeeFirstName":"Amal",
    //       "employeeSecName" :"Perera",
    //       "employeeTelephone":779185940,
    //       "employeeEmail":"amai@gmail.com"

    //     },
    //     {
    //         "employeeId":2, 
    //         "employeeFirstName":"Amal",
    //         "employeeSecName" :"Perera",
    //         "employeeTelephone":779185940,
    //         "employeeEmail":"amai@gmail.com"
  
    //       }
    // ]

    const [Student,setEmployees] = useState([])
    
    const navigator = useNavigate();
    
    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error=>{
            console.error(error);
        })
    },[])

    function addNewStudent(){
        navigator('/add-student')
    }

  return (
    <div className='container'>
        <h2> List of Students</h2>
        <button className='btn btn-primary' onClick={addNewStudent}>Add Student</button>
        <table className='table table-striped'>
            <thead>
                <th>Student Id</th>
                <th>First Name</th>
                <th>Last Namee</th>
                <th>Class</th>
               
            </thead>
            <tbody>
                {
                    Student.map(student => 
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.address}</td>
                     

                    </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default listEmployeeComponent
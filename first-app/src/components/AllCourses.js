import React, { useState, useEffect } from "react";
import Course from "./Course";
import BASEURL from "./API/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourses = () => {

    

      const getcourses = () => {
        axios.get(`${BASEURL}/getcourses`).then(
            (reponse)=>{
                
                setCourses(reponse.data);
            },
            (error)=>{
                console.log(error);
            }
        )
      }

     const[intialform,setForm] = useState({
        id:'',
        courseid : 'asa',
        title : 'sds',
        description : ''
      })

      useEffect(()=>{
        getcourses();
      },[]);

      const updateCourse = (id) => {
        setCourses(courses.filter((c) => c.id!=id));
      }

    const [courses,setCourses] =useState([
        
    ])
   return (
      <div>
        <h1>All Courses</h1>
        <p>List of Courses</p>
        {courses.length > 0
? courses.map((item) => <Course  course={item} data={intialform} update={updateCourse} />)
: "No courses"}
      </div>
   )
}


export default Allcourses;
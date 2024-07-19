import React, { Fragment,useState, useEffect } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import BASEURL from "./API/bootapi";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";

const AddCourse = () => {
  const { id } = useParams(); // Get course ID from URL
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    id: '',
    courseid: '',
    title: '',
    description: ''
  });

  useEffect(() => {
    if (id && id !== 'new') {
      axios.get(`${BASEURL}/getcourses/${id}`).then(
        (response) => {
          setCourse(response.data);
        },
        (error) => {
          toast.error("Failed to fetch course data");
        }
      );
    }
  }, [id]);

  const handleForm = (e) => {
    e.preventDefault();
    if (id && id !== 'new') {
      // If ID exists and it's not 'new', update course
      addCourse(course);
    } else {
      // Otherwise, add a new course
      addCourse(course);
    }
  };

  const addCourse = (data) => {
    axios.post(`${BASEURL}/addcourse`, data).then(
      (response) => {
        toast.success("Course added successfully");
        navigate('/view-courses'); 
      },
      (error) => {
        toast.error("Failed to add course");
      }
    );
  };

  const updateCourse = (data) => {
    axios.put(`${BASEURL}/updatecourse`, data).then(
      (response) => {
        toast.success("Course updated successfully");
        navigate('/view-courses'); // Redirect after successful update
      },
      (error) => {
        toast.error("Failed to update course");
      }
    );
  };

  return (
    <Fragment>
      <h1 className="text-center my-3">{id && id !== 'new' ? 'Edit Course' : 'Add Course'}</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label htmlFor="courseid">Course ID</label>
          <Input
            type="text"
            placeholder="Enter Course ID"
            name="courseid"
            id="courseid"
            value={course.courseid}
            onChange={(e) => setCourse({ ...course, courseid: e.target.value })}
            readOnly={id && id !== 'new'}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="coursetitle">Course Title</label>
          <Input
            type="text"
            placeholder="Course Title"
            name="coursetitle"
            id="coursetitle"
            value={course.title}
            onChange={(e) => setCourse({ ...course, title: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="cousedescription">Course Description</label>
          <Input
            id="cousedescription"
            name="cousedescription"
            type="textarea"
            placeholder="Course Description"
            value={course.description}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success">{id && id !== 'new' ? 'Update Course' : 'Add Course'}</Button>
          <Button type="reset" color="warning ml-2">Clear</Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourse;

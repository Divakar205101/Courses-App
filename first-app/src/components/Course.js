import React, { useState } from "react";
import {
Card,
CardBody,
CardTitle,
CardSubtitle,
CardText,
CardFooter,
Button,
Container,
} from "reactstrap";
import BASEURL from "./API/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


const Course=({course,update})=>{

    const deletecourse=(id)=>{
      axios.delete(`${BASEURL}/deletecourse/${id}`).then(
        (response)=>{
            toast.success(response.data);
            update(id);
        },
        (error)=>{
            toast.error(error.data);
        }
      )
    }

    return (
        <Card>
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button onClick={()=>{
                        deletecourse(course.id);
                    }} color="danger">Delete</Button>
                    <Link className='text-decoration-none btn btn-sm btn-primary ml-3' to={`/updatecourse/${course.id}?action=edit`} >Update</Link>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course;
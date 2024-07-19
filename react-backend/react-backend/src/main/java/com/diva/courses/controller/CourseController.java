package com.diva.courses.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.diva.courses.domain.Course;
import com.diva.courses.repository.CourseRepository;

@SuppressWarnings("deprecation")
@RestController
public class CourseController {
	
	@Autowired CourseRepository courseRepository;
	
	@GetMapping("/getcourses")
	public List<Course> getcourses() {
		return courseRepository.findAll();
	}
	
	@PostMapping("/addcourse")
	public String  addcourse(@RequestBody Course course) {
		courseRepository.save(course);
		return "course added";
	}
	
	@GetMapping("/getcourses/{courseid}")
	public  ResponseEntity<Course> getcourse(@PathVariable Integer courseid) {
		Course course = new Course();
	 Optional<Course> findById = courseRepository.findById(courseid);
     if (findById.isPresent()) {
    	 course = findById.get();
	}
		return ResponseEntity.ok(course);
	}
	
	
	@DeleteMapping("/deletecourse/{courseid}")
	public void deletecourse(@PathVariable Integer courseid) {
		courseRepository.deleteById(courseid);
	}

}

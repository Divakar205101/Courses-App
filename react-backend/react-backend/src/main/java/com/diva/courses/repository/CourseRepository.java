package com.diva.courses.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.diva.courses.domain.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer>{

}

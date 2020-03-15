import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  templateUrl: "./course-list.component.html"
})
export class CourseListComponent implements OnInit {
  filteredCourses: Course[] = [];
  _courses: Course[] = [];
  _filterBy: string;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this._courses = this.courseService.retriveAlll();
    this.filteredCourses = this._courses;
  }

  public set filter(value: string) {
    this._filterBy = value;
    this.filteredCourses = this._courses.filter(
      (course: Course) =>
        course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1
    );
  }

  public get filter(): string {
    return this._filterBy;
  }
}

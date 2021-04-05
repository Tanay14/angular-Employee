import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-assignment",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  filteredcandidate_data: {
    id: number;
    name: string;
    department: string;
    joining_date: number;
  }[];
  candidate_data3: any[] = [];
  uniqueDepartment: {}[];
  result: any[];

  constructor() {}

  _searchText: string;
  get searchText() {
    return this._searchText;
  }

  set searchText(value) {
    this._searchText = value;
    this.filteredcandidate_data = this.filterCandidate();
  }

  filterCandidate() {
    return this.candidate_data.filter(
      can =>
        can.name
          .toLocaleLowerCase()
          .indexOf(this.searchText.toLocaleLowerCase()) !== -1
    );
  }
  candidate_data2: any[] = [];

  candidate_data = [
    {
      id: 11,
      name: "Ash",
      department: "Finance",
      joining_date: 8 / 10 / 2016
    },
    { id: 12, name: "John", department: "HR", joining_date: 18 / 1 / 2011 },
    {
      id: 13,
      name: "Zuri",
      department: "Operations",
      joining_date: 28 / 11 / 2019
    },
    {
      id: 14,
      name: "Vish",
      department: "Development",
      joining_date: 7 / 7 / 2017
    },
    {
      id: 15,
      name: "Barry",
      department: "Operations",
      joining_date: 19 / 8 / 2014
    },
    { id: 16, name: "Ady", department: "Finance", joining_date: 5 / 10 / 2014 },
    {
      id: 17,
      name: "Gare",
      department: "Development",
      joining_date: 6 / 4 / 2014
    },
    {
      id: 18,
      name: "Hola",
      department: "Development",
      joining_date: 8 / 12 / 2010
    },
    { id: 19, name: "Ola", department: "HR", joining_date: 7 / 5 / 2011 },
    { id: 20, name: "Kim", department: "Finance", joining_date: 20 / 10 / 2010 }
  ];

  ngOnInit() {
    this.filteredcandidate_data = this.candidate_data;
  }
  onClick() {
    this.candidate_data2 = this.candidate_data.filter(
      can => can.department !== "Development"
    );
  }

  getDistinct() {
    this.candidate_data3 = this.candidate_data
      .map(item => item.department)
      .filter((value, index, self) => self.indexOf(value) === index);
  }
}

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of as observableOf } from "rxjs";
import { DATA } from "./mock-data";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}

  getData(): Observable<any[]> {
    return observableOf(DATA);
  }

  getTableConfig() {
    return {
      parent: {
        id: { label: "Id" },
        firstname: { label: "First name" },
        lastname: { label: "Last name" },
        company: { label: "Company" },
        address: { label: "Address" },
        city: { label: "City" },
        country: { label: "Country" },
        state: { label: "State" },
        postalcode: { label: "Postal Code" },
        phone1: { label: "Phone 1" },
        phone2: { label: "Phone 2" },
        email: { label: "Email" },
        salary: { label: "Salary" },
        dob: { label: "Date Of Birth" },
        gender: { label: "Gender" },
        age: { label: "Age" }
      },
      childKey: "child",
      child: {
        designation: { label: "Designation" },
        experience: { label: "Experience" },
        role: { label: "Role" }
      }
    };
  }
}

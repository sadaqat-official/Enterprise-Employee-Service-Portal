import { WebPartContext } from '@microsoft/sp-webpart-base';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { IEmployee } from "../models/Employee";

export default class EmployeeService {
   constructor(private context: WebPartContext) {
    }
public async getEmployees(): Promise<IEmployee[]> {
console.log("urlfrom employeeservice.ts ="+this.context.pageContext.web.absoluteUrl);
    const url =
        `${this.context.pageContext.web.absoluteUrl}` +
        `/_api/web/lists/GetByTitle('Employee')/items`;

    const response: SPHttpClientResponse =
        await this.context.spHttpClient.get(
            url,
            SPHttpClient.configurations.v1
        );

    const json = await response.json();

    console.log(json);

  return json.value.map((item: any): IEmployee => ({
    id: item.ID,
    employeeNumber: item.EmployeeNumber,
    firstName: item.Title,
    lastName: "",
    email: item.Email,
    department: item.DepartmentId.toString(),
    jobTitle: item.JobTitle,
    joiningDate: item.JoiningDate,
    active: item.Active
}));
}

}
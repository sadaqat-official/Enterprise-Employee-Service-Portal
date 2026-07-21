import * as React from 'react';
import styles from './EmployeeDirectory.module.scss';
import type { IEmployeeDirectoryProps } from './IEmployeeDirectoryProps';
import { IEmployee } from '../../../models/Employee';
import EmployeeService from '../../../services/EmployeeService';

const EmployeeDirectory = (
  props: IEmployeeDirectoryProps
): React.ReactElement => {

  const [employees, setEmployees] = React.useState<IEmployee[]>([]);
  const employeeService = new EmployeeService(props.context);

  React.useEffect(() => {
console.log("useeffect running");
    const loadEmployees = async (): Promise<void> => {

        const data = await employeeService.getEmployees();

        setEmployees(data);

    };

    loadEmployees();

}, []);

  return (
    <section className={styles.employeeDirectory}>
      <h1>Employee Directory</h1>
      <p>Welcome to SP </p>
     <div>
  <h3>Total Employees: {employees.length}</h3>

  {employees.map(employee => (
    <div key={employee.id}>
      <hr />
      <p><strong>Employee Number:</strong> {employee.employeeNumber}</p>
      <p><strong>Name:</strong> {employee.firstName} {employee.lastName}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Job Title:</strong> {employee.jobTitle}</p>
      <p><strong>Joining Date:</strong> {employee.joiningDate}</p>
      <p><strong>Active:</strong> {employee.active ? "Yes" : "No"}</p>
    </div>
  ))}
</div>
    </section>
  );
};

export default EmployeeDirectory;
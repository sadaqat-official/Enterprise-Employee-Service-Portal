
using Domain.Enums;
namespace Domain.Entities;

public class Employee
{
    public Guid Id { get; set; }

    public string EmployeeNumber { get; set; } = string.Empty;

    public string FirstName { get; set; } = string.Empty;

    public string LastName { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    public string JobTitle { get; set; } = string.Empty;

    public string Department { get; set; } = string.Empty;

    public EmployeeStatus Status { get; set; } = EmployeeStatus.Active;

    public DateTime CreatedOn { get; set; } = DateTime.UtcNow;
}
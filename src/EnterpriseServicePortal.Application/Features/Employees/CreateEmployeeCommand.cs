using MediatR;

namespace Application.Features.Employees;

public sealed record CreateEmployeeCommand(
    string EmployeeNumber,
    string FirstName,
    string LastName,
    string Email,
    string JobTitle,
    string Department
) : IRequest<Guid>;
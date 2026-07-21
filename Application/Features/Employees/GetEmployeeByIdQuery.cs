using Domain.Entities;
using MediatR;

namespace Application.Features.Employees;

public sealed record GetEmployeeByIdQuery(Guid Id) : IRequest<Employee?>;
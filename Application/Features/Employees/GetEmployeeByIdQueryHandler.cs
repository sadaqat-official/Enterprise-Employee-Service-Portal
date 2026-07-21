using Domain.Entities;
using MediatR;

namespace Application.Features.Employees;

public sealed class GetEmployeeByIdQueryHandler
    : IRequestHandler<GetEmployeeByIdQuery, Employee?>
{
    public Task<Employee?> Handle(
        GetEmployeeByIdQuery request,
        CancellationToken cancellationToken)
    {
        return Task.FromResult<Employee?>(null);
    }
}
package be.pxl.services.services;

import be.pxl.services.domain.Employee;
import be.pxl.services.domain.dto.EmployeeRequest;
import be.pxl.services.domain.dto.EmployeeResponse;
import be.pxl.services.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeService implements IEmployeeService {
    private final EmployeeRepository employeeRepository;

    @Override
    public List<EmployeeResponse> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream().map(this::mapToEmployeeResponse).toList();
    }

    private EmployeeResponse mapToEmployeeResponse(Employee employee) {
        return EmployeeResponse.builder()
                .name(employee.getName())
                .departmentId(employee.getDepartmentId())
                .organizationId(employee.getOrganizationId())
                .build();
    }

    @Override
    public void addEmployee(EmployeeRequest newEmployee) {
        Employee employee = Employee.builder()
                .name(newEmployee.getName())
                .departmentId(newEmployee.getDepartmentId())
                .organizationId(newEmployee.getOrganizationId())
                .build();
        employeeRepository.save(employee);
    }

    @Override
    public EmployeeResponse getEmployeeById(Long id) {
        Employee employee = employeeRepository.findById(id).orElse(null);
        assert employee != null;
        return mapToEmployeeResponse(employee);
    }

    @Override
    public List<EmployeeResponse> getEmployeesByDepartment(Long departmentId) {
        List<Employee> employees = employeeRepository.findByDepartmentId(departmentId);
        return employees.stream().map(this::mapToEmployeeResponse).toList();
    }

    @Override
    public List<EmployeeResponse> getEmployeesByOrganization(Long organizationId) {
        List<Employee> employees = employeeRepository.findByOrganizationId(organizationId);
        return employees.stream().map(this::mapToEmployeeResponse).toList();
    }
}

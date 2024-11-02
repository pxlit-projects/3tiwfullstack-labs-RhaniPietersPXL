package be.pxl.services.services;

import be.pxl.services.client.NotificationClient;
import be.pxl.services.controller.EmployeeController;
import be.pxl.services.domain.Employee;
import be.pxl.services.domain.dto.EmployeeRequest;
import be.pxl.services.domain.dto.EmployeeResponse;
import be.pxl.services.domain.dto.NotificationRequest;
import be.pxl.services.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeService implements IEmployeeService {
    private final EmployeeRepository employeeRepository;
    private final NotificationClient notificationClient;
    private static final Logger log = LoggerFactory.getLogger(EmployeeService.class);

    @Override
    public List<EmployeeResponse> getAllEmployees() {
        log.info("Retrieving all employees");
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
        log.info("Adding new employee: {}", newEmployee.getName());
        Employee employee = Employee.builder()
                .name(newEmployee.getName())
                .departmentId(newEmployee.getDepartmentId())
                .organizationId(newEmployee.getOrganizationId())
                .build();
        employeeRepository.save(employee);

        log.info("Employee saved successfully. Sending notification...");
        NotificationRequest notificationRequest = NotificationRequest.builder()
                .message("Employee " + newEmployee.getName() + " added")
                .sender("Employee Service")
                .build();

        notificationClient.sendNotification(notificationRequest);
        log.info("Notification sent successfully for new employee: {}", newEmployee.getName());
    }

    @Override
    public EmployeeResponse getEmployeeById(Long id) {
        log.debug("Fetching employee by ID: {}", id);
        Employee employee = employeeRepository.findById(id).orElse(null);
        assert employee != null;
        return mapToEmployeeResponse(employee);
    }

    @Override
    public List<EmployeeResponse> getEmployeesByDepartment(Long departmentId) {
        log.info("Fetching employees by department: {}", departmentId);
        List<Employee> employees = employeeRepository.findByDepartmentId(departmentId);
        return employees.stream().map(this::mapToEmployeeResponse).toList();
    }

    @Override
    public List<EmployeeResponse> getEmployeesByOrganization(Long organizationId) {
        log.info("Fetching employees by organization: {}", organizationId);
        List<Employee> employees = employeeRepository.findByOrganizationId(organizationId);
        return employees.stream().map(this::mapToEmployeeResponse).toList();
    }
}

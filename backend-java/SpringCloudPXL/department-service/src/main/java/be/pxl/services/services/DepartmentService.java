package be.pxl.services.services;

import be.pxl.services.client.EmployeeClient;
import be.pxl.services.domain.Department;
import be.pxl.services.domain.dto.DepartmentRequest;
import be.pxl.services.domain.dto.DepartmentResponse;
import be.pxl.services.domain.dto.EmployeeResponse;
import be.pxl.services.repository.DepartmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DepartmentService implements IDepartmentService {
    private final DepartmentRepository departmentRepository;
    private final EmployeeClient employeeClient;


    @Override
    public List<DepartmentResponse> getAllDepartments() {
        List<Department> departments = departmentRepository.findAll();
        return departments.stream().map(this::mapToDepartmentResponse).toList();
    }

    private DepartmentResponse mapToDepartmentResponse(Department department) {
        return DepartmentResponse.builder()
                .name(department.getName())
                .organizationId(department.getOrganizationId())
                .build();
    }

    @Override
    public void addDepartment(DepartmentRequest newDepartment) {
        Department department = Department.builder()
                .name(newDepartment.getName())
                .organizationId(newDepartment.getOrganizationId())
                .build();
        departmentRepository.save(department);
    }

    @Override
    public DepartmentResponse getDepartmentById(Long id) {
        Department department = departmentRepository.findById(id).orElse(null);
        assert department != null;
        return mapToDepartmentResponse(department);
    }

    @Override
    public List<DepartmentResponse> getDepartmentsByOrganization(Long organizationId) {
        List<Department> departments = departmentRepository.findByOrganizationId(organizationId);
        return departments.stream().map(this::mapToDepartmentResponse).toList();
    }

    @Override
    public List<DepartmentResponse> getDepartmentsWithEmployeesByOrganization(Long organizationId) {
        List<Department> departments = departmentRepository.findByOrganizationId(organizationId);
        return departments.stream()
                .map(department -> {
                    List<EmployeeResponse> employees = employeeClient.getEmployeesFromDepartment(department.getId());
                    return DepartmentResponse.builder()
                            .name(department.getName())
                            .organizationId(department.getOrganizationId())
                            .employees(employees)
                            .build();
                }).toList();
    }
}

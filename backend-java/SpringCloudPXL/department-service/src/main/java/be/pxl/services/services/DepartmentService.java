package be.pxl.services.services;

import be.pxl.services.domain.Department;
import be.pxl.services.repository.DepartmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DepartmentService implements IDepartmentService {
    private final DepartmentRepository departmentRepository;

    @Override
    public List<Department> getAllDepartments() {
        return departmentRepository.findAll();
    }

    @Override
    public Department addDepartment(Department newDepartment) {
        return departmentRepository.save(newDepartment);
    }

    @Override
    public Department getDepartmentById(Long id) {
        return departmentRepository.findById(id).orElse(null);
    }

    @Override
    public List<Department> getDepartmentsByOrganization(Long organizationId) {
        return departmentRepository.findByOrganizationId(organizationId);
    }

    @Override
    public List<Department> getDepartmentsWithEmployeesByOrganization(Long organizationId) {
        List<Department> departments = departmentRepository.findByOrganizationId(organizationId);
        departments.forEach(department -> department.setEmployees(department.getEmployees()));  // Force loading
        return departments;
    }
}

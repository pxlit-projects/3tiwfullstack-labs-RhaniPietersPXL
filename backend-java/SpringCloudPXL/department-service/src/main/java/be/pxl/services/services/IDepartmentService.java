package be.pxl.services.services;

import be.pxl.services.domain.Department;

import java.util.List;

public interface IDepartmentService {
    List<Department> getAllDepartments();

    Department addDepartment(Department newDepartment);

    Department getDepartmentById(Long id);

    List<Department> getDepartmentsByOrganization(Long organizationId);

    List<Department> getDepartmentsWithEmployeesByOrganization(Long organizationId);
}

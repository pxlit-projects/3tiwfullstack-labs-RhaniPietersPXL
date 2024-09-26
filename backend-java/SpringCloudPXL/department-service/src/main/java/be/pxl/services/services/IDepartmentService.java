package be.pxl.services.services;

import be.pxl.services.domain.dto.DepartmentRequest;
import be.pxl.services.domain.dto.DepartmentResponse;

import java.util.List;

public interface IDepartmentService {
    List<DepartmentResponse> getAllDepartments();

    void addDepartment(DepartmentRequest newDepartment);

    DepartmentResponse getDepartmentById(Long id);

    List<DepartmentResponse> getDepartmentsByOrganization(Long organizationId);

    List<DepartmentResponse> getDepartmentsWithEmployeesByOrganization(Long organizationId);
}

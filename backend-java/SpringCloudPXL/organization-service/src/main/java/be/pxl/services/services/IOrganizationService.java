package be.pxl.services.services;

import be.pxl.services.domain.Organization;
import be.pxl.services.domain.dto.OrganizationResponse;

import java.util.List;

public interface IOrganizationService {
    List<OrganizationResponse> getAllOrganizations();

    OrganizationResponse getOrganizationById(Long id);

    OrganizationResponse getOrganizationWithDepartmentsById(Long id);

    OrganizationResponse getOrganizationWithDepartmentsAndEmployeesById(Long id);

    OrganizationResponse getOrganizationWithEmployeesById(Long id);
}

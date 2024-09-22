package be.pxl.services.services;

import be.pxl.services.domain.Organization;

import java.util.List;

public interface IOrganizationService {
    List<Organization> getAllOrganizations();

    Organization getOrganizationById(Long id);

    Organization getOrganizationWithDepartmentsById(Long id);

    Organization getOrganizationWithDepartmentsAndEmployeesById(Long id);

    Organization getOrganizationWithEmployeesById(Long id);
}

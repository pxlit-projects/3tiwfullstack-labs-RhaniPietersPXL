package be.pxl.services.services;

import be.pxl.services.domain.Organization;
import be.pxl.services.repository.OrganizationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrganizationService implements IOrganizationService {
    private final OrganizationRepository organizationRepository;


    @Override
    public List<Organization> getAllOrganizations() {
        return organizationRepository.findAll();
    }

    @Override
    public Organization getOrganizationById(Long id) {
        return organizationRepository.findById(id).orElse(null);
    }

    @Override
    public Organization getOrganizationWithDepartmentsById(Long id) {
        Organization organization = organizationRepository.findById(id).orElse(null);
        if (organization != null) {
            // Force loading of departments (employees will remain hidden)
            organization.setDepartments(organization.getDepartments());
        }
        return organization;
    }

    @Override
    public Organization getOrganizationWithDepartmentsAndEmployeesById(Long id) {
        Organization organization = organizationRepository.findById(id).orElse(null);
        if (organization != null) {
            // Load departments
            organization.setDepartments(organization.getDepartments());
            // Load employees for each department
            organization.getDepartments().forEach(department -> department.setEmployees(department.getEmployees()));
        }
        return organization;
    }

    @Override
    public Organization getOrganizationWithEmployeesById(Long id) {
        Organization organization = organizationRepository.findById(id).orElse(null);
        if (organization != null) {
            // Load employees (departments will remain hidden)
            organization.setEmployees(organization.getEmployees());
        }
        return organization;
    }
}

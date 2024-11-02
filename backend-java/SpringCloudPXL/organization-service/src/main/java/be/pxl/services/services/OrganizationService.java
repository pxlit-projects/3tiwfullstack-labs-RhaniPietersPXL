package be.pxl.services.services;

import be.pxl.services.client.DepartmentClient;
import be.pxl.services.client.EmployeeClient;
import be.pxl.services.domain.Organization;
import be.pxl.services.domain.dto.DepartmentResponse;
import be.pxl.services.domain.dto.EmployeeResponse;
import be.pxl.services.domain.dto.OrganizationResponse;
import be.pxl.services.repository.OrganizationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrganizationService implements IOrganizationService {
    private final OrganizationRepository organizationRepository;
    private final DepartmentClient departmentClient;
    private final EmployeeClient employeeClient;
    private static final Logger log = LoggerFactory.getLogger(OrganizationService.class);

    @Override
    public List<OrganizationResponse> getAllOrganizations() {
        log.info("Fetching all organizations");
        List<Organization> organizations = organizationRepository.findAll();
        return organizations.stream()
                .map(organization -> OrganizationResponse.builder()
                        .name(organization.getName())
                        .address(organization.getAddress())
                        .build())
                .toList();    }


    @Override
    public OrganizationResponse getOrganizationById(Long id) {
        log.debug("Finding organization by ID: {}", id);
        Organization organization = organizationRepository.findById(id).orElse(null);
        assert organization != null;
        return OrganizationResponse.builder()
                .name(organization.getName())
                .address(organization.getAddress())
                .build();
    }

    @Override
    public OrganizationResponse getOrganizationWithDepartmentsById(Long id) {
        log.info("Fetching organization with departments by ID: {}", id);
        Organization organization = organizationRepository.findById(id).orElse(null);
        List<DepartmentResponse> departments = departmentClient.getDepartmentsByOrganization(id);
        return  OrganizationResponse.builder()
                .name(organization.getName())
                .address(organization.getAddress())
                .departments(departments)
                .build();
    }

    @Override
    public OrganizationResponse getOrganizationWithDepartmentsAndEmployeesById(Long id) {
        log.info("Fetching organization with departments and employees by ID: {}", id);
        Organization organization = organizationRepository.findById(id).orElse(null);
        List<DepartmentResponse> departments = departmentClient.getDepartmentsByOrganization(id);
        List<EmployeeResponse> employees = employeeClient.getEmployeesByOrganization(id);
        return  OrganizationResponse.builder()
                .name(organization.getName())
                .address(organization.getAddress())
                .departments(departments)
                .employees(employees)
                .build();
    }

    @Override
    public OrganizationResponse getOrganizationWithEmployeesById(Long id) {
        log.info("Fetching organization with employees by ID: {}", id);
        Organization organization = organizationRepository.findById(id).orElse(null);
        List<EmployeeResponse> employees = employeeClient.getEmployeesByOrganization(id);
        return  OrganizationResponse.builder()
                .name(organization.getName())
                .address(organization.getAddress())
                .employees(employees)
                .build();
    }
}

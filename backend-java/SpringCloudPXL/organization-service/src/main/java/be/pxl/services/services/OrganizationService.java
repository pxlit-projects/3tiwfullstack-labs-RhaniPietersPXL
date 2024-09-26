package be.pxl.services.services;

import be.pxl.services.domain.Organization;
import be.pxl.services.domain.dto.OrganizationResponse;
import be.pxl.services.repository.OrganizationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrganizationService implements IOrganizationService {
    private final OrganizationRepository organizationRepository;


    @Override
    public List<OrganizationResponse> getAllOrganizations() {
        List<Organization> organizations = organizationRepository.findAll();
        return organizations.stream().map(this::mapToOrganizationResponse).toList();
    }

    private OrganizationResponse mapToOrganizationResponse(Organization organization) {
        return OrganizationResponse.builder()
                .name(organization.getName())
                .build();
    }

    @Override
    public OrganizationResponse getOrganizationById(Long id) {
        Organization organization = organizationRepository.findById(id).orElse(null);
        assert organization != null;
        return mapToOrganizationResponse(organization);
    }

    @Override
    public OrganizationResponse getOrganizationWithDepartmentsById(Long id) {
        Organization organization = organizationRepository.findById(id).orElse(null);
        assert organization != null;
        return mapToOrganizationResponse(organization);
    }

    @Override
    public OrganizationResponse getOrganizationWithDepartmentsAndEmployeesById(Long id) {
        Organization organization = organizationRepository.findById(id).orElse(null);
        assert organization != null;
        return mapToOrganizationResponse(organization);
    }

    @Override
    public OrganizationResponse getOrganizationWithEmployeesById(Long id) {
        Organization organization = organizationRepository.findById(id).orElse(null);
        assert organization != null;
        return mapToOrganizationResponse(organization);
    }
}

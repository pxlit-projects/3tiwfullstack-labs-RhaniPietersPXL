package be.pxl.services.controller;

import be.pxl.services.domain.Organization;
import be.pxl.services.services.IOrganizationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/organization")
@RequiredArgsConstructor
public class OrganizationController {
    private final IOrganizationService organizationService;

    @GetMapping("/{id}")
    public ResponseEntity<Organization> findById(@PathVariable Long id) {
        return new ResponseEntity<>(organizationService.getOrganizationById(id), HttpStatus.OK);
    }

    @GetMapping("/{id}/with-departments")
    public ResponseEntity<Organization> findByIdWithDepartments(@PathVariable Long id) {
        return new ResponseEntity<>(organizationService.getOrganizationWithDepartmentsById(id), HttpStatus.OK);
    }

    @GetMapping("/{id}/with-departments-and-employees")
    public ResponseEntity<Organization> findByIdWithDepartmentsAndEmployees(@PathVariable Long id) {
        return new ResponseEntity<>(organizationService.getOrganizationWithDepartmentsAndEmployeesById(id), HttpStatus.OK);
    }

    @GetMapping("/{id}/with-employees")
    public ResponseEntity<Organization> findByIdWithEmployees(@PathVariable Long id) {
        return new ResponseEntity<>(organizationService.getOrganizationWithEmployeesById(id), HttpStatus.OK);
    }
}

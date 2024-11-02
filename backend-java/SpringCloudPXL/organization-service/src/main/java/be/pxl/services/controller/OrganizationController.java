package be.pxl.services.controller;

import be.pxl.services.domain.dto.OrganizationResponse;
import be.pxl.services.services.IOrganizationService;
import lombok.RequiredArgsConstructor;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;


import java.util.List;

@RestController
@RequestMapping("/organization")
@RequiredArgsConstructor
public class OrganizationController {
    private final IOrganizationService organizationService;
    private static final Logger log = LoggerFactory.getLogger(OrganizationController.class);

    @GetMapping
    public ResponseEntity<List<OrganizationResponse>> findById() {
        log.info("Fetching all organizations");
        return new ResponseEntity<>(organizationService.getAllOrganizations(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrganizationResponse> findById(@PathVariable Long id) {
        log.debug("Finding organization by ID: {}", id);
        return new ResponseEntity<>(organizationService.getOrganizationById(id), HttpStatus.OK);
    }

    @GetMapping("/{id}/with-departments")
    public ResponseEntity<OrganizationResponse> findByIdWithDepartments(@PathVariable Long id) {
        log.info("Fetching organization with departments by ID: {}", id);
        return new ResponseEntity<>(organizationService.getOrganizationWithDepartmentsById(id), HttpStatus.OK);
    }

    @GetMapping("/{id}/with-departments-and-employees")
    public ResponseEntity<OrganizationResponse> findByIdWithDepartmentsAndEmployees(@PathVariable Long id) {
        log.info("Fetching organization with departments and employees by ID: {}", id);
        return new ResponseEntity<>(organizationService.getOrganizationWithDepartmentsAndEmployeesById(id), HttpStatus.OK);
    }

    @GetMapping("/{id}/with-employees")
    public ResponseEntity<OrganizationResponse> findByIdWithEmployees(@PathVariable Long id) {
        log.info("Fetching organization with employees by ID: {}", id);
        return new ResponseEntity<>(organizationService.getOrganizationWithEmployeesById(id), HttpStatus.OK);
    }
}

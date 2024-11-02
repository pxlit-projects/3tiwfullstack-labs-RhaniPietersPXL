package be.pxl.services.controller;

import be.pxl.services.domain.dto.DepartmentRequest;
import be.pxl.services.domain.dto.DepartmentResponse;
import be.pxl.services.services.IDepartmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@RestController
@RequestMapping("/department")
@RequiredArgsConstructor
public class DepartmentController {
    private final IDepartmentService departmentService;
    private static final Logger log = LoggerFactory.getLogger(DepartmentController.class);

    @PostMapping
    public ResponseEntity<Void> add(@RequestBody DepartmentRequest newDepartment) {
        log.info("Adding new department: {}", newDepartment);
        departmentService.addDepartment(newDepartment);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DepartmentResponse> findById(@PathVariable Long id) {
        log.debug("Finding department by id: {}", id);
        return new ResponseEntity<>(departmentService.getDepartmentById(id), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<DepartmentResponse>> findAll() {
        log.info("Finding all departments");
        return new ResponseEntity<>(departmentService.getAllDepartments(), HttpStatus.OK);
    }

    @GetMapping("/organization/{organizationId}")
    public ResponseEntity<List<DepartmentResponse>> findByOrganization(@PathVariable Long organizationId) {
        log.info("Finding departments by organization id: {}", organizationId);
        return new ResponseEntity<>(departmentService.getDepartmentsByOrganization(organizationId), HttpStatus.OK);
    }

    @GetMapping("/organization/{organizationId}/with-employees")
    public ResponseEntity<List<DepartmentResponse>> findByOrganizationWithEmployees(@PathVariable Long organizationId) {
        log.info("Finding departments by organization id: {} with employees", organizationId);
        return new ResponseEntity<>(departmentService.getDepartmentsWithEmployeesByOrganization(organizationId), HttpStatus.OK);
    }
}

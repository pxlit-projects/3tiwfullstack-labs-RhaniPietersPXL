package be.pxl.services.controller;

import be.pxl.services.domain.Department;
import be.pxl.services.services.IDepartmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/department")
@RequiredArgsConstructor
public class DepartmentController {
    private final IDepartmentService departmentService;

    @PostMapping("/")
    public ResponseEntity<Department> add(@RequestBody Department newDepartment) {
        return new ResponseEntity<>(departmentService.addDepartment(newDepartment), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Department> findById(@PathVariable Long id) {
        return new ResponseEntity<>(departmentService.getDepartmentById(id), HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<Department>> findAll() {
        return new ResponseEntity<>(departmentService.getAllDepartments(), HttpStatus.OK);
    }

    @GetMapping("/organization/{organizationId}")
    public ResponseEntity<List<Department>> findByOrganization(@PathVariable Long organizationId) {
        return new ResponseEntity<>(departmentService.getDepartmentsByOrganization(organizationId), HttpStatus.OK);
    }

    @GetMapping("/organization/{organizationId}/with-employees")
    public ResponseEntity<List<Department>> findByOrganizationWithEmployees(@PathVariable Long organizationId) {
        return new ResponseEntity<>(departmentService.getDepartmentsWithEmployeesByOrganization(organizationId), HttpStatus.OK);
    }
}

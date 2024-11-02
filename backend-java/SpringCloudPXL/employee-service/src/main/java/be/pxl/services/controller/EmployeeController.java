package be.pxl.services.controller;

import be.pxl.services.domain.dto.EmployeeRequest;
import be.pxl.services.domain.dto.EmployeeResponse;
import be.pxl.services.services.IEmployeeService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
@RequiredArgsConstructor
public class EmployeeController {
    private static final Logger log = LoggerFactory.getLogger(EmployeeController.class);
    private final IEmployeeService employeeService;

    @PostMapping
    public ResponseEntity<Void> add(@RequestBody EmployeeRequest newEmployee) {
        log.info("Adding new employee: {}", newEmployee.getName());
        employeeService.addEmployee(newEmployee);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmployeeResponse> findById(@PathVariable Long id) {
        log.debug("Finding employee by ID: {}", id);
        return new ResponseEntity<>(employeeService.getEmployeeById(id), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<EmployeeResponse>> findAll() {
        log.info("Fetching all employees");
        return new ResponseEntity<>(employeeService.getAllEmployees(), HttpStatus.OK);
    }

    @GetMapping("/department/{departmentId}")
    public ResponseEntity<List<EmployeeResponse>> findByDepartment(@PathVariable Long departmentId) {
        log.info("Fetching employees by department: {}", departmentId);
        return new ResponseEntity<>(employeeService.getEmployeesByDepartment(departmentId), HttpStatus.OK);
    }

    @GetMapping("/organization/{organizationId}")
    public ResponseEntity<List<EmployeeResponse>> findByOrganization(@PathVariable Long organizationId) {
        log.info("Fetching employees by organization: {}", organizationId);
        return new ResponseEntity<>(employeeService.getEmployeesByOrganization(organizationId), HttpStatus.OK);
    }
}

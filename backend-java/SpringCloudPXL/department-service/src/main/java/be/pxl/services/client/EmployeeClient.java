package be.pxl.services.client;

import be.pxl.services.domain.dto.EmployeeResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "employee-service") // -> naam van de service
public interface EmployeeClient {

    @GetMapping("/employees/department/{departmentId}")
    List<EmployeeResponse> getEmployeesFromDepartment(@PathVariable("departmentId") Long departmentId);
}


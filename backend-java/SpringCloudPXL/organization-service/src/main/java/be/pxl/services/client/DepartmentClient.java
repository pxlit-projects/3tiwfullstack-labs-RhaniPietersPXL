package be.pxl.services.client;

import be.pxl.services.domain.dto.DepartmentResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@FeignClient(name = "department-service") // -> naam van de service
public interface DepartmentClient {

    @GetMapping("department//organization/{organizationId}")
    List<DepartmentResponse> getDepartmentsByOrganization(Long id);
}

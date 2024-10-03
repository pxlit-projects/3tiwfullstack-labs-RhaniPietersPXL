package be.pxl.services;

import be.pxl.services.domain.Department;
import be.pxl.services.repository.DepartmentRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.testcontainers.containers.MySQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(classes = DepartmentServiceApplication.class)
@Testcontainers
@AutoConfigureMockMvc
public class DepartmentTest {
    @Autowired
    MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Container
    private static MySQLContainer mySQLContainer = new MySQLContainer("mysql:5.7");

    @DynamicPropertySource
    static void registerMySQLProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", mySQLContainer::getJdbcUrl);
        registry.add("spring.datasource.username", mySQLContainer::getUsername);
        registry.add("spring.datasource.password", mySQLContainer::getPassword);
    }

    @Test
    public void testCreateDepartment() throws Exception {
        Department department = Department.builder()
                .name("student")
                .organizationId(1L)
                .position("PXL")
                .employees(null)
                .build();

        String departmentString = objectMapper.writeValueAsString(department);

        mockMvc.perform(MockMvcRequestBuilders.post("/department")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(departmentString))
                .andExpect(status().isCreated());
        assertEquals(1, departmentRepository.findAll().size());
    }
}

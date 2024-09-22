package be.pxl.services.controller;

import be.pxl.services.services.INotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/notification")
@RequiredArgsConstructor
public class NotificationController {
    private final INotificationService notificationService;

}

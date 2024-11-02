package be.pxl.services.controller;

import be.pxl.services.domain.Notification;
import be.pxl.services.services.INotificationService;
import lombok.RequiredArgsConstructor;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;


@RestController
@RequestMapping("/notification")
@RequiredArgsConstructor
public class NotificationController {
    private final INotificationService notificationService;
    private static final Logger log = LoggerFactory.getLogger(NotificationController.class);

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void sendMessage(@RequestBody Notification notification) {
        log.info("Sending notification: {}", notification.getMessage());
        notificationService.sendMessage(notification);
    }
}

package be.pxl.services.services;

import be.pxl.services.domain.Notification;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class NotificationService implements INotificationService {
    private static final Logger log = LoggerFactory.getLogger(NotificationService.class);

    @Override
    public void sendMessages(Notification notification) {
        log.info("Receiving notifications...");
        log.info("Sending ... {}", notification.getMessage());
        log.info("TO {}", notification.getSender());
    }
}

package be.pxl.services.services;

import be.pxl.services.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class NotificationService implements INotificationService {
    private final NotificationRepository notificationRepository;

}

package pl.edu.pw.roadmanager.backend.services.impl;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.edu.pw.roadmanager.backend.domain.AppUser;
import pl.edu.pw.roadmanager.backend.domain.Subscription;
import pl.edu.pw.roadmanager.backend.domain.SubscriptionType;
import pl.edu.pw.roadmanager.backend.dto.SubscriptionDTO;
import pl.edu.pw.roadmanager.backend.dto.SubscriptionPaymentDTO;
import pl.edu.pw.roadmanager.backend.dto.SubscriptionTypeDTO;
import pl.edu.pw.roadmanager.backend.repositories.AppUserRepository;
import pl.edu.pw.roadmanager.backend.repositories.SubscriptionRepository;
import pl.edu.pw.roadmanager.backend.repositories.SubscriptionTypeRepository;
import pl.edu.pw.roadmanager.backend.services.SubscriptionAPI;

import java.lang.reflect.Type;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class SubscriptionService implements SubscriptionAPI {

    @Autowired
    SubscriptionRepository subscriptionRepository;

    @Autowired
    SubscriptionTypeRepository subscriptionTypeRepository;

    @Autowired
    AppUserRepository appUserRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<SubscriptionDTO> getSubscriptions() {
        Type type = new TypeToken<List<SubscriptionDTO>>() {
        }.getType();
        AppUser appUser = appUserRepository.getReferenceById(1L);

        return modelMapper.map(appUser.getSubscriptions(), type);
    }

    @Override
    public List<SubscriptionTypeDTO> getSubscriptionTypes() {
        Type type = new TypeToken<List<SubscriptionTypeDTO>>() {
        }.getType();

        return modelMapper.map(subscriptionTypeRepository.findAll(), type);
    }

    @Override
    public int addSubscription(SubscriptionPaymentDTO subscriptionPaymentDTO) {

        if (subscriptionPaymentDTO != null) {
            PayU payU = new PayU();
            Optional<SubscriptionType> subscriptionType = subscriptionTypeRepository
                    .findById(subscriptionPaymentDTO.getSubscriptionType().getId());
            boolean payUResponse = payU.makePayment(subscriptionPaymentDTO.getBlickNumber());
            if (payUResponse && subscriptionType.isPresent()) {
                AppUser appUser = appUserRepository.getReferenceById(1L);
                Date endDate = getEndDate(subscriptionPaymentDTO.getSubscriptionType().getPeriod(), appUser);

                Subscription subscription = new Subscription();
                subscription.setType(subscriptionType.get());
                subscription.setUser(appUser);
                subscription.setTo(endDate);
                subscriptionRepository.save(subscription);
                return 200;
            } else {
                return 400;
            }
        }
        return 400;
    }

    private Date getEndDate(int period, AppUser appUser) {
        Date now = new Date();
        List<Subscription> subscriptions = appUser.getSubscriptions();
        if (!subscriptions.isEmpty()) {
            subscriptions.sort(Comparator.comparing(Subscription::getTo).reversed());
            Date latest = subscriptions.get(0).getTo();
            now = now.compareTo(latest) > 0 ? now : latest;
        }
        return java.sql.Timestamp
                .valueOf(LocalDateTime.from(now.toInstant().atZone(ZoneId.of("UTC"))).plusDays(period));
    }
}

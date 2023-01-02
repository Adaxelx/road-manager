package pl.edu.pw.roadmanager.backend.services.impl;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import pl.edu.pw.roadmanager.backend.domain.AppUser;
import pl.edu.pw.roadmanager.backend.dto.SubscriptionDTO;
import pl.edu.pw.roadmanager.backend.dto.SubscriptionPaymentDTO;
import pl.edu.pw.roadmanager.backend.dto.SubscriptionTypeDTO;
import pl.edu.pw.roadmanager.backend.repositories.AppUserRepository;
import pl.edu.pw.roadmanager.backend.repositories.SubscriptionRepository;
import pl.edu.pw.roadmanager.backend.repositories.SubscriptionTypeRepository;
import pl.edu.pw.roadmanager.backend.services.SubscriptionAPI;
import pl.edu.pw.roadmanager.backend.domain.Subscription;

import java.lang.reflect.Type;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

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
        Type type = new TypeToken<List<SubscriptionDTO>>(){}.getType();

        return modelMapper.map(subscriptionRepository.findAll(), type);
    }

    @Override
    public List<SubscriptionTypeDTO> getSubscriptionTypes() {
        Type type = new TypeToken<List<SubscriptionTypeDTO>>(){}.getType();

        return modelMapper.map(subscriptionTypeRepository.findAll(), type);
    }

    @Override
    public int addSubscription(SubscriptionPaymentDTO subscriptionPaymentDTO) {

        if(subscriptionPaymentDTO != null){
            PayU payU = new PayU();
            boolean payUResponse = payU.makePayment(subscriptionPaymentDTO.getBlickNumber());
            if(payUResponse){
                AppUser appUser = appUserRepository.getReferenceById(1L);
                List<pl.edu.pw.roadmanager.backend.domain.Subscription> subscriptions = appUser.getSubscriptions();
                Date now = new Date();
                for (int i = 0; i < subscriptions.size(); i++) {
                    if (subscriptions.get(i).getTo().compareTo(now) > 0) {
                        now = subscriptions.get(i).getTo();
                    }
                }
                Subscription subscription = new Subscription();
                subscription.setType(subscriptionPaymentDTO.getSubscriptionType());
                subscription.setUser(appUser);
                subscription.setTo(now);
                subscriptionRepository.save(subscription);
                return 200;
            }else{
                return 400;
            }
        }
        return 400;
    }
}

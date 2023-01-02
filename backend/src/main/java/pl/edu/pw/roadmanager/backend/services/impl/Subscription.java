package pl.edu.pw.roadmanager.backend.services.impl;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import pl.edu.pw.roadmanager.backend.dto.SubscriptionDTO;
import pl.edu.pw.roadmanager.backend.dto.SubscriptionPaymentDTO;
import pl.edu.pw.roadmanager.backend.dto.SubscriptionTypeDTO;
import pl.edu.pw.roadmanager.backend.repositories.SubscriptionRepository;
import pl.edu.pw.roadmanager.backend.repositories.SubscriptionTypeRepository;
import pl.edu.pw.roadmanager.backend.services.SubscriptionAPI;

import java.lang.reflect.Type;
import java.util.List;

public class Subscription implements SubscriptionAPI {

    @Autowired
    SubscriptionRepository subscriptionRepository;

    @Autowired
    SubscriptionTypeRepository subscriptionTypeRepository;

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
        return 0;
    }
}

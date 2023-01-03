package pl.edu.pw.roadmanager.backend.services.impl;

import org.springframework.stereotype.Service;
import pl.edu.pw.roadmanager.backend.services.PayUAPI;

@Service
public class PayU implements PayUAPI {

    @Override
    public boolean makePayment(int blik) {
        return true;
    }
}

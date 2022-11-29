package pl.edu.pw.roadmanager.backend.services;

import pl.edu.pw.roadmanager.backend.dto.TollDTO;

import java.util.List;

public interface PaymentAPI {

    void addOrEditToll(TollDTO tollDTO);

    List<TollDTO> getTollList();
}

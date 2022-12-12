package pl.edu.pw.roadmanager.backend.services;

import pl.edu.pw.roadmanager.backend.dto.PassageDTO;

public interface SensorAPI {

    int registerPassage(PassageDTO passageDTO);
}

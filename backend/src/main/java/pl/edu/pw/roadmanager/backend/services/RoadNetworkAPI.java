package pl.edu.pw.roadmanager.backend.services;

import pl.edu.pw.roadmanager.backend.dto.RoadDTO;
import pl.edu.pw.roadmanager.backend.dto.RoadNetworkDTO;

public interface RoadNetworkAPI {

    void addOrEditRoad(RoadDTO roadDTO);

    RoadNetworkDTO getRoadNetwork();
}

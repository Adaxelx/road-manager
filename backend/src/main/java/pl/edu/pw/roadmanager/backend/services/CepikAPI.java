package pl.edu.pw.roadmanager.backend.services;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import pl.edu.pw.roadmanager.backend.dto.VehicleDTO;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.ParseException;
import java.text.SimpleDateFormat;

public interface CepikAPI {

    static boolean getDataFromCEPIK(VehicleDTO vehicleDTO) {
        String CEPIK_URL = "https://api.cepik.gov.pl/pojazdy/";
        String requestURL = CEPIK_URL + vehicleDTO.getTechnicalID();

        try {
            HttpURLConnection httpURLConnection = (HttpURLConnection) new URL(requestURL).openConnection();
            httpURLConnection.setRequestMethod("GET");
            int responseCode = httpURLConnection.getResponseCode();
            if (!HttpStatus.valueOf(responseCode).is2xxSuccessful()) {
                return false;
            }
            BufferedReader bf = new BufferedReader(new InputStreamReader(httpURLConnection.getInputStream()));
            String inputLine;
            StringBuilder response = new StringBuilder();
            while ((inputLine = bf.readLine()) != null) {
                response.append(inputLine);
            }
            bf.close();
            JSONObject vehicleData = new JSONObject(response.toString())
                    .getJSONObject("data")
                    .getJSONObject("attributes");

            setVehicleDataFromJSON(vehicleData, vehicleDTO);
            return true;
        } catch (IOException | JSONException | ParseException e) {
            throw new RuntimeException(e);
        }
    }

    private static void setVehicleDataFromJSON(JSONObject vehicleData, VehicleDTO vehicleDTO) throws JSONException, ParseException {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

        vehicleDTO.setFirstOwner("Jan Kowalski");
        vehicleDTO.setCylinderCapacity(vehicleData.getDouble("pojemnosc-skokowa-silnika"));
        vehicleDTO.setManufacturer(vehicleData.getString("marka"));
        vehicleDTO.setModel(vehicleData.getString("model"));
        vehicleDTO.setProductionYear(dateFormat.parse(vehicleData.getString("data-pierwszej-rejestracji-w-kraju")));
        vehicleDTO.setType(vehicleData.getString("typ"));
        vehicleDTO.setWeight(vehicleData.getDouble("masa-wlasna"));
    }
}
package pl.edu.pw.roadmanager.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.edu.pw.roadmanager.backend.domain.AppUser;
import pl.edu.pw.roadmanager.backend.domain.SubscriptionType;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SubscriptionDTO {
    private Long id;

    private Date to;

    private AppUser user;

    private SubscriptionType type;
}

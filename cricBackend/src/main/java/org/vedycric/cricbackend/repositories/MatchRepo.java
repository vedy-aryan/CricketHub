package org.vedycric.cricbackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.vedycric.cricbackend.entities.Match;

import java.util.Optional;

public interface MatchRepo extends JpaRepository<Match,Long> {
//    Match fetch using "team ka naam"
    Optional<Match> findByTeamHeading(String teamHeading);

}

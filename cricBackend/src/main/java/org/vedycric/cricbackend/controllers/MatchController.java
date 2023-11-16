package org.vedycric.cricbackend.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.vedycric.cricbackend.entities.Match;
import org.vedycric.cricbackend.services.MatchServices;

import java.util.List;

@RestController
@RequestMapping("/match")
@CrossOrigin("*")
public class MatchController {

    private MatchServices matchServices;

    public MatchController(MatchServices matchServices) {
        this.matchServices = matchServices;
    }


    @GetMapping("/live")
    public ResponseEntity<List<Match>> getLiveMatches(){

        return new ResponseEntity<>(this.matchServices.getLiveMatches(), HttpStatus.OK);

    }


    @GetMapping("/all")
    public ResponseEntity<List<Match>> getAllMatches(){
        return new ResponseEntity<>(this.matchServices.getAllMatches(), HttpStatus.OK);
    }

    @GetMapping("/points-table")
    public ResponseEntity<?> getPointsTable(){
        return new ResponseEntity<>(this.matchServices.getPointsTable(),HttpStatus.OK);
    }

}

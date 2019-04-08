package com.example.scrabbler.controller;

import com.example.scrabbler.domains.PlayerRequestBody;
import com.example.scrabbler.repositories.models.Player;
import com.example.scrabbler.services.interfaces.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/scrabbler")
@CrossOrigin
public class PlayerController {
    private PlayerService playerService;

    @Autowired
    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping("/players")
    public ResponseEntity<List<Player>> getPlayers() {
        List<Player> players = playerService.getPlayers();
        return new ResponseEntity<>(players, HttpStatus.OK);
    }

    @PostMapping("/players")
    public ResponseEntity<Player> addPlayer(@RequestBody(required = false) PlayerRequestBody playerRequestBody) {
        Player player = playerService.addPlayer(playerRequestBody.getName());
        return new ResponseEntity<>(player, HttpStatus.OK);
    }

    @GetMapping("/players/{id}")
    public ResponseEntity<Player> getPlayer(@PathVariable int id) {
        Player player = playerService.getPlayer(id);
        return new ResponseEntity<>(player, HttpStatus.OK);
    }

    @DeleteMapping("/players/{id}")
    public ResponseEntity<List<Player>> deletePlayer(@PathVariable int id) {
        playerService.deletePlayer(id);
        List<Player> players = playerService.getPlayers();
        return new ResponseEntity<>(players, HttpStatus.OK);
    }

    @PostMapping("/players/{id}/words")
    public ResponseEntity<Player> addWordToPlayer(@PathVariable int id, @RequestParam(value = "word") String scrabbleWord) {
        Player player = playerService.addWordToPlayer(id, scrabbleWord);
        return new ResponseEntity<>(player, HttpStatus.OK);
    }
}

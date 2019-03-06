package com.example.scrabbler.controller;

import com.example.scrabbler.repositories.models.Player;
import com.example.scrabbler.services.interfaces.PlayerService;
import org.junit.Test;
import org.mockito.Mock;

public class PlayerControllerTest {

    @Mock
    PlayerService playerService;

    PlayerControllerTest(PlayerService playerService) {
        this.playerService = playerService;
    }

    @Test
    public void contextLoads() {
    }
}
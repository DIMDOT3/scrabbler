package com.example.scrabbler.controller;

import com.example.scrabbler.domains.PlayerRequestBody;
import com.example.scrabbler.repositories.models.Player;
import com.example.scrabbler.repositories.models.Word;
import com.example.scrabbler.services.interfaces.PlayerService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.core.IsCollectionContaining.hasItems;
import static org.mockito.Mockito.*;

public class PlayerControllerTest {

    private PlayerService playerService = mock(PlayerService.class);
    private PlayerController playerController;


    @Before
    public void setup() {
        this.playerController = new PlayerController(playerService);
    }

    @Test
    public void contextLoads() {
    }

    @Test
    public void testPlayerController_GetPlayers() {
        Player player1 = new Player();
        player1.setPlayerName("player1");
        Player player2 = new Player();
        player2.setPlayerName("player2");
        List<Player> players = Arrays.asList(player1, player2);

        when(playerService.getPlayers()).thenReturn(players);

        ResponseEntity<List<Player>> response = playerController.getPlayers();

        Assert.assertEquals(response.getBody().size(), 2);
        Assert.assertThat(response.getBody(), hasItems(player1, player2));
    }

    @Test
    public void testPlayerController_AddPlayer() {
        PlayerRequestBody requestBody = new PlayerRequestBody("player1");
        Player player = new Player("player1");

        when(playerService.addPlayer("player1")).thenReturn(player);

        ResponseEntity<Player> response = playerController.addPlayer(requestBody);

        Assert.assertSame(player, response.getBody());
    }

    @Test
    public void testPlayerController_GetPlayer() {
        Player player = new Player("player1");

        when(playerService.getPlayer(1)).thenReturn(player);

        ResponseEntity<Player> response = playerController.getPlayer(1);

        Assert.assertSame(player, response.getBody());
    }

    @Test
    public void testPlayerController_DeletePlayer() {
        playerController.deletePlayer(1);

        verify(playerService).deletePlayer(1);
    }

    @Test
    public void testPlayerController_AddWordToPlayer() {
        Word word = new Word(1, "test", 1);
        List<Word> words = new ArrayList<>();
        words.add(word);

        Player player = new Player("player1");
        player.setPlayerId(1);
        player.setWords(words);

        when(playerService.addWordToPlayer(1, "test")).thenReturn(player);

        ResponseEntity<Player> response = playerController.addWordToPlayer(1, "test");

        Assert.assertEquals(response.getBody().getWords().size(), 1);
    }
}
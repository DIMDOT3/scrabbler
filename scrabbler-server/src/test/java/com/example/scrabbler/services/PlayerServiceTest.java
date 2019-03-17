package com.example.scrabbler.services;

import com.example.scrabbler.repositories.PlayerRepository;
import com.example.scrabbler.repositories.models.Player;
import com.example.scrabbler.services.interfaces.WordService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import static org.mockito.Mockito.*;

public class PlayerServiceTest {
    private PlayerRepository playerRepository= mock(PlayerRepository.class);
    private WordService wordService = mock(WordService.class);
    private PlayerServiceImpl playerService;

    @Before
    public void setup() {
        this.playerService = new PlayerServiceImpl(wordService, playerRepository);
    }

    @Test
    public void contextLoads() {}

    @Test
    public void testPlayerService_GetPlayer() {
        Player player = new Player("john");
        player.setPlayerId(1);

        when(playerRepository.findById(1)).thenReturn(java.util.Optional.of(player));

        Player response = playerService.getPlayer(1);

        Assert.assertEquals(response, player);
    }

    @Test
    public void testPlayerService_AddPlayer() {
        Player player = new Player("john");
        playerService.addPlayer("john");

        verify(playerRepository).save(player);
    }
}

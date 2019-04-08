package com.example.scrabbler.services.interfaces;

import com.example.scrabbler.repositories.models.Player;

import java.util.List;

public interface PlayerService {

    public List<Player> getPlayers();

    public Player getPlayer(int playerId);

    public Player addPlayer(String word);

    public void deletePlayer(int playerId);

    public Player addWordToPlayer(int playerId, String word);
}

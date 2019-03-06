package com.example.scrabbler.services.interfaces;

import com.example.scrabbler.repositories.models.Player;

import java.util.List;

public interface PlayerService {

    public List<Player> getPlayers();

    public Player getPlayer(int playerId);

    public Player addPlayer(String word);

    public Player deletePlayer(int playerId);

    public Player addWordToPlayer(int playerId, String word);

    // public Optional<Player> getPlayer(int playerId);
    // public void addWord(Word word, int playerId);

    // public void deleteWord(int wordId);
    //
    // public Word updateWord(int wordId);
}

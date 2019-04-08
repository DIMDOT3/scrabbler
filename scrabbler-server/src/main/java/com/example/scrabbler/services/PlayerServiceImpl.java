package com.example.scrabbler.services;

import com.example.scrabbler.repositories.PlayerRepository;
import com.example.scrabbler.repositories.models.Player;
import com.example.scrabbler.repositories.models.Word;
import com.example.scrabbler.services.interfaces.PlayerService;
import com.example.scrabbler.services.interfaces.WordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class PlayerServiceImpl implements PlayerService {

    @Autowired
    private PlayerRepository playerRepository;

    private WordService wordService;

    public PlayerServiceImpl(WordService wordService, PlayerRepository playerRepository) {
        this.wordService = wordService;
        this.playerRepository = playerRepository;
    }

    @Override
    public Player getPlayer(int playerId) {
        return playerRepository.findById(playerId).orElseThrow(() -> new NoSuchElementException());
    }

    @Override
    public List<Player> getPlayers() {
        return playerRepository.findAll();
    }

    @Override
    public Player addPlayer(String name) {
        Player newPlayer = new Player();
        newPlayer.setPlayerName(name);
        playerRepository.save(newPlayer);
        return newPlayer;
    }

    @Override
    public void deletePlayer(int playerId) {
        playerRepository.deleteById(playerId);
    }

    @Override
    public Player addWordToPlayer(int playerId, String word) {
        Player player = playerRepository.findById(playerId).orElseThrow(NoSuchElementException::new);
        Word newWord = wordService.checkIfWordIsValid(word);
        if (newWord.getScrabblescore() > 0) {
            List<Word> words = player.getWords();
            words.add(newWord);
            player.setWords(words);
            playerRepository.save(player);
            return player;
        }
        return player;
    }
}

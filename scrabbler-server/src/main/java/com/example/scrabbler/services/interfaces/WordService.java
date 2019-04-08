package com.example.scrabbler.services.interfaces;

import com.example.scrabbler.repositories.models.Player;
import com.example.scrabbler.repositories.models.Word;

import java.util.List;

public interface WordService {

  public List<Word> getAllWords();

  public Word getWord(int id);

  public Word checkIfWordIsValid(String word);

  public Word updateWord(int id, String word);

  public Player deleteWord(int playerId, int wordId);
}
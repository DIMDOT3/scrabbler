package com.example.scrabbler.services;


import com.example.scrabbler.repositories.PlayerRepository;
import com.example.scrabbler.repositories.WordRepository;
import com.example.scrabbler.repositories.models.Player;
import com.example.scrabbler.repositories.models.Word;
import com.example.scrabbler.services.interfaces.WordService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class WordServiceImpl implements WordService {

  private WordRepository wordRepository;
  private PlayerRepository playerRepository;

  private static final Logger log = LoggerFactory.getLogger(Word.class);

  @Autowired
  RestTemplate restTemplate;

  @Autowired
  public WordServiceImpl(WordRepository wordRepository, PlayerRepository playerRepository) {
    this.wordRepository = wordRepository;
    this.playerRepository = playerRepository;
  }

   public List<Word> getAllWords() {
    List<Word> words = wordRepository.findAll();
    return words;
   }

   public Word getWord(int id) {
    return wordRepository.findById(id).get();
   }

  @Override
  public Word checkIfWordIsValid(String word) {
    String API_KEY = "1.119936904369512e30";
    String url = String.format("http://www.wordgamedictionary.com/api/v1/references/scrabble/%s?key=%s", word, API_KEY);
    Word response = restTemplate.getForObject(url, Word.class);
    return response;
    //    try {
//      log.info("attempting to call");
//      Word response = restTemplate.getForObject(url, Word.class);
//      log.info("call completed");
//      System.out.println(response);
//    } catch (Exception e) {
//      log.info(e.getMessage());
//    }
  }

  @Override
  public Word updateWord(int id, String word) {
    Word updatedWord = wordRepository.findById(id).get();
    updatedWord.setWord(word);
    return wordRepository.save(updatedWord);
  }

  @Override
  public Player deleteWord(int playerId, int wordId) {
    wordRepository.deleteById(wordId);
    return playerRepository.findById(playerId).orElseThrow(NoSuchElementException::new);
  }
}
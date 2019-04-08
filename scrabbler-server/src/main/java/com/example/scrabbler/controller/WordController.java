package com.example.scrabbler.controller;

import com.example.scrabbler.domains.WordRequestBody;
import com.example.scrabbler.repositories.models.Player;
import com.example.scrabbler.repositories.models.Word;
import com.example.scrabbler.services.interfaces.WordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/scrabbler/players/{playerId}/words")
@CrossOrigin

public class WordController {
    private WordService wordService;

    @Autowired
    public WordController(WordService wordService) {this.wordService = wordService;}

    @GetMapping("/")
    public List<Word> getAllWords() {
       return wordService.getAllWords();
    }

    @GetMapping("/{wordId}")
    public Word getWord(@PathVariable int wordId) {
        return wordService.getWord(wordId);
    }

    @DeleteMapping("/{wordId}")
    public Player deleteWord(@PathVariable int playerId, @PathVariable int wordId) {
       Player player = wordService.deleteWord(playerId, wordId);
       return player;
    }

//    @PutMapping("/words/{id}")
//    public Word updateWord(@PathVariable int id, @RequestBody WordRequestBody wordRequestBody) {
//        String word = wordRequestBody.getWord();
//        return wordService.updateWord(id, word);
//    }
}
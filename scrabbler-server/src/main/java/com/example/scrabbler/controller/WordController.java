package com.example.scrabbler.controller;

import com.example.scrabbler.domains.WordRequestBody;
import com.example.scrabbler.repositories.models.Word;
import com.example.scrabbler.services.interfaces.WordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/scrabbler")
@CrossOrigin

public class WordController {
    private WordService wordService;

    @Autowired
    public WordController(WordService wordService) {this.wordService = wordService;}

    @GetMapping("/words")
    public List<Word> getAllWords() {
       return wordService.getAllWords();
    }

    @GetMapping("/words/{id}")
    public Word getWord(@PathVariable int id) {
        return wordService.getWord(id);
    }

    @DeleteMapping("/words/{id}")
    public void deleteWord(@PathVariable int id) {
        wordService.deleteWord(id);
    }

//    @PutMapping("/words/{id}")
//    public Word updateWord(@PathVariable int id, @RequestBody WordRequestBody wordRequestBody) {
//        String word = wordRequestBody.getWord();
//        return wordService.updateWord(id, word);
//    }
}
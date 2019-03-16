package com.example.scrabbler.controller;

import com.example.scrabbler.domains.WordRequestBody;
import com.example.scrabbler.repositories.models.Word;
import com.example.scrabbler.services.interfaces.WordService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.Arrays;
import java.util.List;

import static org.hamcrest.core.IsCollectionContaining.hasItems;
import static org.mockito.Mockito.*;


public class WordControllerTest {
    private WordService wordService = mock(WordService.class);
    private WordController wordController;

    @Before
    public void setup() {
        this.wordController = new WordController(wordService);
    }

    @Test
    public void contextLoads() {}

    @Test
    public void testWordController_GetAllWords() {
        Word word1 = new Word(1, "hello", 1);
        Word word2 = new Word(2, "world", 2);
        List<Word> words = Arrays.asList(word1, word2);

        when(wordService.getAllWords()).thenReturn(words);

        List<Word> response = wordController.getAllWords();

        Assert.assertEquals(response.size(), 2);
        Assert.assertThat(response, hasItems(word1, word2));
    }

    @Test
    public void testWordController_GetWord() {
        Word word1 = new Word(1, "hello", 1);

        when(wordService.getWord(1)).thenReturn(word1);

        Word response = wordController.getWord(1);

        Assert.assertSame(response, word1);
    }

    @Test
    public void testWordController_DeleteWord() {
        Word word1 = new Word(1, "hello", 1);
        Word word2 = new Word(2, "world", 2);
        List<Word> words = Arrays.asList(word1, word2);

        wordController.deleteWord(2);

        verify(wordService).deleteWord(2);
    }
}

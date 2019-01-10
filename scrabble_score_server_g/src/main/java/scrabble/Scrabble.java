package scrabble;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.IntStream;

class Scrabble {
    private String word;
    private long id;
    private long score;

    public Scrabble(long id, String word) {
        this.id = id;
        this.word = word;
        this.score = 0;
    }

    long calculateScore() {
        long score = 0;

        char[] scrabbleWordArray = word.toLowerCase().toCharArray();
        for (char a : scrabbleWordArray) {
            score += scoreFor(a);

        }
        return score;
    }


    int scoreFor(char letter) {
        switch(letter) {
            case 'd':
            case 'g':
                return 2;

            case 'b':
            case 'c':
            case 'm':
            case 'p':
                return 3;

            case 'f':
            case 'h':
            case 'v':
            case 'w':
            case 'y':
                return 4;

            case 'k':
                return 5;

            case 'j':
            case 'x':
                return 8;

            case 'z':
            case 'q':
                return 10;

            default:
                return 1;

        }
    }

    public long getId() {
        return this.id;
    }

    public String getWord() {
        return this.word;
    }

    public long getScore() {
        return this.score;
    }

    public void setScore() {
        this.score = calculateScore();
    }
}
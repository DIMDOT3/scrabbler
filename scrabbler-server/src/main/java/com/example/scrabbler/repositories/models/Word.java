package com.example.scrabbler.repositories.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity(name = "Words")
@Table(name = "words")
@JsonIgnoreProperties(ignoreUnknown = true)
@XmlRootElement(name="entry")
@XmlAccessorType(XmlAccessType.NONE)
//public class Word extends AuditModel {
public class Word {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int wordId;

    private String word;

    private int scrabblescore;

//    @ManyToMany(mappedBy = "words")
//    private List<Player> players;
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name="player_id", nullable=false)
//    private Player player;


    public Word() {}

    public Word(int wordId) {
        this.wordId = wordId;
    }

    public Word(int wordId, String word) {
        this.wordId = wordId;
        this.word = word;
    }

    public Word(String word, int scrabblescore) {
        this.word = word;
        this.scrabblescore = scrabblescore;
    }

    public int getWordId() {
        return wordId;
    }

    public void setWordId(int wordId) {
        this.wordId = wordId;
    }

    public String getWord() {
        return word;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public int getScrabblescore() {
        return scrabblescore;
    }

    public void setScrabblescore(int scrabblescore) {
        this.scrabblescore = scrabblescore;
    }

}
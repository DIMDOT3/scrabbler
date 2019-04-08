package com.example.scrabbler.repositories.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity(name = "Words")
@Table(name = "words")
@JsonIgnoreProperties(ignoreUnknown = true)
@XmlRootElement(name = "entry")
@XmlAccessorType(XmlAccessType.NONE)

public class Word {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    private int id;

    private String word;

    private int scrabblescore;

    // @ManyToMany(mappedBy = "words")
    // private List<Player> players;
    // @ManyToOne(fetch = FetchType.LAZY)
    // @JoinColumn(name="player_id", nullable=false)
    // private Player player;

    public Word() {
    }

    public Word(int id) {
        this.id = id;
    }

    public Word(int id, String word) {
        this.id = id;
        this.word = word;
    }

    public Word(int id, String word, int scrabblescore) {
        this.id = id;
        this.word = word;
        this.scrabblescore = scrabblescore;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
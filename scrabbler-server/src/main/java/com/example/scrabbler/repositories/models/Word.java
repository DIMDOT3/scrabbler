package com.example.scrabbler.repositories.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

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
@Getter
@Setter
//public class Word extends AuditModel {
public class Word {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String word;

    private int scrabblescore;

//    @ManyToMany(mappedBy = "words")
//    private List<Player> players;
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name="player_id", nullable=false)
//    private Player player;


    public Word() {}

    public Word(int id) {
        this.id = id;
    }

    public Word(int wordId, String word) {
        this.id = wordId;
        this.word = word;
    }

    public Word(int id, String word, int scrabblescore) {
        this.id = id;
        this.word = word;
        this.scrabblescore = scrabblescore;
    }
}
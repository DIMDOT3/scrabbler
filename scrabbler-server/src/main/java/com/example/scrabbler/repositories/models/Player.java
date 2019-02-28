package com.example.scrabbler.repositories.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name="Players")
@Table(name = "players")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Player extends AuditModel {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int playerId;
  private String playerName;

//  @ManyToMany(cascade = CascadeType.ALL)
//  @JoinTable(name = "player_words", joinColumns = { @JoinColumn(name = "player_id") }, inverseJoinColumns = { @JoinColumn(name = "word_id") })
//  private List<Word> words;
  @OneToMany(
    cascade = CascadeType.ALL,
    orphanRemoval = true
  )
  @JoinColumn(name = "player_id")
  private List<Word> words = new ArrayList<>();

  public Player() {}

  public Player(String playerName) {
    this.playerName = playerName;
  }

  public int getPlayerId() {
    return playerId;
  }

  public void setPlayerId(int playerId) {
    this.playerId = playerId;
  }

  public String getPlayerName() {
    return playerName;
  }

  public void setPlayerName(String playerName) {
    this.playerName = playerName;
  }

  public List<Word> getWords() {
    return words;
  }

  public void setWords(List<Word> words) {
    this.words = words;
  }

//  public void addWord(Word word) {
//    words.add(word);
//    word.setWord(this);
//  }
}
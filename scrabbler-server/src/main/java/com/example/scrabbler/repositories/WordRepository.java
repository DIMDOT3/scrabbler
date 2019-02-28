package com.example.scrabbler.repositories;

import com.example.scrabbler.repositories.models.Word;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WordRepository extends CrudRepository<Word, Integer> {
    List<Word> findAll();
}
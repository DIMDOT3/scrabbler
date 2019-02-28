package com.example.scrabbler.repositories;

import com.example.scrabbler.repositories.models.Player;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerRepository extends CrudRepository<Player, Integer> {
    List<Player> findAll();
}

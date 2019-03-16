package com.example.scrabbler.domains;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class PlayerRequestBody {
    private String name;

    public PlayerRequestBody(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

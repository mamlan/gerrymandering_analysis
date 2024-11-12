package com.example.cse416.model;

import java.util.HashMap;

import org.springframework.data.annotation.Id;

import com.example.cse416.constants.Group;

public class Precinct extends Election{
    @Id
    private String id;
    private Integer population;
    private String boundary;
    private Candidate winner;
   private HashMap<Group, Integer> demographics;
public String getId() {
    return id;
}
public void setId(String id) {
    this.id = id;
}
public Integer getPopulation() {
    return population;
}
public void setPopulation(Integer population) {
    this.population = population;
}
public String getBoundary() {
    return boundary;
}
public void setBoundary(String boundary) {
    this.boundary = boundary;
}
public Candidate getWinner() {
    return winner;
}
public void setWinner(Candidate winner) {
    this.winner = winner;
}
public HashMap<Group, Integer> getDemographics() {
    return demographics;
}
public void setDemographics(HashMap<Group, Integer> demographics) {
    this.demographics = demographics;
}

}
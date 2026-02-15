package com.club.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "diet_request")
public class DietRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long memberId;

    private int age;
    private double weight;
    private double height;

    private String medicalConditions;
    private String foodPreferences;
    private String fitnessGoal;

    private String status; // PENDING / APPROVED / REJECTED

    public DietRequest() {
        this.status = "PENDING";
    }

    public Long getId() {
        return id;
    }

    public Long getMemberId() {
        return memberId;
    }

    public void setMemberId(Long memberId) {
        this.memberId = memberId;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public String getMedicalConditions() {
        return medicalConditions;
    }

    public void setMedicalConditions(String medicalConditions) {
        this.medicalConditions = medicalConditions;
    }

    public String getFoodPreferences() {
        return foodPreferences;
    }

    public void setId(Long id) {
		this.id = id;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public void setFoodPreferences(String foodPreferences) {
        this.foodPreferences = foodPreferences;
    }

    public String getFitnessGoal() {
        return fitnessGoal;
    }

    public void setFitnessGoal(String fitnessGoal) {
        this.fitnessGoal = fitnessGoal;
    }

    public String getStatus() {
        return status;
    }
}

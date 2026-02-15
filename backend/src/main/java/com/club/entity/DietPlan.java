package com.club.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "diet_plan")
public class DietPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long memberId;
    private Long nutritionistId;

    private int calories;
    private String mealPlan;
    private String notes;

    private String status; // ACTIVE / UPDATED

    public DietPlan() {
        this.status = "ACTIVE";
    }

    // ✅ getters & setters (ALL REQUIRED)

    public Long getId() {
        return id;
    }

    public Long getMemberId() {
        return memberId;
    }

    public void setMemberId(Long memberId) {
        this.memberId = memberId;
    }

    public Long getNutritionistId() {
        return nutritionistId;
    }

    public void setNutritionistId(Long nutritionistId) {
        this.nutritionistId = nutritionistId;
    }

    public int getCalories() {
        return calories;
    }

    public void setCalories(int calories) {
        this.calories = calories;
    }

    public String getMealPlan() {
        return mealPlan;
    }

    public void setMealPlan(String mealPlan) {
        this.mealPlan = mealPlan;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}

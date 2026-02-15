package com.club.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "membership_plan")
public class MembershipPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String planName;     // Monthly / Quarterly / Yearly
    private int durationMonths;  // 1, 3, 12
    private double fees;
    private String description;

    public MembershipPlan() {}

    // getters & setters

    public Long getId() {
        return id;
    }

    public String getPlanName() {
        return planName;
    }

    public void setPlanName(String planName) {
        this.planName = planName;
    }

    public int getDurationMonths() {
        return durationMonths;
    }

    public void setDurationMonths(int durationMonths) {
        this.durationMonths = durationMonths;
    }

    public double getFees() {
        return fees;
    }

    public void setFees(double fees) {
        this.fees = fees;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}


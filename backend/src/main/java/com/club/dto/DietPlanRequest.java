package com.club.dto;

public class DietPlanRequest {

    private Long memberId;
    private String dietDetails;
    private String duration;

    // getters & setters
    public Long getMemberId() {
        return memberId;
    }

    public void setMemberId(Long memberId) {
        this.memberId = memberId;
    }

    public String getDietDetails() {
        return dietDetails;
    }

    public void setDietDetails(String dietDetails) {
        this.dietDetails = dietDetails;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }
}
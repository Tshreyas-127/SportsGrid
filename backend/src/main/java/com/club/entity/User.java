//package com.club.entity;
//
//import jakarta.persistence.*;
//
//@Entity
//@Table(name="users")
//public class User {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long userId;
//
//    private String name;
//    private String email;
//    private String password;
//    private String role;   // MEMBER / ADMIN / TRAINER / NUTRITIONIST
//    private String phone;
//
//    public User() {}
//
//    public Long getUserId() {
//        return userId;
//    }
//
//    public void setUserId(Long userId) {
//        this.userId = userId;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getPassword() {
//        return password;
//    }
//
//    public void setPassword(String password) {
//        this.password = password;
//    }
//
//    public String getRole() {
//        return role;
//    }
//
//    public void setRole(String role) {
//        this.role = role;
//    }
//
//    public String getPhone() {
//        return phone;
//    }
//
//    public void setPhone(String phone) {
//        this.phone = phone;
//    }
//}


package com.club.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String name;
    private String email;
    private String password;
    private String role;   // MEMBER / ADMIN / TRAINER / NUTRITIONIST
    private String phone;
    
    private int otpAttempts;
    private LocalDateTime otpLockTime;

    @Column(name = "reset_otp")
    private String resetOtp;

    @Column(name = "otp_expiry")
    private LocalDateTime otpExpiry;
    
    public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public String getMembershipPlan() {
		return membershipPlan;
	}

	public void setMembershipPlan(String membershipPlan) {
		this.membershipPlan = membershipPlan;
	}

	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}

	private boolean active;   // approved or not

    // optional but very useful
    private String membershipPlan; 
    private LocalDate startDate;
    private LocalDate endDate;


    public User() {}

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

	public int getOtpAttempts() {
		return otpAttempts;
	}

	public void setOtpAttempts(int otpAttempts) {
		this.otpAttempts = otpAttempts;
	}

	public LocalDateTime getOtpLockTime() {
		return otpLockTime;
	}

	public void setOtpLockTime(LocalDateTime otpLockTime) {
		this.otpLockTime = otpLockTime;
	}

	public String getResetOtp() {
		return resetOtp;
	}

	public void setResetOtp(String resetOtp) {
		this.resetOtp = resetOtp;
	}

	public LocalDateTime getOtpExpiry() {
		return otpExpiry;
	}

	public void setOtpExpiry(LocalDateTime otpExpiry) {
		this.otpExpiry = otpExpiry;
	}
    
}



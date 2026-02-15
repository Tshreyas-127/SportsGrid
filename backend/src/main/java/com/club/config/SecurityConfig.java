	//package com.club.config;
	//
	//import com.club.security.JwtFilter;
	//import org.springframework.beans.factory.annotation.Autowired;
	//import org.springframework.context.annotation.Bean;
	//import org.springframework.context.annotation.Configuration;
	//import org.springframework.security.config.http.SessionCreationPolicy;
	//import org.springframework.security.web.SecurityFilterChain;
	//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
	//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
	//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
	//
	////@Configuration
	////public class SecurityConfig {
	////
	////    @Autowired
	////    private JwtFilter jwtFilter;
	////
	////    @Bean
	////    public BCryptPasswordEncoder passwordEncoder() {
	////        return new BCryptPasswordEncoder();
	////    }
	////
	////    @Bean
	////    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
	////
	////        http.csrf(csrf -> csrf.disable())
	////            .sessionManagement(session -> session
	////                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
	////            .authorizeHttpRequests(auth -> auth
	////
	////            	    .requestMatchers("/users/login", "/users/add").permitAll()
	////
	////            	    .requestMatchers("/system/super/**").hasRole("SUPER_ADMIN")
	////
	////            	    .requestMatchers("/system/admin/**").hasAnyRole("ADMIN", "SUPER_ADMIN")
	////
	////            	    .requestMatchers("/system/nutrition/**").hasRole("NUTRITIONIST")
	////
	////            	    .requestMatchers("/system/trainer/**").hasRole("TRAINER")
	////
	////            	    .requestMatchers("/system/member/**").hasRole("MEMBER")
	////
	////            	    .anyRequest().authenticated()
	////            	);
	////
	////        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
	////        return http.build();
	////    }
	////
	////}
	//
	//
	//
	//
	//
	//
	////
	////package com.club.config;
	////
	////import com.club.security.JwtFilter;
	////import org.springframework.beans.factory.annotation.Autowired;
	////import org.springframework.context.annotation.Bean;
	////import org.springframework.context.annotation.Configuration;
	////
	////import org.springframework.security.config.http.SessionCreationPolicy;
	////import org.springframework.security.web.SecurityFilterChain;
	////import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
	////import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
	////import org.springframework.security.config.annotation.web.builders.HttpSecurity;
	////
	////import org.springframework.web.cors.CorsConfiguration;
	////import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
	////import org.springframework.web.cors.CorsConfigurationSource;
	////
	////import java.util.List;
	////
	////@Configuration
	////public class SecurityConfig {
	////
	////    @Autowired
	////    private JwtFilter jwtFilter;
	////
	////    @Bean
	////    public BCryptPasswordEncoder passwordEncoder() {
	////        return new BCryptPasswordEncoder();
	////    }
	////
	////    @Bean
	////    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
	////
	////        http
	////            .csrf(csrf -> csrf.disable())
	////            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
	////            .sessionManagement(session -> session
	////                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
	////
	////            .authorizeHttpRequests(auth -> auth
	////            		.requestMatchers(org.springframework.http.HttpMethod.OPTIONS, "/**").permitAll()
	////
	////
	////                // Public APIs
	////                .requestMatchers("/users/login", "/users/add").permitAll()
	////
	////                // Booking APIs (Member, Admin, Super Admin)
	////                .requestMatchers("/booking/**")
	////                .hasAnyRole("MEMBER", "ADMIN", "SUPER_ADMIN")
	////
	////                // Super Admin
	////                .requestMatchers("/system/super/**")
	////                .hasRole("SUPER_ADMIN")
	////
	////                // Admin
	////                .requestMatchers("/system/admin/**")
	////                .hasAnyRole("ADMIN", "SUPER_ADMIN")
	////
	////                // Nutritionist
	////                .requestMatchers("/system/nutrition/**")
	////                .hasRole("NUTRITIONIST")
	////
	////                // Trainer
	////                
	////                .requestMatchers("/system/trainer/**")
	////                .hasRole("TRAINER")
	////
	////                // Member
	////                .requestMatchers("/system/member/**")
	////                .hasRole("MEMBER")
	////                
	////                .requestMatchers("/enquiry/add").permitAll()
	////
	////                // All other requests
	////                .anyRequest().authenticated()
	////            );
	////
	////        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
	////        return http.build();
	////    }
	////
	////    // CORS configuration for React frontend
	////    @Bean
	////    public CorsConfigurationSource corsConfigurationSource() {
	////        CorsConfiguration configuration = new CorsConfiguration();
	////
	////        configuration.setAllowedOrigins(List.of("http://localhost:3000"));
	////        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
	////        configuration.setAllowedHeaders(List.of("*"));
	////        configuration.setAllowCredentials(true);
	////
	////        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	////        source.registerCorsConfiguration("/**", configuration);
	////        return source;
	////    }
	////}
	//
	//
	//
//	package com.club.config;
//	
//	import com.club.security.JwtFilter;
//	import org.springframework.beans.factory.annotation.Autowired;
//	import org.springframework.context.annotation.Bean;
//	import org.springframework.context.annotation.Configuration;
//	
//	import org.springframework.security.config.http.SessionCreationPolicy;
//	import org.springframework.security.web.SecurityFilterChain;
//	import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//	import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//	import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//	
//	import org.springframework.web.cors.CorsConfiguration;
//	import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//	import org.springframework.web.cors.CorsConfigurationSource;
//	
//	import java.util.List;
	
//	@Configuration
//	public class SecurityConfig {
//	
//	    @Autowired
//	    private JwtFilter jwtFilter;
//	
//	    @Bean
//	    public BCryptPasswordEncoder passwordEncoder() {
//	        return new BCryptPasswordEncoder();
//	    }
//	
//	    @Bean
//	    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//	
//	        http
//	            .csrf(csrf -> csrf.disable())
//	            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
//	            .sessionManagement(session -> session
//	                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//	
//	            .authorizeHttpRequests(auth -> auth
//	            		
//	            		// 🔥 VERY IMPORTANT
//		                .requestMatchers(org.springframework.http.HttpMethod.OPTIONS, "/**").permitAll()
//
//		                // ================= ENQUIRY =================
//		                .requestMatchers("/enquiry/add").permitAll()
//		                .requestMatchers("/enquiry/**").permitAll() // (for now)
//
//		                // ================= AUTH =================
//		                .requestMatchers("/users/login", "/users/add").permitAll()
//		                
//		             // Public APIs
//		                .requestMatchers("/users/login", "/users/add","/forgot-password",
//		                        "/verify-otp",
//		                        "/reset-password").permitAll()
//	
//	                // Booking APIs
//	                .requestMatchers("/booking/**")
//	                .hasAnyRole("MEMBER", "ADMIN", "SUPER_ADMIN")
//	
//	                // Super Admin
//	                .requestMatchers("/system/super/**")
//	                .hasRole("SUPER_ADMIN")
//	
//	                // Admin
//	                .requestMatchers("/system/admin/**")
//	                .hasAnyRole("ADMIN", "SUPER_ADMIN")
//	
//	                // Nutritionist
//	                .requestMatchers("/system/nutrition/**")
//	                .hasRole("NUTRITIONIST")
//	
//	                // Trainer
//	                .requestMatchers("/system/trainer/**")
//	                .hasRole("TRAINER")
//	
//	                // Member
//	                .requestMatchers("/system/member/**")
//	                .hasRole("MEMBER")
//	
//	                // ================= NUTRITION FLOW =================
//	
//	                // MEMBER → submit request
//	                .requestMatchers("/fitness/nutrition/request")
//	                .hasRole("MEMBER")
//	
//	                // NUTRITIONIST → CREATE PLAN (SPECIFIC FIRST)
//	                .requestMatchers("/fitness/nutrition/plan/create")
//	                .hasRole("NUTRITIONIST")
//	
//	                // MEMBER → view plan (GENERAL AFTER)
//	                .requestMatchers("/fitness/nutrition/plan/**")
//	                .hasRole("MEMBER")
//	
//	                // ADMIN / NUTRITIONIST → view requests
//	                .requestMatchers("/fitness/nutrition/requests")
//	                .hasAnyRole("NUTRITIONIST", "ADMIN", "SUPER_ADMIN")
//	                
//	                .requestMatchers("/fitness/nutrition/request/**")
//	                .hasRole("MEMBER")
//	
//	//                .requestMatchers("/fitness/nutrition/my-requests")
//	//                .hasRole("MEMBER")
//	
//	
//	                // All other requests
//	                .anyRequest().authenticated()
//	            );
//	
//	        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
//	        return http.build();
//	    }
//	
//	    @Bean
//	    public CorsConfigurationSource corsConfigurationSource() {
//	        CorsConfiguration configuration = new CorsConfiguration();
//	        configuration.setAllowedOrigins(List.of("http://localhost:3000"));
//	        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
//	        configuration.setAllowedHeaders(List.of("*"));
//	        configuration.setAllowCredentials(true);
//	
//	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//	        source.registerCorsConfiguration("/**", configuration);
//	        return source;
//	    }
//	}
	
	
	
//	package com.club.config;
//
//	import com.club.security.JwtFilter;
//	import org.springframework.beans.factory.annotation.Autowired;
//	import org.springframework.context.annotation.Bean;
//	import org.springframework.context.annotation.Configuration;
//
//	import org.springframework.security.config.http.SessionCreationPolicy;
//	import org.springframework.security.web.SecurityFilterChain;
//	import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//	import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//	import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//
//	import org.springframework.web.cors.CorsConfiguration;
//	import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//	import org.springframework.web.cors.CorsConfigurationSource;
//
//	import java.util.List;
//
//	@Configuration
//	public class SecurityConfig {
//
//	    @Autowired
//	    private JwtFilter jwtFilter;
//
//	    @Bean
//	    public BCryptPasswordEncoder passwordEncoder() {
//	        return new BCryptPasswordEncoder();
//	    }
//
//	    @Bean
//	    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//
//	        http
//	            .csrf(csrf -> csrf.disable())
//	            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
//	            .sessionManagement(session -> session
//	                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//
//	            .authorizeHttpRequests(auth -> auth
//
//	                // ================= CORS PREFLIGHT =================
//	                .requestMatchers(org.springframework.http.HttpMethod.OPTIONS, "/**").permitAll()
//	                
//	                // Public APIs
//	                .requestMatchers("/users/login", "/users/add","/forgot-password",
//	                        "/verify-otp",
//	                        "/reset-password").permitAll()
//
//	                // ================= ENQUIRY =================
//	                // Public (member form)
//	                .requestMatchers("/enquiry/add").permitAll()
//
//	                // Admin (view, reply, delete)
//	                .requestMatchers("/enquiry/**").permitAll() 
//	                // (later you can change to hasRole("ADMIN"))
//
//	                // ================= AUTH =================
//	                .requestMatchers("/users/login", "/users/add").permitAll()
//
//	                // ================= EVERYTHING ELSE =================
//	                .anyRequest().authenticated()
//	            );
//
//	        // JWT filter
//	        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
//
//	        return http.build();
//	    }
//
//	    // ================= CORS CONFIG =================
//	    @Bean
//	    public CorsConfigurationSource corsConfigurationSource() {
//
//	        CorsConfiguration configuration = new CorsConfiguration();
//
//	        configuration.setAllowedOrigins(List.of("http://localhost:3000"));
//	        configuration.setAllowedMethods(List.of(
//	                "GET", "POST", "PUT", "DELETE", "OPTIONS"
//	        ));
//	        configuration.setAllowedHeaders(List.of("*"));
//	        configuration.setAllowCredentials(true);
//
//	        UrlBasedCorsConfigurationSource source =
//	                new UrlBasedCorsConfigurationSource();
//
//	        source.registerCorsConfiguration("/**", configuration);
//	        return source;
//	    }
//	}


	
//	@Configuration
//	public class SecurityConfig {
//
//	    @Autowired
//	    private JwtFilter jwtFilter;
//
//	    @Bean
//	    public BCryptPasswordEncoder passwordEncoder() {
//	        return new BCryptPasswordEncoder();
//	    }
//
//	    @Bean
//	    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//
//	        http
//	            .csrf(csrf -> csrf.disable())
//	            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
//	            .sessionManagement(session -> session
//	                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//
//	            .authorizeHttpRequests(auth -> auth
//	            		
//	            		
//	            		
//	            		// Public APIs
//		                .requestMatchers("/users/login", "/users/add","/forgot-password",
//		                        "/verify-otp",
//		                        "/reset-password").permitAll()
//	
//	
//	
//						
//
//	                // 🔥 VERY IMPORTANT
//	                .requestMatchers(org.springframework.http.HttpMethod.OPTIONS, "/**").permitAll()
//
//	                // ================= ENQUIRY =================
//	                .requestMatchers("/enquiry/add").permitAll()
//	                .requestMatchers("/enquiry/**").permitAll() // (for now)
//
//	                // ================= AUTH =================
//	                .requestMatchers("/users/login", "/users/add").permitAll()
//
//	                // ================= EVERYTHING ELSE =================
//	                .anyRequest().authenticated()
//	            );
//
//	        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
//	        return http.build();
//	    }
//
//	    @Bean
//	    public CorsConfigurationSource corsConfigurationSource() {
//	        CorsConfiguration configuration = new CorsConfiguration();
//	        configuration.setAllowedOrigins(List.of("http://localhost:3000"));
//	        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
//	        configuration.setAllowedHeaders(List.of("*"));
//	        configuration.setAllowCredentials(true);
//
//	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//	        source.registerCorsConfiguration("/**", configuration);
//	        return source;
//	    }
//	}

//
//package com.club.config;
//
//import com.club.security.JwtFilter;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//import org.springframework.web.cors.CorsConfigurationSource;
//
//import java.util.List;
//
//@Configuration
//public class SecurityConfig {
//
//    @Autowired
//    private JwtFilter jwtFilter;
//
//    @Bean
//    public BCryptPasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//
//        http
//            .csrf(csrf -> csrf.disable())
//            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
//            .sessionManagement(session -> session
//                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//
//            .authorizeHttpRequests(auth -> auth
//
//                // ================= CORS PREFLIGHT =================
//                .requestMatchers(org.springframework.http.HttpMethod.OPTIONS, "/**").permitAll()
//                
//             // Public APIs
//                .requestMatchers("/users/login", "/users/add","/forgot-password",
//                        "/verify-otp",
//                        "/reset-password").permitAll()
//
//                // ================= ENQUIRY =================
//                // Public (member form)
//                .requestMatchers("/enquiry/add").permitAll()
//
//                // Admin (view, reply, delete)
//                .requestMatchers("/enquiry/**").permitAll() 
//                // (later you can change to hasRole("ADMIN"))
//
//                // ================= AUTH =================
//                .requestMatchers("/users/login", "/users/add").permitAll()
//
//                // ================= EVERYTHING ELSE =================
//                .anyRequest().authenticated()
//            );
//
//        // JWT filter
//        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
//
//        return http.build();
//    }
//
//    // ================= CORS CONFIG =================
//    @Bean
//    public CorsConfigurationSource corsConfigurationSource() {
//
//        CorsConfiguration configuration = new CorsConfiguration();
//
//        configuration.setAllowedOrigins(List.of("http://localhost:3000"));
//        configuration.setAllowedMethods(List.of(
//                "GET", "POST", "PUT", "DELETE", "OPTIONS"
//        ));
//        configuration.setAllowedHeaders(List.of("*"));
//        configuration.setAllowCredentials(true);
//
//        UrlBasedCorsConfigurationSource source =
//                new UrlBasedCorsConfigurationSource();
//
//        source.registerCorsConfiguration("/**", configuration);
//        return source;
//    }
//}
//

//
//package com.club.config;
//
//import com.club.security.JwtFilter;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//import org.springframework.web.cors.CorsConfigurationSource;
//
//import java.util.List;
//
//@Configuration
//public class SecurityConfig {
//
//    @Autowired
//    private JwtFilter jwtFilter;
//
//    // Password encryption
//    @Bean
//    public BCryptPasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//
//    // Main security filter
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//
//        http
//            // Disable CSRF (JWT based)
//            .csrf(csrf -> csrf.disable())
//
//            // Enable CORS
//            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
//
//            // Stateless session
//            .sessionManagement(session -> session
//                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//
//            // Authorization rules
//            .authorizeHttpRequests(auth -> auth
//
//                // ================= CORS PREFLIGHT =================
//                .requestMatchers(org.springframework.http.HttpMethod.OPTIONS, "/**")
//                .permitAll()
//
//                // ================= PUBLIC APIs =================
//                .requestMatchers(
//                        "/users/login",
//                        "/users/add",
//                        "/forgot-password",
//                        "/verify-otp",
//                        "/reset-password",
//                        "/enquiry/add"
//                ).permitAll()
//
//                // ================= ADMIN ONLY =================
//                .requestMatchers("/api/admin/**")
//                .hasAnyRole("ADMIN", "SUPERADMIN")
//
//                // ================= TRAINER =================
//                .requestMatchers("/api/trainer/**")
//                .hasAnyRole("TRAINER", "ADMIN", "SUPERADMIN")
//
//                // ================= NUTRITIONIST =================
//                .requestMatchers("/api/nutrition/**")
//                .hasAnyRole("NUTRITIONIST", "ADMIN", "SUPERADMIN")
//
//                // ================= MEMBER =================
//                .requestMatchers("/api/member/**")
//                .hasAnyRole("MEMBER", "ADMIN", "SUPERADMIN")
//
//                // ================= EVERYTHING ELSE =================
//                .anyRequest().authenticated()
//            );
//
//        // JWT filter
//        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
//
//        return http.build();
//    }
//
//    // CORS configuration for React
//    @Bean
//    public CorsConfigurationSource corsConfigurationSource() {
//
//        CorsConfiguration configuration = new CorsConfiguration();
//
//        configuration.setAllowedOrigins(
//                List.of("http://localhost:3000")
//        );
//
//        configuration.setAllowedMethods(
//                List.of("GET", "POST", "PUT", "DELETE", "OPTIONS")
//        );
//
//        configuration.setAllowedHeaders(List.of("*"));
//        configuration.setAllowCredentials(true);
//
//        UrlBasedCorsConfigurationSource source =
//                new UrlBasedCorsConfigurationSource();
//
//        source.registerCorsConfiguration("/**", configuration);
//        return source;
//    }
//}



package com.club.config;

import com.club.security.JwtFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.web.cors.*;

import java.util.List;

@Configuration
public class SecurityConfig {

    @Autowired
    private JwtFilter jwtFilter;

    // Password encoder
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // Main security rules
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
            .csrf(csrf -> csrf.disable())           // JWT, so no CSRF
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))

            .authorizeHttpRequests(auth -> auth

                // Public routes (no login needed)
                .requestMatchers(
                        "/users/login",
                        "/users/add",
                        "/forgot-password",
                        "/verify-otp",
                        "/reset-password",
                        "/enquiry/add"
                ).permitAll()

                // Admin APIs
                .requestMatchers("/api/admin/**")
                .hasAnyRole("ADMIN", "SUPER_ADMIN")

                // Trainer APIs
                .requestMatchers("/api/trainer/**")
                .hasRole("TRAINER")

                // Nutritionist APIs
                .requestMatchers("/api/nutrition/**")
                .hasRole("NUTRITIONIST")

//                // Member APIs (ONLY members)
//                .requestMatchers("/api/member/**")
//                .hasRole("MEMBER")
                
                .requestMatchers("/api/member/**")
                .hasAnyRole("MEMBER", "ADMIN", "TRAINER", "NUTRITIONIST")


                // Everything else needs login
                .anyRequest().authenticated()
            );

        // Apply JWT filter
        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    // CORS for React frontend
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of("http://localhost:3000"));
        config.setAllowedMethods(List.of("GET","POST","PUT","DELETE","OPTIONS"));
        config.setAllowedHeaders(List.of("*"));
        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source =
                new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }
}

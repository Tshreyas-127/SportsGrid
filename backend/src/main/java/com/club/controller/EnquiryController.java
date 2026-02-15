//package com.club.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//import com.club.entity.Enquiry;
//import com.club.service.EnquiryService;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/enquiry")
//@CrossOrigin
//public class EnquiryController {
//
//    @Autowired
//    private EnquiryService service;
//
//    // Public API (Contact Us form)
//    @PostMapping("/add")
//    public Enquiry addEnquiry(@RequestBody Enquiry enquiry) {
//        return service.addEnquiry(enquiry);
//    }
//
//    // Admin API
//    @GetMapping("/all")
//    public List<Enquiry> getAll() {
//        return service.getAllEnquiries();
//    }
//}


//package com.club.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import com.club.entity.Enquiry;
//import com.club.service.EnquiryService;
//
//@RestController
//@RequestMapping("/api/enquiry")
//@CrossOrigin(
//    origins = "http://localhost:3000",
//    allowedHeaders = "*",
//    methods = {RequestMethod.POST, RequestMethod.OPTIONS}
//)
//public class EnquiryController {
//
//    @Autowired
//    private EnquiryService service;
//
//    // ✅ PUBLIC API (Contact Us form)
//    @PostMapping
//    public Enquiry addEnquiry(@RequestBody Enquiry enquiry) {
//        return service.addEnquiry(enquiry);
//    }
//}



package com.club.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.club.entity.Enquiry;
import com.club.service.EnquiryService;

import java.util.List;
import java.util.Map;

//@RestController
//@RequestMapping("/enquiry")
//@CrossOrigin
//public class EnquiryController {
//
//    @Autowired
//    private EnquiryService service;
//
//    // Public API (Contact Us form)
//    @PostMapping("/add")
//    public Enquiry addEnquiry(@RequestBody Enquiry enquiry) {
//        return service.addEnquiry(enquiry);
//    }
//
//    // Admin API
//    @GetMapping("/all")
//    public List<Enquiry> getAll() {
//        return service.getAllEnquiries();
//    }
//    
//    @PutMapping("/reply/{id}")
//    public Enquiry reply(@PathVariable Long id, @RequestBody Enquiry data) {
//        Enquiry e = service.getById(id);
//        e.setReply(data.getReply());
//        e.setStatus("READ");
//        return service.addEnquiry(e);
//    }
//    
//    @DeleteMapping("/delete/{id}")
//    public Map<String, String> delete(@PathVariable Long id) {
//        service.deleteEnquiry(id);
//        return Map.of("message", "Deleted successfully");
//    }
//
//
//}




@RestController
@RequestMapping("/enquiry")
@CrossOrigin(origins = "http://localhost:3000")
public class EnquiryController {

    @Autowired
    private EnquiryService service;

    // Add enquiry
    @PostMapping("/add")
    public Enquiry addEnquiry(@RequestBody Enquiry enquiry) {
        return service.addEnquiry(enquiry);
    }

    // Get all
    @GetMapping("/all")
    public List<Enquiry> getAll() {
        return service.getAllEnquiries();
    }

    // Reply (MATCHES REACT)
    @PostMapping("/{id}/reply")
    public Enquiry reply(@PathVariable Long id, @RequestBody Map<String,String> body) {
        return service.replyToEnquiry(id, body.get("reply"));
    }

    // Delete (MATCHES REACT)
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteEnquiry(id);
    }
}

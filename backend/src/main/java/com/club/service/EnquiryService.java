//package com.club.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import com.club.entity.Enquiry;
//import com.club.repository.EnquiryRepository;
//
//import java.util.List;
//
//@Service
//public class EnquiryService {
//
//    @Autowired
//    private EnquiryRepository repo;
//
//    public Enquiry addEnquiry(Enquiry enquiry) {
//        return repo.save(enquiry);
//    }
//
//    public List<Enquiry> getAllEnquiries() {
//        return repo.findAll();
//    }
//}
//


package com.club.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.club.entity.Enquiry;
import com.club.repository.EnquiryRepository;

import java.util.List;

@Service
public class EnquiryService {

    @Autowired
    private EnquiryRepository repo;

    // Add enquiry (member)
    public Enquiry addEnquiry(Enquiry enquiry) {
        return repo.save(enquiry);
    }

    // Get all (admin)
    public List<Enquiry> getAllEnquiries() {
        return repo.findAll();
    }

    // Get by id
    public Enquiry getById(Long id) {
        return repo.findById(id).orElseThrow();
    }

    // Reply (admin)
    public Enquiry replyToEnquiry(Long id, String reply) {
        Enquiry e = getById(id);
        e.setReply(reply);
        e.setStatus("READ");
        return repo.save(e);
    }

    // Delete (admin)
    public void deleteEnquiry(Long id) {
        repo.deleteById(id);
    }
}

package com.devsuperior.dsvendas.controllers;

import java.util.List;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.dto.SaleSuccessDTO;
import com.devsuperior.dsvendas.dto.SaleSumDTO;
import com.devsuperior.dsvendas.services.SaleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {

    @Autowired
    private SaleService service;

    @GetMapping
    public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable) {
        return ResponseEntity.ok(service.findAll(pageable));
    }

    @GetMapping(value = "/amountBySeller")
    public ResponseEntity<List<SaleSumDTO>> amountGroupedBySeller() {
        return ResponseEntity.ok(service.amountGroupedBySeller());
    }

    @GetMapping(value = "/successBySeller")
    public ResponseEntity<List<SaleSuccessDTO>> successGroupedBySeller() {
        return ResponseEntity.ok(service.successGroupedBySeller());
    }
}

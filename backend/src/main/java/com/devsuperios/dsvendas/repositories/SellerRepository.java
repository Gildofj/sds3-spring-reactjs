package com.devsuperios.dsvendas.repositories;

import com.devsuperios.dsvendas.entities.Seller;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}

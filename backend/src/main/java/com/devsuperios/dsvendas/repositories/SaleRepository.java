package com.devsuperios.dsvendas.repositories;

import java.util.List;

import com.devsuperios.dsvendas.dto.SaleSuccessDTO;
import com.devsuperios.dsvendas.dto.SaleSumDTO;
import com.devsuperios.dsvendas.entities.Sale;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface SaleRepository extends JpaRepository<Sale, Long> {

    @Query("SELECT new com.devsuperios.dsvendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount))"
            + "FROM Sale AS obj GROUP BY obj.seller")
    List<SaleSumDTO> amountGroupedBySeller();

    @Query("SELECT new com.devsuperios.dsvendas.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals))"
            + "FROM Sale AS obj GROUP BY obj.seller")
    List<SaleSuccessDTO> successGroupedBySeller();
}

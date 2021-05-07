package com.devsuperios.dsvendas.dto;

import com.devsuperios.dsvendas.entities.Seller;

public class SaleSumDTO {

    private String sellername;
    private Double sum;

    public SaleSumDTO() {

    }

    public SaleSumDTO(Seller seller, Double sum) {
        sellername = seller.getName();
        this.sum = sum;
    }

    public String getSellername() {
        return sellername;
    }

    public void setSellername(String sellername) {
        this.sellername = sellername;
    }

    public Double getSum() {
        return sum;
    }

    public void setSum(Double sum) {
        this.sum = sum;
    }
}

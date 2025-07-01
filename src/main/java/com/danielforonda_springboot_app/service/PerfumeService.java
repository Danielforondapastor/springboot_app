package com.danielforonda_springboot_app.service;

import com.danielforonda_springboot_app.model.Perfume;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PerfumeService {
    private final List<Perfume> perfumes = new ArrayList<>();

    @PostConstruct
    public void init() {
        perfumes.add(new Perfume(1, "Acqua di Gio", "Armani", "Fragancia fresca con notas marinas."));
        perfumes.add(new Perfume(2, "Bleu de Chanel", "Chanel", "Notas cítricas, amaderadas, elegantes."));
        perfumes.add(new Perfume(3, "Dior Sauvage", "Dior", "Aromática, intensa, con bergamota."));
    }
    
    public List<Perfume> getAll() {
        return perfumes;
    }

    public Perfume getById(int id) {
        return perfumes.stream().filter(p -> p.getId() == id).findFirst().orElse(null);
    }
}

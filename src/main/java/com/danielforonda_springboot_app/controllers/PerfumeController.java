package com.danielforonda_springboot_app.controllers;

import com.danielforonda_springboot_app.model.Perfume;
import com.danielforonda_springboot_app.service.PerfumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/perfumes")
public class PerfumeController {
    @Autowired
    private PerfumeService service;

    @GetMapping
    public List<Perfume> listar() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Perfume> detalle(@PathVariable int id) {
        Perfume perfume = service.getById(id);
        return perfume != null ? ResponseEntity.ok(perfume) : ResponseEntity.notFound().build();
    }

    @GetMapping("/recommend/{id}")
    public ResponseEntity<List<Perfume>> recomendar(@PathVariable int id) {
        // por ahora, devolver perfumes aleatorios o similares hardcodeados
        return ResponseEntity.ok(service.getAll().stream()
                .filter(p -> p.getId() != id).limit(3).toList());
    }
}

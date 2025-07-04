package com.azurian.webcrud.controller;

import com.azurian.webcrud.model.Entidad;
import com.azurian.webcrud.service.EntidadService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/entidades")
public class EntidadController {

    private final EntidadService service;

    public EntidadController(EntidadService service) {
        this.service = service;
    }

    @GetMapping
    public List<Entidad> listar() {
        return service.listar();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Entidad> obtener(@PathVariable Long id) {
        return ResponseEntity.ok(service.obtenerPorId(id));
    }

    @PostMapping
    public ResponseEntity<Entidad> crear(@RequestBody Entidad entidad) {
        return ResponseEntity.ok(service.guardar(entidad));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Entidad> actualizar(@PathVariable Long id, @RequestBody Entidad entidad) {
        return ResponseEntity.ok(service.actualizar(id, entidad));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        service.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}

package com.azurian.webcrud.service.impl;

import com.azurian.webcrud.model.Entidad;
import com.azurian.webcrud.repository.EntidadRepository;
import com.azurian.webcrud.service.EntidadService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EntidadServiceImpl implements EntidadService {

    private final EntidadRepository repository;

    public EntidadServiceImpl(EntidadRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Entidad> listar() {
        return repository.findAll();
    }

    @Override
    public Entidad obtenerPorId(Long id) {
        return repository.findById(id).orElseThrow(() -> new RuntimeException("Entidad no encontrada"));
    }

    @Override
    public Entidad guardar(Entidad entidad) {
        return repository.save(entidad);
    }

    @Override
    public Entidad actualizar(Long id, Entidad entidad) {
        Entidad existente = obtenerPorId(id);
        existente.setNombre(entidad.getNombre());
        existente.setDescripcion(entidad.getDescripcion());
        return repository.save(existente);
    }

    @Override
    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}
package com.azurian.webcrud.service;

import com.azurian.webcrud.model.Entidad;
import java.util.List;

public interface EntidadService {
    List<Entidad> listar();
    Entidad obtenerPorId(Long id);
    Entidad guardar(Entidad entidad);
    Entidad actualizar(Long id, Entidad entidad);
    void eliminar(Long id);
}

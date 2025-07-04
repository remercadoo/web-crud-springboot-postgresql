package com.azurian.webcrud.repository;

import com.azurian.webcrud.model.Entidad;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EntidadRepository extends JpaRepository<Entidad, Long> {
}
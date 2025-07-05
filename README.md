# Web CRUD con Spring Boot, PostgreSQL y Angular

Este proyecto es una prueba técnica que implementa un sistema CRUD (crear, leer, actualizar, eliminar) para una entidad genérica usando:

- **Backend**: Spring Boot + PostgreSQL
- **Frontend**: Angular
- **Contenedores**: Docker + Docker Compose

---

## 🧱 Estructura del Proyecto

```
src/
├── backend/         → Proyecto Spring Boot con acceso a PostgreSQL
├── frontend/        → Proyecto Angular
├── docker-compose.yml
```

---

## ▶️ Cómo ejecutar todo el ambiente

Desde la carpeta `src`, ejecutar:

```bash
docker compose up --build
```

Esto levantará:

- PostgreSQL (puerto **5432**)
- Backend Spring Boot (puerto **8080**)
- Frontend Angular con `ng serve` (puerto **4200**)

---

## 🌐 URLs de acceso

- **Frontend (Angular)**: http://localhost:4200  
  CRUD funcional para listar, crear y eliminar entidades.

- **Swagger API Docs (Spring Boot)**: http://localhost:8080/swagger-ui/index.html  
  Documentación y prueba interactiva de endpoints REST.

- **API Base**: http://localhost:8080/api/entidades  
  Endpoints CRUD disponibles desde el frontend.

---

## ⚙️ Requisitos previos

- Docker y Docker Compose instalados
- Puerto `5432`, `8080` y `4200` disponibles

---

## 📝 Mejoras posibles (no aplicadas en esta prueba técnica)

- Usar Nginx para servir Angular en producción (`ng build`)
- Manejo completo de errores en frontend
- Agregar autenticación JWT
- Implementar tests unitarios

---

## 🧹 Para limpiar los contenedores

```bash
docker compose down -v --remove-orphans
```

---

## 📄 Licencia

Uso libre para fines de evaluación técnica.

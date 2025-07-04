# Proyecto CRUD Spring Boot + Angular

Este proyecto es una **prueba técnica** simple de tipo CRUD, desarrollada con Java Spring Boot y Angular 17. Permite realizar operaciones básicas sobre una entidad genérica con persistencia en base de datos PostgreSQL.

## 🧱 Tecnologías Utilizadas

- **Backend:** Java 17, Spring Boot, Spring Data JPA, PostgreSQL
- **Frontend:** Angular 17 (con standalone components)
- **Base de Datos:** PostgreSQL (Docker)
- **Cliente DB:** PgAdmin
- **Documentación API:** Swagger UI

## ✅ Funcionalidades Implementadas

- Listado de entidades
- Creación de nuevas entidades
- Eliminación de entidades
- Comunicación efectiva entre frontend y backend
- Conexión con PostgreSQL usando JPA

## 🛠️ Instalación

### 1. Levantar PostgreSQL con Docker

```bash
docker compose up -d
```

### 2. Levantar Backend

```bash
cd backend/
./mvnw spring-boot:run
```

### 3. Levantar Frontend

```bash
cd frontend/
ng serve --port 4201
```

## 🌐 Endpoints Backend

- `GET /api/entidades`
- `POST /api/entidades`
- `DELETE /api/entidades/{id}`

## ⚠️ Puntos a Mejorar

- Agregar funcionalidad de **actualización (PUT)**.
- Mejorar validaciones de formularios.
- Separar vistas de listado y formulario mediante **Angular Router**.
- Mejorar estilos (Angular Material / Bootstrap).
- Manejo de errores más robusto en frontend.
- Agregar tests unitarios y de integración.

## 📌 Notas

Este proyecto fue desarrollado como parte de una prueba técnica y no está pensado como un producto final de producción.

---

© 2025 - Desarrollado por Roberto Mercado

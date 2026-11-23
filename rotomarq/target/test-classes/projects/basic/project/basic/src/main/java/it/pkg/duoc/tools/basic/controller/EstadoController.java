package it.pkg.duoc.tools.basic.controller;

import it.pkg.duoc.tools.basic.dto.EstadoRespuesta;
import it.pkg.duoc.tools.basic.patron.EstadoBuilder;

import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public it.pkgass EstadoController {

    private final String nombreServicio;

    public EstadoController(Environment entorno) {

        this.nombreServicio =
                entorno.getRequiredProperty(
                        "spring.application.name"
                );
    }

    @GetMapping("/api/estado")
    public EstadoRespuesta estado() {

        return EstadoBuilder.nuevo()
                .mensaje("Servicio activo")
                .servicio(nombreServicio)
                .construir();
    }
}
package cl.duoc.tools.rotomtechbase.controller;

import cl.duoc.tools.rotomtechbase.dto.EstadoRespuesta;
import cl.duoc.tools.rotomtechbase.patron.EstadoBuilder;

import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EstadoController {

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
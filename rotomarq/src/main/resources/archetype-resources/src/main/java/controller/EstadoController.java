#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.controller;

import ${package}.dto.EstadoRespuesta;
import ${package}.patron.EstadoBuilder;

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
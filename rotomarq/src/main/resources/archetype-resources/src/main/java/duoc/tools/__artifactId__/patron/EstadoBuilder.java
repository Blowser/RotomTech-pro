#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.duoc.tools.${artifactId}.patron;

import ${package}.duoc.tools.${artifactId}.dto.EstadoRespuesta;


public final ${package}ass EstadoBuilder {

    private String mensaje;
    private String servicio;

    private EstadoBuilder() {
    }

    public static EstadoBuilder nuevo() {
        return new EstadoBuilder();
    }

    public EstadoBuilder mensaje(String valor) {
        this.mensaje = valor;
        return this;
    }

    public EstadoBuilder servicio(String valor) {
        this.servicio = valor;
        return this;
    }

    public EstadoRespuesta construir() {

        if (mensaje == null || mensaje.isBlank()) {
            throw new IllegalStateException(
                    "El mensaje es obligatorio"
            );
        }

        if (servicio == null || servicio.isBlank()) {
            throw new IllegalStateException(
                    "El servicio es obligatorio"
            );
        }

        return new EstadoRespuesta(
                mensaje,
                servicio
        );
    }
}
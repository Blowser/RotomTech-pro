#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.duoc.tools.${artifactId}.dto;

public record EstadoRespuesta(
        String mensaje,
        String servicio
) {
}

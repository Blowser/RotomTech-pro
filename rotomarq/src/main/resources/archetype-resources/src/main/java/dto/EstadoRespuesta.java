#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.dto;

public record EstadoRespuesta(
        String mensaje,
        String servicio
) {
}

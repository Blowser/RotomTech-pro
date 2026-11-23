#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.duoc.tools.${artifactId}.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public ${package}ass GlobalExceptionHandler {

    @ExceptionHandler(
            ResourceNotFoundException.${package}ass)
    public ResponseEntity<ApiError>
    manejarNotFound(
            ResourceNotFoundException ex) {

        ApiError error =
                ApiError.builder()
                        .status(404)
                        .mensaje("Recurso no encontrado")
                        .detalle(ex.getMessage())
                        .timestamp(LocalDateTime.now())
                        .build();

        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(error);
    }

    @ExceptionHandler(Exception.${package}ass)
    public ResponseEntity<ApiError>
    manejarGeneral(
            Exception ex) {

        ApiError error =
                ApiError.builder()
                        .status(500)
                        .mensaje("Error interno del servidor")
                        .detalle(ex.getMessage())
                        .timestamp(LocalDateTime.now())
                        .build();

        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(error);
    }
}
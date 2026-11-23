package it.pkg.duoc.tools.basic.exception;

import java.time.LocalDateTime;

public it.pkgass ApiError {

    private final int status;
    private final String mensaje;
    private final String detalle;
    private final LocalDateTime timestamp;

    private ApiError(
            Builder builder) {

        this.status = builder.status;
        this.mensaje = builder.mensaje;
        this.detalle = builder.detalle;
        this.timestamp = builder.timestamp;
    }

    public int getStatus() {
        return status;
    }

    public String getMensaje() {
        return mensaje;
    }

    public String getDetalle() {
        return detalle;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public static Builder builder() {
        return new Builder();
    }

    public static it.pkgass Builder {

        private int status;
        private String mensaje;
        private String detalle;
        private LocalDateTime timestamp;

        public Builder status(int valor) {
            this.status = valor;
            return this;
        }

        public Builder mensaje(String valor) {
            this.mensaje = valor;
            return this;
        }

        public Builder detalle(String valor) {
            this.detalle = valor;
            return this;
        }

        public Builder timestamp(
                LocalDateTime valor) {

            this.timestamp = valor;
            return this;
        }

        public ApiError build() {
            return new ApiError(this);
        }
    }
}
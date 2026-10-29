# GEMA Campus

Plataforma de estudio (acceso con código por correo; contenido protegido en Supabase).
Este repositorio solo contiene la página pública de acceso. Se genera desde `curso-gema-mundial/v3/_build/build_plataforma.py`.

## Brókeres y capítulo práctico

`plataformas.html` desarrolla Webull, Robinhood y tastytrade, en ese orden. `brokers.js` centraliza los enlaces personales de referido de Alberto y `brokers.css` sus componentes. Se muestran en el acceso público, Inicio, la navegación y la Semana5.

Webull: enlace facilitado directamente por Alberto. Robinhood: enlace leído en su cuenta autenticada. El enlace de tastytrade sigue pendiente; no se publica un referido genérico en su lugar. Para incorporarlo, actualizar la entrada correspondiente en `brokers.js` después de verificar su procedencia.

Los enlaces de referido incluyen aviso del posible beneficio y atributos `sponsored noopener noreferrer`. La práctica educativa no exige abrir ni financiar una cuenta. No hay transacciones de bróker ni recogida de sus credenciales en esta web.

La plantilla privada del generador y los tres recursos públicos también están sincronizados en el proyecto original, para conservar la integración al regenerar. No añadir aquí lecciones JSON, entornos privados, datos de prueba ni archivos de construcción.

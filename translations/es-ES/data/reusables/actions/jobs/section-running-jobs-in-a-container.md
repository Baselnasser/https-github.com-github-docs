Utiliza `jobs.<job_id>.container` para crear un contenedor para ejecutar cualquier paso en un job que aún no especifique un contenedor. Si tienes pasos que usan tanto acciones de script como de contenedor, las acciones de contenedor se ejecutarán como contenedores hermanos en la misma red con los mismos montajes de volumen.

Si no configuras un `container`, todos los pasos se ejecutan directamente en el host especificado por `runs-on` a menos que un paso se refiera a una acción configurada para ejecutarse en un contenedor.

### Ejemplo: Ejecutar un job dentro de un contenedor

```yaml
jobs:
  my_job:
    container:
      image: node:14.16
      env:
        NODE_ENV: development
      ports:
        - 80
      volumes:
        - my_docker_volume:/volume_mount
      options: --cpus 1
```

Cuando solo especificas una imagen de contenedor, puedes omitir la palabra clave `image`.

```yaml
jobs:
  my_job:
    container: node:14.16
```

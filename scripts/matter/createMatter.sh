# validar que el gen no sea nulo
if [ -z "$1" ]; then
    echo "El gen de la materia no puede ser nulo"
    exit 1
fi

gen=$1
public=$2
source=$3
pages=$4
# Para crear el directorio y los archivos necesarios para la materia
mkdir $public/$gen
mkdir $source/$gen
contenido="{\"name\": \"$gen\"}"
echo $contenido >$source/$gen/index.json
mkdir $pages/$gen
# Mostrar si se completo el proceso, BONITO...
echo -e "
🚀Creando el directorio con el generador: ▶ $gen
- Se creó el directorio en pages: $(tput bold)$pages/$gen$(tput sgr0)
- Se creó el directorio en public: $(tput bold)$public/$gen$(tput sgr0)
- Se creó el directorio en source: $(tput bold)$source/$gen$(tput sgr0)
- Se creó un archivo json en source: $(tput bold)$source/$gen/index.json$(tput sgr0)
↪ $contenido
✅Se creó la materia: $(tput bold)$gen$(tput sgr0) correctamente.
"

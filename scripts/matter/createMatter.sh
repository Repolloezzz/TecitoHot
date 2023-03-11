# validar que el gen no sea nulo
if [ ! -n "$4" ] || [ $(expr length "$4") -le 2 ]; then
    echo "❓ El generador no es valido, debe tener al menos 3 caracteres."
    exit 0
fi

public=$1
source=$2

gen=$3

# Para crear el directorio y los archivos necesarios para la materia
mkdir $public/$gen
mkdir $source/$gen
contenido="{\"name\": \"$gen\"}"
echo $contenido >$source/$gen/index.json
# Mostrar si se completo el proceso, BONITO...
echo -e "
🚀Creando el directorio con el generador: ▶ $gen
- Se creó el directorio en public: $(tput bold)$public/$gen$(tput sgr0)
- Se creó el directorio en source: $(tput bold)$source/$gen$(tput sgr0)
- Se creó un archivo json en source: $(tput bold)$source/$gen/index.json$(tput sgr0)
↪ $contenido
✅Se creó la materia: $(tput bold)$gen$(tput sgr0) correctamente.
"

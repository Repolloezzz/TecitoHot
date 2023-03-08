# validar que el gen no sea nulo
if [ -z "$1" ] && [ -z "$2" ]; then
    echo "❓ El gen de la materia o tema no pueden ser nulo"
    exit 1
fi

gen_matter=$1
gen_theme=$2
public=$3
source=$4
pages=$5

if [ ! -f "$source/$gen_matter/index.json" ]; then
    echo "❓ El generador $gen_matter no existe o no es valido como materia"
    exit 0
fi

# Para crear el directorio y los archivos necesarios para la materia
mkdir $public/$gen_matter/$gen_theme
mkdir $source/$gen_matter/$gen_theme
contenido="{\"name\": \"$gen_theme\"}"
echo $contenido >$source/$gen_matter/$gen_theme/index.json
mkdir $pages/$gen_matter/$gen_theme
# Mostrar si se completo el proceso, BONITO...
echo -e "
🚀Creando el directorio con el generador: ▶ $gen_theme
- 🌐 Se creó el directorio en pages: $(tput bold)$pages/$gen_matter/$gen_theme$(tput sgr0)
- 🎴 Se creó el directorio en public: $(tput bold)$public/$gen_matter/$gen_theme$(tput sgr0)
- 📦 Se creó el directorio en source: $(tput bold)$source/$gen_matter/$gen_theme$(tput sgr0)
- 📜 Se creó un archivo json en source: $(tput bold)$source/$gen_matter/$gen_theme/index.json$(tput sgr0)
↪ $contenido
✅Se creó el tema: $(tput bold)$gen_theme en $gen_matter$(tput sgr0) correctamente.
"

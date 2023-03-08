# validar que el gen no sea nulo
if [ -z "$1" ] && [ -z "$2" ]; then
    echo "❓ El generador de la materia o tema no pueden ser nulo"
    exit 1
fi

gen_matter=$1
get_theme=$2
public=$3
source=$4
pages=$5
mensajes=("Se borró" "Se borró" "Se borró" "Se borraron todos" "✅Se borró")

if [ ! -f "$source/$gen_matter/index.json" ]; then
    echo "❓ El generador $gen_matter no existe o no es valido como materia"
    exit 0
fi

# Para intentar eliminar los directorios y archivos de la materia
if ! rm -r $public/$gen_matter/$gen_theme 2>/dev/null; then
    mensajes[0]="No se pudó borrar"
    mensajes[3]="No se pudó borrar todos"
    mensajes[4]="🟨No se pudó borrar"
fi
if ! rm -r $source/$gen_matter/$gen_theme 2>/dev/null; then
    mensajes[1]="No se pudó borrar"
    mensajes[4]="🟨No se pudó borrar"
fi
if ! rm -r $pages/$gen_matter/$gen_theme 2>/dev/null; then
    mensajes[2]="No se pudó borrar"
    mensajes[4]="🟨No se pudó borrar"
fi

echo -e "
🚀Borrando el directorio con el gen: ▶ $gen_theme de la materia $gen_matter
- ${mensajes[0]} el directorio en pages: $(tput bold)$pages/$gen_matter/$gen_theme$(tput sgr0)
- ${mensajes[1]} el directorio en public: $(tput bold)$public/$gen_matter/$gen_theme$(tput sgr0)
- ${mensajes[2]} el directorio en source: $(tput bold)$source/$gen_matter/$gen_theme$(tput sgr0)
- ${mensajes[3]} lo subdirectorios y archivos de el tema: $(tput bold)$gen_theme$(tput sgr0)
${mensajes[4]} el tema: $(tput bold)$gen_theme$(tput sgr0) correctamente.
"

# validar que el gen no sea nulo
if [ ! -n "$3" ] || [ $(expr length "$3") -le 2 ]; then
    echo "❓ El generador no es valido, debe tener al menos 3 caracteres."
    exit 1
fi

public=$1
source=$2

gen=$3

mensajes=("Se borró" "Se borró" "Se borró" "Se borraron todos" "✅Se borró")
# Para intentar eliminar los directorios y archivos de la materia
if ! rm -r $public/$gen 2>/dev/null; then
    mensajes[0]="No se pudó borrar"
    mensajes[4]="🟨No se pudó borrar"
    mensajes[3]="No se pudó borrar todos"
fi
if ! rm -r $source/$gen 2>/dev/null; then
    mensajes[1]="No se pudó borrar"
    mensajes[4]="🟨No se pudó borrar"
fi

echo -e "
🚀Borrando el directorio con el gen: ▶ $gen
- ${mensajes[1]} el directorio en public: $(tput bold)$public/$gen$(tput sgr0)
- ${mensajes[2]} el directorio en source: $(tput bold)$source/$gen$(tput sgr0)
- ${mensajes[3]} lo subdirectorios y archivos de la materia: $(tput bold)$gen$(tput sgr0)
${mensajes[4]} la materia: $(tput bold)$gen$(tput sgr0) correctamente.
"

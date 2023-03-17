# validar que el gen no sea nulo
if [ $(expr length "$4") -le 2 ] || [ ! -n "$4" ] || [ $(expr length "$3") -le 2 ] || [ ! -n "$3" ]; then
    echo "❓ El generador de la materia o tema no pueden ser nulo"
    exit 1
fi

public=$1
source=$2

gen_1=$3
gen_2=$4

mensajes=("Se borró" "Se borró" "Se borró" "Se borraron todos" "✅Se borró")

# Para validar que el generador de la materia o tema existe
if [ ! -f "$source/$gen_1/index.json" ]; then
    echo "❓ El generador $gen_1 no existe o no es valido como materia"
    exit 0
fi

if [ ! -f "$source/$gen_1/$gen_2/index.json" ]; then
    echo "❓ El generador $gen_2 no existe o no es valido como tema"
    exit 0
fi

# Para intentar eliminar los directorios y archivos de la materia
if ! rm -r $public/$gen_1/$gen_2 2>/dev/null; then
    mensajes[0]="No se pudó borrar"
    mensajes[3]="No se pudó borrar todos"
    mensajes[4]="🟨No se pudó borrar"
fi
if ! rm -r $source/$gen_1/$gen_2 2>/dev/null; then
    mensajes[1]="No se pudó borrar"
    mensajes[4]="🟨No se pudó borrar"
fi

echo -e "
🚀Borrando el directorio con el gen: ▶ $gen_2 de la materia $gen_1
- ${mensajes[1]} el directorio en public: $(tput bold)$public/$gen_1/$gen_2$(tput sgr0)
- ${mensajes[2]} el directorio en source: $(tput bold)$source/$gen_1/$gen_2$(tput sgr0)
- ${mensajes[3]} lo subdirectorios y archivos de el tema: $(tput bold)$gen_2$(tput sgr0)
${mensajes[4]} el tema: $(tput bold)$gen_2$(tput sgr0) correctamente.
"

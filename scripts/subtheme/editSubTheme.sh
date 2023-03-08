# validar que el generador no sea nulo
if [ ! -n "$5" ] || [ $(expr length "$5") -le 2 ] || [ ! -n "$6" ] || [ $(expr length "$6") -le 2 ] || [ ! -n "$7" ] || [ $(expr length "$7") -le 2 ]; then
    echo "❓ El generador no es valido, debe tener al menos 3 caracteres."
    exit 0
fi

public=$1
source=$2
pages=$3

gen_1=$4
gen_2=$5
gen_3=$6
gen_4=$7

if [ ! -f "$source/$gen_1/index.json" ]; then
    echo "❓ El generador $gen_1 no existe o no es valido como materia"
    echo "$source/$gen_1/index.json no existe"
    exit 0
fi

if [ ! -f "$source/$gen_1/$gen_2/index.json" ]; then
    echo "❓ El generador $gen_2 no existe o no es valido como tema"
    echo "$source/$gen_1/$gen_2/index.json no existe"
    exit 0
fi

if [ ! -f "$source/$gen_1/$gen_2/$gen_3/index.json" ]; then
    echo "❓ El generador $gen_3 no existe o no es valido como subtema"
    echo "$source/$gen_1/$gen_2/$gen_3/index.json no existe"
    exit 0
fi

mensajes=("Se editó" "Se editó" "Se editó" "✅Se editó")
# Para intentar editar los directorios y archivos de la materia
if ! mv -i $public/$gen_1/$gen_2/$gen_3 $public/$gen_1/$gen_2/$gen_4 2>/dev/null; then
    mensajes[0]="No se pudó editar"
    mensajes[3]="🟨No se pudó editar todos los archivos de"
fi
if ! mv -i $source/$gen_1/$gen_2/$gen_3 $source/$gen_1/$gen_2/$gen_4 2>/dev/null; then
    mensajes[1]="No se pudó editar"
fi
if ! mv -i $pages/$gen_1/$gen_2/$gen_3 $pages/$gen_1/$gen_2/$gen_4 2>/dev/null; then
    mensajes[2]="No se pudó editar"
fi

echo -e "
🚀Editando el directorio con el generador: ▶ $gen_3 de el tema $gen_2 de la materia $gen_1
- ${mensajes[0]} el directorio en pages: $(tput bold)$pages/$gen_1/$gen_2/$gen_3$(tput sgr0)
- ${mensajes[1]} el directorio en public: $(tput bold)$public/$gen_1/$gen_2/$gen_3$(tput sgr0)
- ${mensajes[2]} directorio en source: $(tput bold)$source/$gen_1/$gen_2/$gen_3$(tput sgr0)
${mensajes[3]} el subtema : $(tput bold)$gen_3$(tput sgr0) -> $(tput bold)$gen_4$(tput sgr0) correctamente.
"

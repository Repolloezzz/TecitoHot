# validar que el generador no sea nulo
if [ ! -n "$4" ] || [ $(expr length "$4") -le 2 ]; then
    echo "❓ El generador no es valido, debe tener al menos 3 caracteres."
    exit 0
fi

public=$1
source=$2
pages=$3

gen_1=$4
gen_2=$5

mensajes=("Se editó" "Se editó" "Se editó" "✅Se editó")
# Para intentar editar los directorios y archivos de la materia
if ! mv -i $public/$gen_1 $public/$gen_2 2>/dev/null; then
    mensajes[0]="No se pudó editar"
    mensajes[3]="🟨No se pudó editar todos los archivos de"
fi
if ! mv -i $source/$gen_1 $source/$gen_2 2>/dev/null; then
    mensajes[1]="No se pudó editar"
fi
if ! mv -i $pages/$gen_1 $pages/$gen_2 2>/dev/null; then
    mensajes[2]="No se pudó editar"
fi

echo -e "
🚀Editando el directorio con el generador: ▶ $gen_1
- ${mensajes[0]} el directorio en pages: $(tput bold)$pages/$gen_2$(tput sgr0)
- ${mensajes[1]} el directorio en public: $(tput bold)$public/$gen_2$(tput sgr0)
- ${mensajes[2]} directorio en source: $(tput bold)$source/$gen_2$(tput sgr0)
${mensajes[3]} la materia: $(tput bold)$gen_1$(tput sgr0) -> $(tput bold)$gen_2$(tput sgr0) correctamente.
"

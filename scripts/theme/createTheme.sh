# validar que el gen no sea nulo
if [ ! -n "$4" ] || [ $(expr length "$4") -le 2 ] || [ ! -n "$5" ] || [ $(expr length "$5") -le 2 ]; then
    echo "❓ El generador no es valido, debe tener al menos 3 caracteres."
    exit 0
fi

public=$1
source=$2
pages=$3

gen_1=$4
gen_2=$5

if [ ! -f "$source/$gen_1/index.json" ]; then
    echo "❓ El generador $gen_1 no existe o no es valido como materia"
    exit 0
fi

# Para crear el directorio y los archivos necesarios para la materia
mkdir $public/$gen_1/$gen_2
mkdir $source/$gen_1/$gen_2
contenido="{\"name\": \"$gen_2\"}"
echo $contenido >$source/$gen_1/$gen_2/index.json
mkdir $pages/$gen_1/$gen_2
# Mostrar si se completo el proceso, BONITO...
echo -e "
🚀Creando el directorio con el generador: ▶ $gen_2
- 🌐 Se creó el directorio en pages: $(tput bold)$pages/$gen_1/$gen_2$(tput sgr0)
- 🎴 Se creó el directorio en public: $(tput bold)$public/$gen_1/$gen_2$(tput sgr0)
- 📦 Se creó el directorio en source: $(tput bold)$source/$gen_1/$gen_2$(tput sgr0)
- 📜 Se creó un archivo json en source: $(tput bold)$source/$gen_1/$gen_2/index.json$(tput sgr0)
↪ $contenido
✅Se creó el tema: $(tput bold)$gen_2 en $gen_1$(tput sgr0) correctamente.
"

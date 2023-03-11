# validar que el gen no sea nulo
if [ ! -n "$4" ] || [ $(expr length "$4") -le 2 ] || [ ! -n "$5" ] || [ $(expr length "$5") -le 2 ] || [ ! -n "$6" ] || [ $(expr length "$6") -le 2 ]; then
    echo "❓ El generador no es valido, debe tener al menos 3 caracteres."
    exit 0
fi

public=$1
source=$2

gen_1=$3
gen_2=$4
gen_3=$5

if [ ! -f "$source/$gen_1/index.json" ]; then
    echo "❓ El generador $gen_1 no existe o no es valido como materia"
    exit 0
fi
if [ ! -f "$source/$gen_1/$gen_2/index.json" ]; then
    echo "❓ El generador $gen_2 no existe o no es valido como tema"
    exit 0
fi

# Para crear el directorio y los archivos necesarios para la materia
mkdir $public/$gen_1/$gen_2/$gen_3
mkdir $source/$gen_1/$gen_2/$gen_3
contenido="{\"name\": \"$gen_3\"}"
echo $contenido >$source/$gen_1/$gen_2/$gen_3/index.json
# Mostrar si se completo el proceso, BONITO...
echo -e "
🚀Creando el directorio con el generador: ▶ $gen_3
- 🎴 Se creó el directorio en public: $(tput bold)$public/$gen_1/$gen_2/$gen_3$(tput sgr0)
- 📦 Se creó el directorio en source: $(tput bold)$source/$gen_1/$gen_2/$gen_3$(tput sgr0)
- 📜 Se creó un archivo json en source: $(tput bold)$source/$gen_1/$gen_2/$gen_3/index.json$(tput sgr0)
↪ $contenido
✅Se creó el subtema: $(tput bold)$gen_3 en $gen_2 de $gen_1$(tput sgr0) correctamente.
"

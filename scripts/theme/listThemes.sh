if [ $(expr length "$4") -le 2 ] || [ ! -n "$4" ]; then
    echo "❓ El generador de la materia no puede ser nulo"
    exit 1
fi

public=$1
source=$2

gen=$3

if [ ! -f "$source/$gen/index.json" ]; then
    echo "❓ El generador $gen no existe o no es valido como materia"
    echo "$source/$gen/index.json no existe"
    exit 0
fi

themes=()

directorio_encontrado=$(find $source/$gen -maxdepth 2 -name "index.json" -printf '%h\n' | sort -u)
for dir in $directorio_encontrado; do
    themes+=($(basename $dir))
done

# Para quitar a la misma materia de la lista, ya que nada que ver aqui
unset "themes[0]"
themes=(${themes[@]})

echo "🔰 La materia $gen tiene los siguientes temas:"
printf "\033[1m| %-7s | %-7s | %-7s | %-20s |\033[0m\n" "Markdown" "Public" "Pages" "Generador"
for theme in ${themes[@]}; do
    opts=("✅" "❌" "🔰")
    if [ -d $public/$gen/$theme ]; then
        opts[1]="✅"
    fi
    printf "| %-9s | %-8s | %-8s | %-20s |\n" "${opts[0]}" "${opts[1]}" "${opts[2]}" "$theme"
done

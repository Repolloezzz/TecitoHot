if [ $(expr length "$4") -le 2 ] || [ ! -n "$4" ] || [ $(expr length "$3") -le 2 ] || [ ! -n "$3" ]; then
    echo "❓ El generador de la materia no puede ser nulo"
    exit 1
fi

public=$1
source=$2

gen_1=$3
gen_2=$4

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

subsubthemes=()
directorio_encontrado=$(find $source/$gen_1/$gen_2 -maxdepth 2 -name "index.json" -printf '%h\n' | sort -u)
for dir in $directorio_encontrado; do
    subsubthemes+=($(basename $dir))
done

# Para quitar a la misma materia de la lista, ya que nada que ver aqui
unset "subsubthemes[0]"
subsubthemes=(${subsubthemes[@]})

echo "🔰 La materia $gen_1 tiene los siguientes temas:"
printf "\033[1m| %-7s | %-7s | %-7s | %-20s |\033[0m\n" "Markdown" "Public" "Pages" "Generador"
for subtheme in ${subsubthemes[@]}; do
    opts=("✅" "❌" "🔰")
    if [ -d $public/$gen_1/$gen_2/$subtheme ]; then
        opts[1]="✅"
    fi
    printf "| %-9s | %-8s | %-8s | %-20s |\n" "${opts[0]}" "${opts[1]}" "${opts[2]}" "$subtheme"
done

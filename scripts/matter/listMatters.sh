public=$1
source=$2
pages=$3

matters=()
directorio_encontrado=$(find markdown -maxdepth 2 -name "index.json" -printf '%h\n' | sort -u)
for dir in $directorio_encontrado; do
    matters+=($(basename $dir))
done

printf "\033[1m| %-7s | %-7s | %-7s | %-20s |\033[0m\n" "Markdown" "Public" "Pages" "Generador"
for matter in ${matters[@]}; do
    opts=("✅" "❌" "❌")
    if [ -d $public/$matter ]; then
        opts[1]="✅"
    fi
    if [ -d $pages/$matter ]; then
        opts[2]="✅"
    fi
    printf "| %-9s | %-8s | %-8s | %-20s |\n" "${opts[0]}" "${opts[1]}" "${opts[2]}" "$matter"
done

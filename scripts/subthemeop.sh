# rutas absolutas del proyecto donde se generan las materias
public="public/matters"
source="markdown"
pages="pages/matters"

while getopts "hm:cm:rm:em:lm" opt; do
    case ${opt} in
    h)
        echo -e "🎈 Opciones que puedes ejecutar con $(tput bold)st$(tput sgr0):
    ▶ -h: muestra la ayuda del script con todas las opciones disponibles.
    ▶ -c: crea un nuevo tema con el nombre que se le pase como parametro
          ↪[gen_1] [gen_2] [gen_3]: nombres de los generadores donde: Materia > Tema > Subtema
          Para el que se crea el subtema.
    ▶ -r: elimina un tema con el nombre que se le pase como parametro de  una materia
          ↪[gen_1] [gen_2] [gen_3]: generadores donde: Materia > Tema > Subtema
            Para el cual se elimina el subtema.
    ▶ -e: edita una materia con el nombre que se le pase como parametro
          ↪[gen_1] [gen_2] [gen_3] [gen_4]: generadores donde:
            Materia > Tema > Subtema newGen; Cambia el nombre de un subtema.
            que se quiere editar y gen_3 es el nuevo nombre que se le quiere dar.
    ▶ -l: [gen_1] [gen_2] lista todas los subtemas que se encuentran en un tema de una materia."
        exit 0
        ;;
    c)
        # Para crear una nueva materia
        source scripts/subtheme/createSubTheme.sh $public $source $pages $2 $3 $4
        ;;
    r)
        # Para borrar una materia
        source scripts/subtheme/removeSubTheme.sh $public $source $pages $2 $3 $4
        ;;
    e)
        # Para editar una materia
        source scripts/subtheme/editSubTheme.sh $public $source $pages $2 $3 $4 $5
        ;;
    l)
        # Para listar todas las materias
        source scripts/subtheme/listSubThemes.sh $public $source $pages $2 $3
        ;;
    \?)
        echo "Opción inválida: -$OPTARG" >&2
        exit 1
        ;;
    esac
done
echo "💬 Para más información ejecuta el script con la opción -h"

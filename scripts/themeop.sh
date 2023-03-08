# rutas absolutas del proyecto donde se generan las materias
public="public/matters"
source="markdown"
pages="pages/matters"

while getopts "hm:cm:rm:em:lm" opt; do
    case ${opt} in
    h)
        echo -e "🎈 Opciones que puedes ejecutar con $(tput bold)matterop$(tput sgr0):
    ▶ -h: muestra la ayuda del script con todas las opciones disponibles.
    ▶ -c: crea un nuevo tema con el nombre que se le pase como parametro
          ↪[gen_1] [gen_2]: generador de la materia en la que se crea, generador del tema.
    ▶ -r: elimina un tema con el nombre que se le pase como parametro de  una materia
          ↪[gen_1] [gen_2]: generador de la materia, generador del tema al que se quiere borrar.
    ▶ -e: edita una materia con el nombre que se le pase como parametro
          ↪[gen_1] [gen_2] [gen_3]: generador de la materia, generador del tema
            que se quiere editar y gen_3 es el nuevo nombre que se le quiere dar.
    ▶ -l: [gen] lista todas los temas que se encuentran en una materia."
        exit 0
        ;;
    c)
        # Para crear una nueva materia
        source scripts/theme/createTheme.sh $2 $3 $public $source $pages
        ;;
    r)
        # Para borrar una materia
        source scripts/matter/removeMatter.sh $2 $3 $public $source $pages
        ;;
    e)
        # Para editar una materia
        source scripts/matter/editMatter.sh $2 $3 $4 $public $source $pages
        ;;
    l)
        # Para listar todas las materias
        source scripts/matter/listMatters.sh $2 $public $source $pages
        ;;
    \?)
        echo "Opción inválida: -$OPTARG" >&2
        exit 1
        ;;
    esac
done
echo "💬 Para más información ejecuta el script con la opción -h"

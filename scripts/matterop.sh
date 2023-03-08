# rutas absolutas del proyecto donde se generan las materias
public="public/matters"
source="markdown"
pages="pages/matters"

while getopts "hm:cm:rm:em:lm" opt; do
    case ${opt} in
    h)
        echo -e "🎈 Opciones que puedes ejecutar con $(tput bold)mt$(tput sgr0):
    ▶ -h: muestra la ayuda del script con todas las opciones disponibles.
    ▶ -c: crea una nueva materia con el nombre que se le pase como parametro
          ↪[gen]: nombre con el que se genera el directorio de la materia.
    ▶ -r: elimina una materia con el nombre que se le pase como parametro
          ↪[gen]: generador de la materia que se quiere eliminar.
    ▶ -e: edita una materia con el nombre que se le pase como parametro
          ↪[gen_1] [gen_2]: gen_1 es el generador de la materia
            que se quiere editar y gen_2 es el nuevo nombre que se le quiere dar.
    ▶ -l: lista todas las materias que se encuentran en el directorio markdown."
        exit 0
        ;;
    c)
        # Para crear una nueva materia
        source scripts/matter/createMatter.sh $public $source $pages $2
        ;;
    r)
        # Para borrar una materia
        source scripts/matter/removeMatter.sh $public $source $pages $2
        ;;
    e)
        # Para editar una materia
        source scripts/matter/editMatter.sh $public $source $pages $2 $3
        ;;
    l)
        # Para listar todas las materias
        source scripts/matter/listMatters.sh $public $source $pages
        ;;
    \?)
        echo "Opción inválida: -$OPTARG" >&2
        exit 1
        ;;
    esac
done
echo "💬 Para más información ejecuta el script con la opción -h"

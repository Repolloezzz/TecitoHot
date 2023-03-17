import type { SubTheme, Content } from '@/data/DataTypes'
import { Sep } from './General'
import Link from 'next/link'
import { PixelIcons } from '../global/Icons'

interface context {
  genSubTheme: string
  genContent?: string | null
  subthemes: SubTheme[]
  content?: Content[]
}

interface buttonExist {
  name: string
  url: string
  exist: boolean
  type: boolean
}

const PaginationSub = ({
  genSubTheme,
  genContent = null,
  subthemes,
  content = [],
}: context) => {
  let index1
  let index2
  // Para validar si es que existen los botones
  let left: buttonExist = { name: '', url: '', exist: false, type: false }
  let right: buttonExist = { name: '', url: '', exist: false, type: false }
  // Obtener links para mostrar en la pagina

  index1 = subthemes.findIndex((sub) => sub.gen == genSubTheme) ?? -1
  index2 = content.findIndex((cont) => cont.gen == genContent) ?? -1

  if (index2 > 0) {
    left = {
      name: content[index2 - 1].name,
      url: content[index2 - 1].url,
      exist: true,
      type: false,
    }
  } else if (index2 != -1) {
    left = {
      name: subthemes[index1].name,
      url: subthemes[index1].url,
      exist: true,
      type: true,
    }
  } else if (index1 > 0) {
    left = {
      name: subthemes[index1 - 1].name,
      url: subthemes[index1 - 1].url,
      exist: true,
      type: true,
    }
  }

  if (index2 < content.length - 1) {
    right = {
      name: content[index2 + 1].name,
      url: content[index2 + 1].url,
      exist: true,
      type: false,
    }
  } else if (index1 < subthemes.length - 1) {
    right = {
      name: subthemes[index1 + 1].name,
      url: subthemes[index1 + 1].url,
      exist: true,
      type: true,
    }
  }

  return (
    <>
      <Sep />
      <div className="btn-group grid grid-cols-2 font-vt323">
        <Link
          href={left.exist ? left.url : '#'}
          className={`btn text-sm md:text-lg lg:text-xl flex items-center ${
            left.exist ? '' : 'btn-disabled'
          } ${left.type ? 'btn-primary' : 'btn-outline'}`}
        >
          <PixelIcons name="chevron-left" className="w-3 h-3 md:w-6 md:h-6" />
          {!left.type ? 'Contenido anterior' : 'Subtema anterior'}
        </Link>
        <Link
          href={right.exist ? right.url : '#'}
          className={`btn btn-outline text-sm md:text-lg lg:text-xl ${
            right.exist ? '' : 'btn-disabled'
          } ${right.type ? 'btn-primary' : 'btn-outline'}`}
        >
          {!right.type ? 'Siguiente contenido' : 'Siguiente Subtema'}
          <PixelIcons name="chevron-right" className="w-3 h-3 md:w-6 md:h-6" />
        </Link>
      </div>
    </>
  )
}

export default PaginationSub

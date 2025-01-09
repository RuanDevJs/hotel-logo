'use client'

import { addLocale, locale } from "primereact/api"
import { ptBR } from "@/app/styles/locale"

addLocale('pt', { ...ptBR })
locale('pt')

export default function Locale({ children }: React.PropsWithChildren) {
  return (
    <div>
      {children}
    </div>
  )
}

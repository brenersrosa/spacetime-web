import Link from 'next/link'
import Balance from 'react-wrap-balancer'

export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="w-full max-w-[360px] text-center leading-relaxed">
        <Balance>
          Você ainda não registrou nenhuma lembrança, comece a{' '}
          <Link
            href="/"
            className="underline transition-colors hover:text-gray-50"
          >
            criar agora
          </Link>
          !
        </Balance>
      </p>
    </div>
  )
}

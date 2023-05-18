import Link from 'next/link'

export function Copyright() {
  return (
    <div className="text-sm leading-relaxed text-gray-200">
      Feito com 💜 no NLW da{' '}
      <Link
        href="https://rocketseat.com.br"
        rel="noreferrer"
        target="_blank"
        className="underline transition-colors hover:text-gray-100"
      >
        Rocketseat
      </Link>
    </div>
  )
}

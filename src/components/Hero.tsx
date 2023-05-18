import Image from 'next/image'
import Link from 'next/link'
import Balance from 'react-wrap-balancer'

import spacetimeLogo from '../assets/nwl-spacetime-logo.svg'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={spacetimeLogo} alt="NLW Spacetime logo" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          <Balance>
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Balance>
        </p>
      </div>
      <Link
        href="/"
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-600"
      >
        Cadastrar lembrança
      </Link>
    </div>
  )
}

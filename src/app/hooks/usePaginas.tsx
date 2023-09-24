import { useRouter } from 'next/navigation'

function useRota(rota:string) {
    const { push } = useRouter();
    const roteamento = () => push(rota);
    return roteamento
  }


  function RotaLanding() {
    return useRota("/Paginas/Landing")
  }

  export {
    RotaLanding
  }
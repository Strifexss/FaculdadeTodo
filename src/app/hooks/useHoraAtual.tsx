export default function useHoraAtual() {
    const agora = new Date();
    const horaAtual = agora.getHours();
  
    return horaAtual
}
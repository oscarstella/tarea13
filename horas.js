function minutos(a = 0) {
  const minsRestantes = a % 60;
  const horas = (a - minsRestantes) / 60;
  
  return `${horas} hora(s) y ${minsRestantes} minuto(s)`;
}

console.log(minutos(130)); 
let moradores = {
    blocoUm: [
      {
        nome: 'Luíza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

console.log(`O morador do bloco 2 de nome ${moradores.blocoDois[1].nome} ${moradores.blocoDois[1].sobrenome} mora no ${moradores.blocoDois[1].andar}° andar, apartamento ${moradores.blocoDois[1].apartamento}`)

for (let index = 0; index < moradores.blocoUm.length; index += 1) {
  console.log(`${moradores.blocoUm[index].nome} ${moradores.blocoUm[index].sobrenome} mora no bloco 1`) 
}

for (let index = 0; index < moradores.blocoDois.length; index += 1) {
    console.log(`${moradores.blocoDois[index].nome} ${moradores.blocoDois[index].sobrenome} mora no bloco 2`) 
  }
import Knex from 'knex'

export async function seed(knex:Knex){

    await knex('items').insert([
        {title :'lampadas', image: 'lampadas.svg'},
        {title :'Pilhas e Baterias', image: 'baterias.svg'},
        {title :'Papeis e Papelão', image: 'papeis-papelao.svg'},
        {title :'Residuos eletronicos', image: 'eletronicos.svg'},
        {title :'Residuos Organicos', image: 'organicos.svg'},
        {title :'Óleo de Cozinha', image: 'oleo.svg'}
    ])

}
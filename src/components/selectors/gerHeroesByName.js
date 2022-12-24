import { heroes } from "../data/heroes";

const getHeroesByName = (name = '') => {
    if( naame === '') return [];
    name = name.toLocaleLowerCase();
    heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes(name) )
}

// toLocaleLowerCase para pasar tod a minusculas 

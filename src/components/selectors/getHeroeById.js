import { heroes } from "../data/heroes"


export const getHeroesByPublisher = (id) => {
    return heroes.find( hero => hero.id === id)
}

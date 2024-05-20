
// Crea un componente chiamato Color che riceve un oggetto chiamato "color" come oggetto di scena, che avrà 2 proprietà, "id" e "name" e restituisce un tag "li" che visualizza la proprietà "name". Crea un secondo componente chiamato Colors, che prende una serie di oggetti come supporto, dove le proprietà sono sempre "name" e "id" e visualizza un elenco non ordinato di componenti Color.
function Colors({item}) {
    return (
        <li>{item.name}</li>
    )
}

export function Color({color}) {
    return (
        <ul>
            {color.map((item)=> (
              <Colors item={item} key={item.id}/>
            ))}
        </ul>
    )
}
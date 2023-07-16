import {useEffect,useState} from  "react";
import Figure from 'react-bootstrap/Figure';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getPokemons } from "../controller/getpokemon";
import { Pokemon } from "../models/pokemon.m";

const Listado=()=>{

    const [pokemons,setPokemons] = useState<Pokemon[]>([]);
    const [query,setQuery] = useState("");

    useEffect(()=>{
        const ObtenerTodos = async() =>{
            const allPokemons = await getPokemons();
            setPokemons(allPokemons);
        }
        ObtenerTodos();
    });

    const filtrarpokemon=pokemons?.slice(0,807).filter((pokemon)=>{
        return pokemon.name.toLowerCase().match(query.toLocaleLowerCase());
    })

    return(
        <>
             <h1> Harom codec</h1>
             <header>
                 <head>
                 <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1346417359009807"
     crossorigin="anonymous"></script>
                 </head>
                <input
                value={query}
                placeholder="Buscar Pokemon"
                onChange={(event) => setQuery(event.target.value.trim())}
                type="text"
                />
             </header>

             <div className="content-wrapper">
                <div className="content">
                    <div className="row gap-3">

                        {filtrarpokemon?.slice(0,807).map((pokemon)=>(
                                <Card className="mx-auto" style={{ width: '18rem' }}>
                                <Card.Header><b>TIPO: </b>{pokemon.type}</Card.Header>
                                <Card.Img width="80" height="80" variant="top" src={pokemon.imggif} className="d-block mx-auto                    w-50" />
                                <Card.Body>
                                      <Card.Title className="text-center">{pokemon.id} - {pokemon.name}</Card.Title>
                                      <ListGroup>
                                      <ListGroup.Item>      
                                            <Figure.Image
                                              width={16}
                                              height={16}
                                              src="https://cdn-icons-png.flaticon.com/128/833/833472.png"
                                            /><b> HP:</b> {pokemon.hp} 
                                      </ListGroup.Item>
                                      <ListGroup.Item>                                            <Figure.Image
                                              width={16}
                                              height={16}
                                              alt="10x10"
                                              src="https://cdn-icons-png.flaticon.com/128/834/834240.png"
                                            /><b> ATAQUE:</b> {pokemon.attack}
                                            </ListGroup.Item>
                                      <ListGroup.Item>                                            <Figure.Image
                                              width={16}
                                              height={16}
                                              src="https://cdn-icons-png.flaticon.com/128/1392/1392113.png"
                                            /><b> DEFENSA:</b> {pokemon.defense} </ListGroup.Item>
                                      <ListGroup.Item>                                            <Figure.Image
                                              width={16}
                                              height={16}
                                              src="https://cdn-icons-png.flaticon.com/128/297/297837.png"
                                            /><b> E. ATAQUE:</b> {pokemon.sp_atk} </ListGroup.Item>
                                      <ListGroup.Item>                                            <Figure.Image
                                              width={16}
                                              height={16}
                                              src="https://cdn-icons-png.flaticon.com/128/1392/1392113.png"
                                            /><b> E. DEFENSA:</b> {pokemon.sp_def} </ListGroup.Item>
                                      <ListGroup.Item>                                            <Figure.Image
                                              width={16}
                                              height={16}
                                              src="https://cdn-icons-png.flaticon.com/128/252/252590.png"
                                            /><b> VELOCIDAD:</b> {pokemon.speed} </ListGroup.Item>
                                       </ListGroup>
                                </Card.Body>
                                </Card>
                                ))}
                    </div>
                </div>
             </div>
        </>
    )
}

export default Listado;

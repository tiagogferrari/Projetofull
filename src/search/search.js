import { createContext, useState } from "react";

export const SearchContext = createContext()

//Cria um componente que aceita componentes filhos 
export const SearchProvider = ({ children }) => {
    //Cria dois estados e uma função para atualizar cada estado
    const [animesinfo, setInfoAnime] = useState([])
    const [animeselected, setAnimeselected] = useState([])

    // Função para atualizar o estado animesinfo.
    const setInfo = (data) => {
        setInfoAnime(data)
    }

    const setSelected = (data) => {
        setAnimeselected(data)
    }

    //Cria uma função para buscar dados na API
    const search = (searchText) => {
        return fetch(`http://localhost:3000/anime/anime/${encodeURIComponent(searchText)}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    //'Authorization': 'Bearer'
                }
            }
        ).then((response) => response.json())
            .catch((error) => {
                console.error('Erro na requisição:', error);
            });
    };

    //Retorna o componente que faz com que o valor do contexto esteja disponível para os childrens
    return (
        <SearchContext.Provider
            //passa como value um objeto com os estados e funções
            value={{
                search,
                animesinfo,
                setInfo,
                animeselected,
                setSelected,
            }}
        >
            {children}
        </SearchContext.Provider>
    )

}
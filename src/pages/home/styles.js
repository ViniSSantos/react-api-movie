import styled from "styled-components";

export const Container = styled.div`
    h1 {
        text-align: center;
        margin: 4rem 0;
    }

`
export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); // Auto-fit e minmax Fizeram a responsabilidade do grid.
    column-gap: 3rem; // Espaçamenro em rem, ajuda na ResponsabilidadeS
    row-gap: 4rem;
    
`
export const Movie = styled.li`
display: flex;
        flex-direction: column;
        align-items: center;

    img {
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }

    span {
        font-weight: bold;
        font-size: 120%;
        text-align:center;
        
    }

    a {
        transition: all 0.6s;
    }

    a:hover {
        transform: scale(1.3);
    }

`
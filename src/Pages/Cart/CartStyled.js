import styled from '@emotion/styled'


export const CartStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem 2rem;

    .itemCart{
        border-bottom: 1px solid black;
        display: flex;
    }
    .imgItemCart{
        border-radius: 0.8rem;
        height: 7.2rem;
        object-fit: cover;
        padding: 0.5rem;
        width: 8rem;
    }

    .bodyItem{ 
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .updateDeleteItemCart{
        align-items: center;
        display: flex;
        margin: 1rem;
    }
    .deleteItemCart{
        background: none;
        border: none;
        margin: 1rem;
    }
    .imgDeleteItemCart{
        width: 1rem;
    }
    .imgDeleteItemCart:hover{    
        filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
    }
    .emptyCartContainer{
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    .emptyCartLink{
        background-color: #cf2845;
        border-radius: 1.1rem;
        color: antiquewhite;
        margin-top: 0.5rem;
        padding: 0.5rem;
        text-align: center;
        text-decoration: none;
    }

    .totalPriceCart{
        text-align: end;
    }
    .link {
        background-color: #cf2845;
        border-radius: 1.1rem;
        color: antiquewhite;
        margin-top: 0.5rem;
        padding: 0.5rem;
        text-align: center;
        -webkit-text-decoration: none;
        text-decoration: none;
    }
`
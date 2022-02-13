import styled from '@emotion/styled'


export const ItemDetailContainerStyled = styled.div`
    align-items: center;
    display: flex;
    font-family: 'Nanum Gothic', sans-serif;
    justify-content: center;
    padding: 0.8rem;
    width: 100%;

    .itemCardDetailed{
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .itemTitleDetail{
        color: #cf2845;
        font-size: 1.8rem;
        font-weight: 700;
        padding-bottom: 1rem;
        text-align: center;
    }

    .itemBodyDetail{
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .itemImgDetail{
        border-radius: 2rem;
        height: 40vw;
        padding-bottom: 0.4rem;
        width: auto;
    }

    .itemDescriptionDetail{
        font-weight: 600;
        font-size: 0.9rem;
    }

    .itemPriceDetail{
        font-weight: 100;
        font-size: 0.7rem;
    }

`
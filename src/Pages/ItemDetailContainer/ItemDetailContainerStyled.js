import styled from '@emotion/styled'


export const ItemDetailContainerStyled = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
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
        // border-radius: 2rem;
        // height: 40vw;
        // padding-bottom: 0.4rem;
        // width: auto;
        border-radius: 1rem;
        height: 18rem;
        object-fit: cover;
        width: 20rem;
    }

    .itemDescriptionDetail{
        font-weight: 600;
        font-size: 0.9rem;
    }

    .itemPriceDetail{
        font-weight: 100;
        font-size: 0.7rem;
    }

    .checkoutLink{    
        background-color: #cf2845;
        border-radius: 1.1rem;
        color: antiquewhite;
        margin-top: 0.5rem;
        padding: 0.5rem;
        text-align: center;
        text-decoration: none;
    }

    .quantityContainer{
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 0.4rem;
    }
    .quantityItem{
        height: 1rem;
    }

    .iconImg{
        height: 100%;
        width: auto;
    }

    .iconImg:nth-of-type(1){
        margin-right: 0.3rem;
    }

    .iconImg:nth-of-type(2){
        margin-left: 0.3rem;
    }

    input{
        text-align: center;
    }

    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }   

    .buyButton{    
        background: #dec27d;
        border-radius: 0.3rem;
        border: none;
        color: saddlebrown;
        margin-top: 0.7rem;
        padding: 0.3rem;
    }

    .buyButton:hover{
        transform: scale(1.1);
        transition: transform ease 0.3s;
    }

    .buyButton[disabled]{
        text-decoration:line-through;
    }
    .buyButton[disabled]:hover{
        transform:none;
        transition: none;
    }
    .msg-error{
        display: block;
    }
    .navbar-link-404 {
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
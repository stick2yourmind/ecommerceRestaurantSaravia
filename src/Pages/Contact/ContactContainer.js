import styled from '@emotion/styled'

export const ContactContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2{
        margin: 0.5rem;
    }
    form{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 19rem;
    }
    .TextFieldContainer{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0.2rem;
    }
    .textField{
        border-radius: 0.2rem;
        line-height: 1.6rem;
        font-size: 1rem;
    }
    .errorField{
        color: #CF0A2C;
    }
    .btn{
        background-color: #cf2845;
        border-radius: 1.1rem;
        color: antiquewhite;
        margin-top: 0.5rem;
        padding: 0.5rem;
        text-align: center;
        border-width: 0;
    }
    .msg-error{
        display: block;
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


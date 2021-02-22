import styled from 'styled-components';

const Modal = styled.div `
    height:300px;
    min-width:300px;
    background:rgba(0,0,0,0.5);
    position:absolute;
    top:0px;
    left:30px;
    margin-top:-200px;
    z-index:999;
    border:1px solid #007bff;
    img{
        height:100%;
    }
`

export default Modal;
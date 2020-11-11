import React from 'react';
import {Container, Wrapper, Row, a} from './style/footer'

export default function Footer({children, ...restProps}){
    return(
        <Container {...restProps}>{children}</Container>
    )
}

Footer.Wrapper = function footerWrapper({children, ...restProps}){
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function footerRow({children, ...restProps}){
    return <Row {...restProps}>{children}</Row>
}
/*
Footer.Link = function footerLink({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
}
*/






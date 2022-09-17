import {Container, Link, Row} from "@nextui-org/react";

function Footer() {
    return (
        <Container>
            <Row
                justify="center"
                align="center">
                <Link
                    href={process.env.PUBLIC_URL + 'impressum.html'}
                    block
                    css={{
                        bottom: 0,
                        textAlign: "center",
                        margin: 15,
                        zIndex: 1,
                        bgBlur: "$draculaCurrentLineAlpha"
                    }}>
                    Impressum und Datenschutz
                </Link>
            </Row>
        </Container>
    );
}

export default Footer;
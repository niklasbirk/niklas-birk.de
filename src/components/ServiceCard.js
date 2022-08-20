import {Card, Col, Text} from "@nextui-org/react";

function ServiceCard(props) {
    return (
        <Card isPressable>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5}}>
                <Col>
                    <Text size={12} weight="bold" transform="uppercase">
                        {props.introText}
                    </Text>
                    <Text h3>
                        {props.serviceText}
                    </Text>
                    <Text size={12} weight="bold" transform="uppercase">
                        {props.vendorText}
                    </Text>
                </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src={props.logo}
                    // width="50%"
                    // height="50%"
                    objectFit="fill"
                    alt="Card example background"
                />
            </Card.Body>
            {/*<Card.Footer*/}
            {/*    isBlurred*/}
            {/*    css={{*/}
            {/*        position: "absolute",*/}
            {/*        bgBlur: "$draculaCurrentLine",*/}
            {/*        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",*/}
            {/*        bottom: 0,*/}
            {/*        zIndex: 1,*/}
            {/*    }}>*/}
            {/*    <Row justify="center">*/}
            {/*        <Button flat auto rounded color="primary">*/}
            {/*            <Text*/}
            {/*                css={{*/}
            {/*                    color: "inherit"*/}
            {/*                }}*/}
            {/*                size={12}*/}
            {/*                weight="bold"*/}
            {/*                transform="uppercase">*/}
            {/*                Zu den Repositories*/}
            {/*            </Text>*/}
            {/*        </Button>*/}
            {/*    </Row>*/}
            {/*</Card.Footer>*/}
        </Card>

        // <div id="niklas-birk-root">
        //     <img id="logo" alt="Ein Logo von Niklas Birk" src={logo}/>
        //     <div>
        //         <h1>Work in Progress</h1>
        //         Das ist eine Seite im Aufbau.
        //         <br/><br/>
        //         Wichtige links:
        //         <ul>
        //             <li> Mail an <a href="mailto://niklas.birk@niklas-birk.de"> niklas.birk@niklas-birk.de </a></li>
        //             <li> Meine self-hosted git repositories bei <a href="https://git.niklas-birk.de">Gitea</a></li>
        //             <li> Mein self-hosted <a href="https://blog.niklas-birk.de">Blog</a></li>
        //             <li> Meine self-hosted <a href="https://survey.niklas-birk.de">Umfragen</a></li>
        //             <li> ...</li>
        //         </ul>
        //     </div>
        //     <a href={process.env.PUBLIC_URL + 'impressum.html'}>Impressum und Datenschutz</a>
        // </div>
    );
}

export default ServiceCard;
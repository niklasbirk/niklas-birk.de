import Services from "./Services";
import Header from "./Header";
import Footer from "./Footer";
import {Container, Spacer} from "@nextui-org/react";

function SiteContentRoot() {
    return (
        <>
            <Container>
                <Spacer y={2}/>
                <Header />
                <Spacer y={1}/>
                <Services />
                <Spacer y={2}/>
                <Footer />
            </Container>
        </>
    );
}

export default SiteContentRoot;

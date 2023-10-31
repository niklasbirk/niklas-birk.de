import {Grid} from "@nextui-org/react";
import ServiceCard from "./ServiceCard";
import gitLogo from "../assets/git_logo.png";
import blogLogo from "../assets/blog_logo.png";

function Services() {
    return (
        <Grid.Container gap={2} justify="center">
            <Grid>
                <ServiceCard
                    introText="Meine self-hosted"
                    serviceText="git Repositories"
                    vendorText="mit Gitea"
                    logo={gitLogo}
                    buttonText="Zu den Repositories"
                    url='https://git.niklas-birk.de' />
            </Grid>
            <Grid>
                <ServiceCard
                    introText="Mein self-hosted"
                    serviceText="Blog"
                    vendorText="über Mathematik"
                    logo={blogLogo}
                    buttonText="Zum Blog"
                    url='https://math.niklas-birk.de' />
            </Grid>
        </Grid.Container>
    );
}

export default Services;
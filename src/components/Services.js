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
                    url='https://blog.niklas-birk.de' />
            </Grid>
        </Grid.Container>

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

export default Services;
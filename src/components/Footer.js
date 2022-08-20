import {Link} from "@nextui-org/react";

function Footer() {
    return (
        <Link
            href={process.env.PUBLIC_URL + 'impressum.html'}
            block
            css={{
                position: "fixed",
                bottom: 0,
                right: 0,
                textAlign: "center",
                margin: 15
            }}>
            Impressum und Datenschutz
        </Link>
    );
}

export default Footer;
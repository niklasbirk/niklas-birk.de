import {Image, Text} from "@nextui-org/react";
import logo from "../assets/niklas-birk-logo.png";

function Header() {
    return (
        <>
            <Image
                src={logo}
                width={200}
                height={200}
                alt="Ein Logo von Niklas Birk"
                objectFit="fill" />
            <Text
                h1
                color="$draculaCyan"
                css={{
                    textAlign: "center"
                }}
                weight="bold">
                Niklas Birk
            </Text>
        </>
    );
}

export default Header;
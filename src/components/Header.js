import {Image, Spacer, Text} from "@nextui-org/react";
import logo from "../assets/niklas-birk-logo.png";

function Header() {
    return (
        <>
            <Spacer y={3} />
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
            <Spacer y={2} />
        </>
    );
}

export default Header;
import React from "react";
import { Container, Icon, IconArea, Label } from "./styles"

type Props = {
    label: string;
    icon?: any;
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export const Button = ({label, icon, onClick}: Props) => {
    return (
        <Container onClick={onClick}>
            {icon &&
                <IconArea>
                    <Icon src={icon} />
                </IconArea>
            }
            <Label>{label}</Label>
        </Container>
    )
}
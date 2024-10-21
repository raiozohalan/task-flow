import { MenuProps } from "@headlessui/react";

export interface DropdownItemsProps {
    Icon?: React.JSXElementConstructor<any>;
    label: string | React.ReactNode;
    iconColor?: `text-${string}`;
}

export interface DropwdownProps extends MenuProps {
    items: DropdownItemsProps[];
    label?: string | React.ReactNode;
    placeholder?: string | React.ReactNode;
    showIcon?: boolean;
    className?: {
        button?: string;
        items?: string;
    };
    onSelect?: (params: DropdownItemsProps) => void;
}
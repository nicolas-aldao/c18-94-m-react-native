
import { Dispatch, FC, SetStateAction } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { StyledView } from "./styles";
import { Colors } from "@/constants/Styles";

interface DropdownProps {
    placeholder: string;
    open: boolean;
    value: any;
    items: any;
    setOpen: Dispatch<SetStateAction<any>>;
    setValue: Dispatch<SetStateAction<any>>;
    setItems: Dispatch<SetStateAction<any>>;
    disabled: boolean;
}

export const Dropdown: FC<DropdownProps> = ({ placeholder, open, value, items, setOpen, setValue, setItems, disabled }) => {
    return (
        <StyledView>
            <DropDownPicker
                style={{ borderWidth: 3, borderColor: Colors.light.primary }}
                placeholder={placeholder}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                disabled={disabled}
            />
        </StyledView>
    )
}
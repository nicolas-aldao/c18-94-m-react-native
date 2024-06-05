
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
                style={{ borderWidth: 0, backgroundColor: Colors.light.gray }}
                placeholder={placeholder}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                disabled={disabled}
                dropDownContainerStyle={{
                    backgroundColor: Colors.light.gray,
                    borderWidth: 0
                }}
                disabledStyle={{
                    opacity: 0.5
                }}
            />
        </StyledView>
    )
}
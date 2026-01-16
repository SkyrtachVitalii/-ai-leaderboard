export interface IButton {
    text: string;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
}
interface Props{
    color: string;
    children: string;
    onClick(): void;
}
function Button({color,children,onClick}:Props){
    return <button className={'btn '+'btn-'+color} onClick={onClick}>{children}</button>
}
export default Button

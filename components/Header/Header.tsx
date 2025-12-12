type HeaderType = {
    Title : string;
}
function Header(props : HeaderType){
    return <h1>{props.Title}</h1>
}
export default Header;
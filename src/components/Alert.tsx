interface Props{
    color: string;
}
function Alert({color}:Props) {
  return (
    <div className={'alert'+' alert-'+color +' alert-dismissible fade show'} role="alert">
      <h1>Lets Fuck out of here</h1>
    </div>
  );
}
export default Alert
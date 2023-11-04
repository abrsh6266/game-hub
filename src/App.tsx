import { useEffect, useRef } from "react";

function App() {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(()=>{
    if(ref.current) ref.current.focus()
  })
useEffect(()=>{
  document.title= 'abxo9'
})
  return (
    <div>
      <input ref={ref} type="text" className="form-control m-5" />
    </div>
  );
}
export default App;

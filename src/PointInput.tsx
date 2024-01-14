type StateType = {
    suica:number,
    toica:number,
    icoca:number
}

const PointInput = ({name,state,dispatch}:{name:string,state:StateType,dispatch:React.Dispatch<React.SetStateAction<StateType>>}) => {
  return (
    <div>
        {name}:<input 
            type="number"
            name={name}
            value={state[name as keyof object]}
            onChange={(e) => dispatch({...state, [e.target.name]:e.target.value})}
        />
    </div>
  )
}

export default PointInput
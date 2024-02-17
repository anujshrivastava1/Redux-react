import React,{useState} from "react";
// import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from "./cake/cakeActions";
import { connect } from 'react-redux';

function CakeContainer(props){
    const [number, setNumber] = useState(1)
    // const numOfCakes = useSelector(state => state.cake.numOfCakes)
    // const dispatch = useDispatch();
return(
    <div>
        <h2>
            Number of Cakes - {props.numOfCakes}
        </h2>
        <input type='text' value={number} onChange={e=> setNumber(e.target.value)}></input>
        <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
)
}

const mapStateToProps = (state, ownProps) => {
    return{
        numOfCakes : state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        buyCake : number => dispatch(buyCake(number))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
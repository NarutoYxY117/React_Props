import PropTypes from 'prop-types'
function Profile(props){
    const style1={color:'#ffffff'} 
    const style2={color:'#ffffff' ,padding:'0.8rem'}
    
    return(
        <div className="profile">
        {props.children}
        <h1 style={style1}>{props.fullName}</h1>
        <h2 style={style2}>{props.bio} - {props.profession}</h2>
        <button onClick={props.handleName}>Click Here!</button>
        </div>
    );

}
Profile.propTypes={
    fullName:PropTypes.string, bio:PropTypes.string,profession:PropTypes.string, handelName:PropTypes.func
}
Profile.defaultProps={
    fullName: "full-name",bio: "bio",profession: "profession"
}
export default Profile;
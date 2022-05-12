function User (props) {
    const {name, age, isBanned, handleBan, index} = props
    return (
        <>
            {name} {age} <button onClick={() => handleBan(index)}>{isBanned ? 'Unban' : 'Ban'}</button><br/>
        </>
    )
}

export default User
const StudentCard = (props) => {    //other (props) => (fname,lname,age)
    console.log(props)
    const {fname,lname,age}=props;
    return (
        <div className="shadow-lg p-4 rounded-md">
            FirstName : {fname} <br/>
            LastName : {lname}<br/>
            FullName : {fname} {props.lname}<br/>
            Age : {age}
        </div>
    )
}

export default StudentCard;

//props is used to set the data from parent component
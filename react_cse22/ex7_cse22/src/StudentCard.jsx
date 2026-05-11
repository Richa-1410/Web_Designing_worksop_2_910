function StudentCard({Name, Age, Course}) {
    return (
        <div className="student-card">
            <h2 style = {{ color: 'blue', backgroundColor: 'pink' }}>Name: {Name}</h2>
            <p style = {{ fontSize: '20px'}}>Age: {Age}</p>
            <p style = {{ fontSize: '20px'}}>Course: {Course}</p>

        </div>
    );
}
export default StudentCard;

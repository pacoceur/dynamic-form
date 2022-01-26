export default ({ label, uid }) => {
    return (
        <div className="form-group mb-2">
          <label htmlFor={uid}>{label}</label>
          <input type="text" className="form-control" id={uid} placeholder={`Enter your ${label.toLowerCase()}`} />
        </div>
    )
}
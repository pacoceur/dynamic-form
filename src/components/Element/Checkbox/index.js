export default ({ label, uid }) => {
    return (
        <div className="form-check mb-2">
            <input type="checkbox" className="form-check-input" id={uid} />
            <label className="form-check-label" htmlFor={uid}>{label}</label>
        </div>
    )
}
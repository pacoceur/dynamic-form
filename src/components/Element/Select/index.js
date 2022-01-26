export default ({ label, uid, options }) => {
    return (
        <div className="mb-2">
            <label htmlFor={uid}>{label}</label>
            <select className="form-select" aria-label="Default select example" id={uid}>
                <option>Select an option</option>
                {options.map((option, i) => {
                    return (
                        <option key={i} value={i}>{option.option_label}</option>
                    )
                })}
            </select>
        </div>
    )
}
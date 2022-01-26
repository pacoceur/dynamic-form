export default ({ label, uid, options }) => {
    return (
        <div className="mb-2">
            <label>{label}</label><br />
            {options.map((option, i) => {
                return (
                    <div className="form-check form-check-inline" key={i}>
                        <input className="form-check-input" name={label} type="radio" id={i} value="option1" />
                        <label className="form-check-label" htmlFor={i}>
                            {option.option_label}
                        </label>
                    </div>
                )
            })}
        </div>
    )
}
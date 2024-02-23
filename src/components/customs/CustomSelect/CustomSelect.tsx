import './CustomSelect.styles.css'
const CustomSelect = ({ label, onChange, arrayOptionsSelect, value, name }) => {
    return (
        <>
            <label htmlFor="">{label}</label>
            <select

                onChange={onChange}
                value={value}
                name={name}
                className="custom-select"
            >
                {
                    arrayOptionsSelect.map(
                        (option, index) => {
                            return (
                                <option className="option-select" key={index} value={option}>
                                    {option}
                                </option>
                            )
                        }
                    )
                }
            </select>
        </>
    )
}

export default CustomSelect
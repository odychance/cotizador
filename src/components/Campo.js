import { Campo, Label, Select } from './Formulario/styled'

export const CustomField = ({ title, options, marca, name, year, onChange }) => {
    return (
        <Campo>
            <Label>{title}</Label>
            <Select
                onChange={onChange}
                name={name}
            >
                <option value="">--Seleccione--</option>
                {options.map(({ value, name }) => (
                    <option value={value}>{name}</option>
                ))}
            </Select>
        </Campo>
    )
}
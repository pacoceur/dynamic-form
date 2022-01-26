import Input from './Input';
import Checkbox from './Checkbox';
import Select from './Select';
import Radio from './Radio';

export default ({ field: { type, label, uid, options } }) => {
    switch(type) {
        case "text":
            return <Input label={label} uid={uid} />
        case "checkbox":
            return <Checkbox label={label} uid={uid} />
        case "select":
            return <Select label={label} uid={uid} options={options} />
        case "radio":
            return <Radio label={label} uid={uid} options={options} />
        default:
            return null;
    }
}
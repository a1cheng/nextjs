type InputTextProps = {
    id: string;
    label:string;
    required:boolean;
}

export function InputText(props: InputTextProps){
    return (
    <section>
        <label htmlFor={props.id}>{props.label} {!props.required && <small>optional</small>}</label>
        <input type="text" id={props.id} name={props.label} required={props.required} />
    </section>
    )
}
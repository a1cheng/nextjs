import { InputText } from "../components/InputText";

export default function Home() {
  return (
     <><h1>Hello</h1>
     <InputText id={"firstname"} label={"first name"} required={true}></InputText>
     <InputText id={"middlename"} label={"middle name"} required={false}></InputText>
     <InputText id={"lastname"} label={"last name"} required={true}></InputText>
     </>
  )
}

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router';
import "./style.css"

const Form = ({setUser}) => {

    const history = useHistory()

    const formSchema = yup.object().shape({
        name: yup.string().required("Name Required"),
        email: yup.string().required("Email Required"),
        password: yup.string().required("Password Required.").min(8, "invalid password").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, "Password needs at least one capital letter, one number and one symbol"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords do not match"),
        hobby: yup.string().required("Hobby Required"),
        age: yup.string().required("Age Required"),
        favoriteMovie: yup.string().required("Favorite Movie Required")
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSubmit = (data) => {

        setUser({data})
        history.push("/home")

    }

    return(
        <div>   
                <h1>Registration Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" type="string"{...register("name")} required/>
                    {errors.name?.message}
                <input placeholder="Email" {...register("email")} required/>
                    {errors.email?.message}
                <input placeholder="Password" type="password" {...register("password")} required/>
                    {errors.password?.message}
                <input placeholder="Password Confirmation" type="password" {...register("confirmPassword")} required/>
                    {errors.confirmPassword?.message}
                <input placeholder="Hobby" {...register("hobby")} required/>
                    {errors.hobby?.message}
                <input placeholder="Age" type="number" {...register("age")} required/>
                    {errors.age?.message}
                <input placeholder="Favorite Movie" {...register("favoriteMovie")} required/>
                    {errors.favoriteMovie?.message}
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Form
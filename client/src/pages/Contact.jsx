import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        comment: "",
    }); //initial state, what we are updating 


    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false); //storing validation messages 

    const handleChange = (e) => {
        setSubmitted(false);
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    const validate = () => {
        const newErrors = {};
            //if empty add value 
        if (!form.name.trim()) newErrors.name = "Name is required.";
        
        if (!form.email.trim()) {
            newErrors.email = "Email is required."
        } else {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//checking for email format
        if (!emailRegex.text(form.email))
            newErrors.emmail = "Enter a valid email.";
        }
        if (!form.comment.trim())
            newErrors.comment = 'Comment is required.'; //checking for comment

        return newErrors
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //preventin refresh

        const newErrors = validate();
        setErrors(newErrors); //save errors into state

        if (Object.keys(newErrors).length === 0) { //if no errors; this is a vlid form 
            setSubmitted(true);

            setForm({ name: "", email: "", comment: "" }) //reset
        }
    };

    return ( //display 
        <div style = {{
            margin: "40px auto",
            padding: 0,
            border: "1px solid ",
            padding: "20px 30px",
            borderRadius: "30px",
            justifyContent: "center",
            maxWidth: "720px",
            display: "flex",
            flexDirection: "column"
        }}>
            <h1 style={{
                alignSelf: "center"
            }}>Help Center</h1>
            <p style={{
                alignSelf: "center"
            }}>Contact Us</p>

            {submitted && (
                <div>Message Submitted</div> //showing success
            )}

            <form onSubmit={handleSubmit} noValidate>
                <div style = {{
                    display: "flex",
                    flexDirection: "column",
                    margin: "20px",
                }}>
                    <label>Name*</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your name"
                    style = {{
                        padding: "10px",
                        maxWidth: "80vw",
                    }}
                    />
                    {errors.name && <p>{errors.name}</p>} 
                    {/* if error exist show message  */}
                </div>

                <div style = {{
                    display: "flex",
                    flexDirection: "column",
                    margin: "20px",
                }}>
                    <label>Email</label>
                    <input name="email" value={form.email} onChange={handleChange} placeholder="Your email"/>
                    {errors.email && <p>{errors.email}</p>} 
                    {/* if error exist show message  */}
                </div>

                <div style = {{
                    display: "flex",
                    flexDirection: "column",
                    margin: "20px",
                }}>
                    <label>Comment</label>
                    <textarea name="comment" value={form.comment} onChange={handleChange} placeholder="Write your message"/>
                    {errors.comment && <p>{errors.coment}</p>}
                </div>

                <button type="submit">Submit</button>
            </form>
            <section>
                <h2>Get More Information</h2>
            </section>
        </div>
    )
}
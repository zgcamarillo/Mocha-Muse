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
        if (!emailRegex.test(form.email))
            newErrors.email = "Enter a valid email.";
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
        <div id="contactPage">
                <div id="contactCard">
                <h1 id="contactTitle">Contact Us</h1>
                <p id="contactSubtitle">Have a question? Please leave a message.</p>

                {submitted && (
                    <div id="success">Message Submitted</div> //showing success
                )}

                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label>Name<span className="req">*</span></label>
                        <input 
                        id="name"
                        name="name" 
                        value={form.name} 
                        onChange={handleChange} 
                        placeholder="Your name"
                        autoComplete="name"
                        />
                        {errors.name && <p className="error">{errors.name}</p>} 
                        {/* if error exist show message  */}
                    </div>

                    <div className="form-group">
                        <label>Email<span className="req">*</span></label>
                        <input 
                        id="email"
                        name="email" value={form.email} onChange={handleChange} placeholder="Your email"
                        autoComplete="email"/>
                        {errors.email && <p className="error">{errors.email}</p>} 
                        {/* if error exist show message  */}
                    </div>

                    <div className="form-group">
                        <label>Comment<span className="req">*</span></label>
                        <textarea 
                        id="comment"
                        name="comment" value={form.comment} onChange={handleChange} placeholder="How can we help?"/>
                        {errors.comment && <p className="error">{errors.comment}</p>}
                    </div>

                    <button type="submit" className="btnPrimary">Submit</button>

                    <p className="privacy-hint">By submitting, you agree we may contact you about your message.
                    </p>
                </form>
                <section className="contact-extra">
                    <h2>Get More Information</h2>

                    <div className="extra-grid">
                        <div className="extra-card">
                            <h3>Order Help</h3>
                            <p>Shipping, returns, and order updates</p>
                        </div>

                        <div className="extra-card">
                            <h3>Product Questions</h3>
                            <p>Planners, inserts, sizing, and materials.</p>
                        </div>

                        <div className="extra-card">
                            <h3>Collabs</h3>
                            <p>Brand partnerships and creator inquiries.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
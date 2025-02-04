import React,{useState} from 'react'

const Subscribe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle subscription logic here (e.g., send data to the server)
        alert(`Thank you for subscribing, ${formData.name}!`);
        // Reset form after submission
        setFormData({ name: '', email: '' });
      };
  return (
    <div className="subscribe-container">
    <div className="subscribe-content">
      <div className="text-section">
        <h1>Subscribe to Weekly All-Church Updates</h1>
        <p>
          Newbreak Church partners with you and your family. Every week we send out an email providing helpful links to the week's content, guides for kids and students so they can follow along at home, as well as updated news and information that are important to Christ Church as a whole and specific to our campuses across India County.
        </p>
      </div>

      <div className="form-section">
        <form onSubmit={handleSubmit} className="subscribe-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
            />
          </div>

          <button type="submit" className="subscribe-button">
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  </div>
   
  )
}

export default Subscribe

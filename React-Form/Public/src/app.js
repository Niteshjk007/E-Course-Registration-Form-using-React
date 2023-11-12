class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      address: '',
      phone: '',
      course: 'front-end',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    alert(
      `Thank you for registering!\n\nName: ${this.state.name}\nEmail: ${this.state.email}\nAddress: ${this.state.address}\nPhone: ${this.state.phone}\nCourse: ${this.state.course}`
    );
    event.preventDefault();
  }

  render() {
    return (
      <div className="registration-container">
        <div className="registration-header">
          <h1>E-Course Registration Page</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="name">Name:</label>
                </th>
                <td>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="email">Email:</label>
                </th>
                <td>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="address">Address:</label>
                </th>
                <td>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="phone">Phone:</label>
                </th>
                <td>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="course">Course:</label>
                </th>
                <td>
                  <select
                    id="course"
                    name="course"
                    value={this.state.course}
                    onChange={this.handleChange}
                  >
                    <option value="front-end">Front-end Development</option>
                    <option value="back-end">Back-end Development</option>
                    <option value="data-science">Data Science</option>
                    <option value="machine-learning">Machine Learning</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th colSpan="2">
                  <button type="submit">Register</button>
                </th>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<RegistrationForm />, document.getElementById('app'));

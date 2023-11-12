'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegistrationForm = function (_React$Component) {
  _inherits(RegistrationForm, _React$Component);

  function RegistrationForm(props) {
    _classCallCheck(this, RegistrationForm);

    var _this = _possibleConstructorReturn(this, (RegistrationForm.__proto__ || Object.getPrototypeOf(RegistrationForm)).call(this, props));

    _this.state = {
      name: '',
      email: '',
      address: '',
      phone: '',
      course: 'front-end'
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(RegistrationForm, [{
    key: 'handleChange',
    value: function handleChange(event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      alert('Thank you for registering!\n\nName: ' + this.state.name + '\nEmail: ' + this.state.email + '\nAddress: ' + this.state.address + '\nPhone: ' + this.state.phone + '\nCourse: ' + this.state.course);
      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'registration-container' },
        React.createElement(
          'div',
          { className: 'registration-header' },
          React.createElement(
            'h1',
            null,
            'E-Course Registration Page'
          )
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          React.createElement(
            'table',
            null,
            React.createElement(
              'tbody',
              null,
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'th',
                  null,
                  React.createElement(
                    'label',
                    { htmlFor: 'name' },
                    'Name:'
                  )
                ),
                React.createElement(
                  'td',
                  null,
                  React.createElement('input', {
                    type: 'text',
                    id: 'name',
                    name: 'name',
                    value: this.state.name,
                    onChange: this.handleChange,
                    required: true
                  })
                )
              ),
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'th',
                  null,
                  React.createElement(
                    'label',
                    { htmlFor: 'email' },
                    'Email:'
                  )
                ),
                React.createElement(
                  'td',
                  null,
                  React.createElement('input', {
                    type: 'email',
                    id: 'email',
                    name: 'email',
                    value: this.state.email,
                    onChange: this.handleChange,
                    required: true
                  })
                )
              ),
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'th',
                  null,
                  React.createElement(
                    'label',
                    { htmlFor: 'address' },
                    'Address:'
                  )
                ),
                React.createElement(
                  'td',
                  null,
                  React.createElement('input', {
                    type: 'text',
                    id: 'address',
                    name: 'address',
                    value: this.state.address,
                    onChange: this.handleChange,
                    required: true
                  })
                )
              ),
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'th',
                  null,
                  React.createElement(
                    'label',
                    { htmlFor: 'phone' },
                    'Phone:'
                  )
                ),
                React.createElement(
                  'td',
                  null,
                  React.createElement('input', {
                    type: 'tel',
                    id: 'phone',
                    name: 'phone',
                    value: this.state.phone,
                    onChange: this.handleChange,
                    required: true
                  })
                )
              ),
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'th',
                  null,
                  React.createElement(
                    'label',
                    { htmlFor: 'course' },
                    'Course:'
                  )
                ),
                React.createElement(
                  'td',
                  null,
                  React.createElement(
                    'select',
                    {
                      id: 'course',
                      name: 'course',
                      value: this.state.course,
                      onChange: this.handleChange
                    },
                    React.createElement(
                      'option',
                      { value: 'front-end' },
                      'Front-end Development'
                    ),
                    React.createElement(
                      'option',
                      { value: 'back-end' },
                      'Back-end Development'
                    ),
                    React.createElement(
                      'option',
                      { value: 'data-science' },
                      'Data Science'
                    ),
                    React.createElement(
                      'option',
                      { value: 'machine-learning' },
                      'Machine Learning'
                    )
                  )
                )
              ),
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'th',
                  { colSpan: '2' },
                  React.createElement(
                    'button',
                    { type: 'submit' },
                    'Register'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return RegistrationForm;
}(React.Component);

ReactDOM.render(React.createElement(RegistrationForm, null), document.getElementById('app'));

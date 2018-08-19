var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var descriptions = {
    'Q': 'Heater 1',
    'W': 'Heater 2',
    'E': 'Heater 3',
    'A': 'Heater 4',
    'S': 'Clap',
    'D': 'Open HH',
    'Z': 'Kick n\'Hat',
    'X': 'Kick',
    'C': 'Closed HH' };


var sounds = {
    'Q': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    'W': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    'E': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    'A': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    'S': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    'D': 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    'Z': 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    'X': 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    'C': 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' };var


DrumMachine = function (_React$Component) {_inherits(DrumMachine, _React$Component);

    function DrumMachine(props) {_classCallCheck(this, DrumMachine);var _this = _possibleConstructorReturn(this, (DrumMachine.__proto__ || Object.getPrototypeOf(DrumMachine)).call(this,
        props));
        _this.handlePick = _this.handlePick.bind(_this);
        _this.power = _this.power.bind(_this);
        _this.state = {
            active: true,
            text: '' };return _this;



    }_createClass(DrumMachine, [{ key: 'someAction', value: function someAction(

        option) {
            if (this.state.active === true) {
                var myValue = descriptions[option];
                var mySound = sounds[option];
                document.getElementById(option).style.background = "red";

                this.setState(function () {
                    return {
                        text: myValue };


                });


                var audio = new Audio(mySound);
                audio.play();

                setTimeout(function () {
                    document.getElementById(option).style.background = "#6F5C5C";
                }, 200);

            }


        } }, { key: 'handlePick', value: function handlePick(



        e) {
            console.log(e.target.id);
            var option = e.target.id;
            this.someAction(option);
        } }, { key: 'componentDidMount', value: function componentDidMount()

        {var _this2 = this;
            console.log('componentDidMount');
            document.addEventListener("keydown", function (e) {
                console.log(e.key.toUpperCase());
                _this2.someAction(e.key.toUpperCase());
            });
        } }, { key: 'power', value: function power()

        {var _this3 = this;
            this.setState(function () {
                return {
                    active: !_this3.state.active };

            });
        } }, { key: 'render', value: function render()

        {

            return React.createElement('div', { id: 'drum-machine' },
                React.createElement('div', null,
                    React.createElement('h1', { className: 'header__title' }, 'DRUM MACHINE'),
                    React.createElement('p', { style: { padding: '0 20px' } }, 'This is one of the Front End Libraries projects of freeCodeCamp. The project\'s goal is to build a drum machine with the functionality indicated in the user stories: ',
                        React.createElement('br', null),
                        React.createElement('a', { href: 'https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-drum-machine', target: '_blank' }, 'https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-drum-machine.'))),



                React.createElement('div', { className: 'container' },
                    React.createElement('div', { id: 'pad' },
                        React.createElement('table', null,
                            React.createElement('tbody', null,
                                React.createElement('tr', null, React.createElement('td', { id: 'Q', className: 'drum-pad', onClick: this.handlePick }, 'Q',
                                        React.createElement('audio', { src: this.state.url, autoPlay: true })), React.createElement('td', { id: 'W', className: 'drum-pad', onClick: this.handlePick }, 'W'), React.createElement('td', { id: 'E', className: 'drum-pad', onClick: this.handlePick }, 'E')),
                                React.createElement('tr', null, React.createElement('td', { id: 'A', className: 'drum-pad', onClick: this.handlePick }, 'A'), React.createElement('td', { id: 'S', className: 'drum-pad', onClick: this.handlePick }, 'S'), React.createElement('td', { id: 'D', className: 'drum-pad', onClick: this.handlePick }, 'D')),
                                React.createElement('tr', null, React.createElement('td', { id: 'Z', className: 'drum-pad', onClick: this.handlePick }, 'Z'), React.createElement('td', { id: 'X', className: 'drum-pad', onClick: this.handlePick }, 'X'), React.createElement('td', { id: 'C', className: 'drum-pad', onClick: this.handlePick }, 'C'))))),



                    React.createElement('div', { id: 'controls' },
                        React.createElement('div', { style: { paddingLeft: '45%' }, onClick: this.power }, 'Power',

                            React.createElement('div', { id: 'cPower', style: { width: '4.6rem', eight: '1.6rem', background: 'black', cursor: 'pointer' } },
                                React.createElement('div', { style: { width: '50%', display: 'inline-block', color: this.state.active ? 'transparent' : 'white' } }, 'off'),
                                React.createElement('div', { style: { width: '50%', display: 'inline-block', color: this.state.active ? 'white' : 'transparent' } }, 'on'))),


                        React.createElement('div', { id: 'display', style: { paddingTop: '30%', paddingLeft: '15%' } },
                            React.createElement('div', { style: { width: '80%', height: '40px', textAlign: 'center', background: '#6F5C5C', paddingTop: '15px', color: 'white' } }, this.state.active ? this.state.text : this.state.text = '')))),




                React.createElement('div', { id: 'footer' }));


        } }]);return DrumMachine;}(React.Component);



ReactDOM.render(React.createElement(DrumMachine, null), document.getElementById('app'));
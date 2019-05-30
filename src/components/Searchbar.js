import React from 'react';

class Searchbar extends React.Component {

    state = {
        term: '',
        typing: false,
        timeout : 0
    };
    // handleChange = (event) => {
    //     this.setState({
    //         term: event.target.value
    //     });
    // };

    handleChange = (event) => {
        const self = this;

        if (self.state.timeout) {
           clearTimeout(self.state.timeout);
        }
    
        self.setState({
           term: event.target.value,
           typing: false,
           timeout: setTimeout(() => {
               self.props.handleFormSubmit(self.state.term);
             }, 1500)
        });
    }

    handleSubmitButton = (event) => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    // handleSubmit = event => {
    //     event.preventDefault();
    //     this.props.handleFormSubmit(this.state.term);
    // }

    render() {
        return (
            <div className='search-bar ui segment' style={{borderRadius:'20px', backgroundColor:'whitesmoke'}}>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field' >
                        <h3 style={{fontWeight:'bold', textAlign:'center', letterSpacing:'3px'}}>VIDEO SEARCH ENGINE</h3>
                        <input onChange={this.handleChange.bind(this)} style={{borderRadius:'20px'}}type="text" placeholder="Search Video Here" value={this.state.term}/>
                        <div style={{textAlign:'center', marginTop:'20px'}}><button onClick={this.handleSubmitButton.bind(this)} type="submit" >SUBMIT</button></div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Searchbar;
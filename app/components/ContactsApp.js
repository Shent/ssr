import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ContactList from './ContactList';
import SearchBar from './SearchBar';


export default class ContactsApp extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            contacts: this.props.initialData || [],
            filterText: ''
        }
    }

    handleUserInput(searchTerm) {
        this.setState({filterText:searchTerm})
    }

    render(){
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    onUserInput={this.handleUserInput.bind(this)}
                />
                <ContactList
                    contacts={this.state.contacts}
                    filterText={this.state.filterText}
                />
            </div>
        );
    }
}

ContactsApp.propTypes = {
    initialData: PropTypes.any
};
